// /** @type {import("next").NextConfig} */
// const config = {
//   poweredByHeader: false,
//   reactStrictMode: true,
//   transpilePackages: [], // Remover se não for necessário
//   basePath: '/Algorithms', // Ajustar se necessário
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**",
//       },
//     ],
//   },
//   async redirects() {
//     return [
//       {
//         source: "/",
//         destination: "/profile",
//         permanent: true,
//       },
//       {
//         source: "/admin",
//         destination: "/profile",
//         permanent: true,
//       },
//     ];
//   },
// };

// export default config;

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
        hostname: "example.com", // Substitua por domínios específicos se possível
      },
    ],
  },
  output: 'export',
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