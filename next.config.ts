import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    allowedDevOrigins: ["192.168.29.59"],
};

// Make sure you wrap your `nextConfig`
// with the `withPayload` plugin
export default withPayload(nextConfig) 