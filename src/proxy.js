
import { NextResponse } from "next/server";
import { auth } from "./auth";


export async function proxy(request) {
  // const { nextUrl } = request;
  // // Is the user authenticated? (req.auth is provided by the auth wrapper)
  // const isAuthenticated = await auth();


  // // Protect /foods and all subpaths
  // const isFoodsRoute = nextUrl.pathname.startsWith("/foods");

  // if (isFoodsRoute && !isAuthenticated) {
  //   // Redirect to sign-in, preserve original URL for post-login redirect
  //   const callbackUrl = nextUrl.pathname + nextUrl.search;
  //   const signInUrl = new URL("/api/auth/signin", nextUrl.origin); // or your custom /sign-in page
  //   signInUrl.searchParams.set("callbackUrl", callbackUrl);

  //   return NextResponse.redirect(signInUrl);
  // }

  // Allow the request to proceed
  return NextResponse.next();
}

// Apply only to /foods routes (prevents running on every request → better perf)
export const config = {
  // matcher: ["/foods/:path*"],
};