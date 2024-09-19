/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'g-lvcxvidfork.vusercontent.net',
                port: '',
                pathname: '/placeholder.svg',
            },
        ],
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
};

export default nextConfig;
