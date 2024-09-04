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
    remotePatterns: [
      {
        protocol: "https",
<<<<<<< HEAD
        hostname: "**", // Permitir todos os domínios para imagens
=======
        hostname: "**", // Substitua por domínios específicos se possível
>>>>>>> 187044f0ac04b2db9f0f011a9290fbacd9131fe6
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/profile",
        permanent: true,
      },
      {
        source: "/admin",
        destination: "/profile",
        permanent: true,
      },
    ];
  },
};

export default config;
