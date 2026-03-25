"use server"

//sign in with github
import { signIn } from "@/auth";
export const signInWithGithub = async () => {
    await signIn("github")
}
