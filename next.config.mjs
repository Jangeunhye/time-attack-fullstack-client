/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        hostname:
          "port-0-time-attack-fullstack-server-am952nltdolbtm.sel5.cloudtype.app",
      },
    ],
  },
};
export default nextConfig;
