import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: 'secret' });

    const protectedRoutes = ["/dashboard", "/profile", "/settings"];

    if (protectedRoutes.some((route) => req.url.includes(route))) {
        if (!token) {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard", "/profile", "/settings"],
};

