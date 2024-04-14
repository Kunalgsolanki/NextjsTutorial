// import { NextResponse } from "next/server"
// import type { NextRequest } from "next/server"

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/user", request.url))
// }

// export const config = {
//   match: '/Deshbord/:path*',
// }


export function middleware (){
   return console.log("middle")

}