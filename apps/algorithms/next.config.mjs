/** @type {import("next").NextConfig} */
const config = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
  poweredByHeader: false,
  reactStrictMode: true,
  transpilePackages: [], // Remover se não for necessário
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['img.shields.io', 'github-readme-stats.vercel.app'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Permitir todos os domínios para imagens

      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/login",
        permanent: true,
      },
      // {
      //   source: "/admin",
      //   destination: "/profile",
      //   permanent: true,
      // },
    ];
  },
};

export default config;
