/** @type {import('next').NextConfig} */
import withNextIntl from "next-intl/plugin";

const nextIntlConfig = withNextIntl();

export default nextIntlConfig({
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-src https://link.receptyv.ca https://link.msgsndr.com http://localhost:3000; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://link.receptyv.ca https://link.msgsndr.com;",
          },
        ],
      },
    ];
  },
});
