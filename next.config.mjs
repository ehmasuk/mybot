/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "robohash.org",
            },
        ],
    },
    reactStrictMode: false,
};

export default nextConfig;
