import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Ambil token dari cookies
  const token = request.cookies.get("token");

  // Cek apakah path yang diminta membutuhkan autentikasi
  const protectedPaths = ["/dashboard", "/workouts", "/workouts/create"];

  // Jika pengguna mencoba mengakses halaman yang memerlukan autentikasi
  if (protectedPaths.includes(request.nextUrl.pathname)) {
    // Jika tidak ada token, arahkan ke login
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Jika pengguna sudah login dan mencoba mengakses halaman login/register, arahkan ke dashboard
  if (
    token &&
    (request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/register")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Untuk halaman root ("/"), arahkan ke /dashboard jika sudah login, atau ke /login jika belum
  if (request.nextUrl.pathname === "/") {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Jika tidak ada masalah, lanjutkan request
  return NextResponse.next();
}

// Tentukan route-path yang akan di-capture oleh middleware
export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/login",
    "/register",
    "/workouts",
    "/workouts/create",
  ],
};
