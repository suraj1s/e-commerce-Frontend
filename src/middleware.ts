import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";
const Cookies = require("js-cookie");

const routsWithAuth = ["", "auth", "auth/signin"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest, response: NextResponse) {
  const token: any = request.cookies.get("refresh_token")?.value ?? null;
  const tokenValidation = (token?: string) => {
    try {
      let decoded: any;
      decoded = jwtDecode(token ? token : "");
      if (decoded && decoded.exp && decoded.user_id) {
        if (Date.now() > decoded.exp * 1000) {
          Cookies.remove("access_token");
          Cookies.remove("refresh_token");
          window.location.href = "/auth/signin";
          return false;
        }
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  };
  const is_token_valid = tokenValidation(token);
  const { pathname } = request.nextUrl;
  const paths = pathname.split("/");
  if (is_token_valid) {
    if (routsWithAuth.includes(paths[1])) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } else {
      return NextResponse.next();
    }
  } else {
    if (routsWithAuth.includes(paths[1])) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/auth/signin", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};
