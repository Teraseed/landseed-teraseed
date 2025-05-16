import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 临时禁用中间件，只返回原始响应
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function middleware(request: NextRequest) {
  // 简单地返回原始响应，不做任何修改
  return NextResponse.next();
}

// 配置中间件适用于所有路由
export const config = {
  matcher: "/:path*",
};
