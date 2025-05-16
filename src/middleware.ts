import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function middleware(request: NextRequest) {
  // Clone the response
  const response = NextResponse.next();

  // 设置CSP头，允许iframe嵌入
  response.headers.set(
    "Content-Security-Policy",
    `default-src 'self'; 
     script-src 'self' 'unsafe-inline' 'unsafe-eval' https://link.receptyv.ca; 
     style-src 'self' 'unsafe-inline'; 
     img-src 'self' data: blob:; 
     font-src 'self'; 
     connect-src 'self'; 
     frame-src https://link.receptyv.ca; 
     frame-ancestors 'self' https://teraseed.landseed.ca https://landseed.ca;`
  );

  // 明确删除X-Frame-Options头，确保它不会阻止iframe嵌入
  response.headers.delete("X-Frame-Options");

  return response;
}

// 配置中间件适用于所有路由
export const config = {
  matcher: "/:path*",
};
