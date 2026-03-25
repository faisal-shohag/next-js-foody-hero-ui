import { getUserByEmail } from "@/lib/data";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut, session } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        if (credentials === null) return null;

        const user = getUserByEmail(credentials.email);

        if (user) {
          if (user.password === credentials.password) {
            return user;
          } else {
            throw new Error("Invalid password");
          }
        } else {
          throw new Error("User not found");
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      //   console.log({ user, account, profile, email, credentials });
      return true;
    },
    async redirect({ url, baseUrl }) {
      //   console.log({ baseUrl });
      return baseUrl;
    },
    async session({ session, user, token }) {
      session.accessToken = token.accessToken;
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      //   console.log({ token, user, account, profile, isNewUser });
      if (account) {
        token.accessToken = account.access_token;
        token.provider = account.provider;
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
  },
  secret: "next-auth-secret",
  pages: {
    signIn: "/auth/signin",
  },
});

export const { GET, POST } = handlers;
