import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const nonce = crypto.randomUUID();

  const response = NextResponse.next();
  response.headers.set("x-nonce", nonce);

  console.log(`Generated nonce: ${nonce} for ${request.url}`);

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
