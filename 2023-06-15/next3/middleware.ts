import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  const cookies = request.cookies.get("auth");
  console.log(cookies);
  if (cookies === undefined) {
    return new NextResponse("Unauthorized", {
      status: 401,
      statusText: "Unauthorized",
    });
  }
}

export const config = {
  matcher: ["/privado/:path*", "/"]
};
