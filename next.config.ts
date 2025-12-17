/**
 * Copyright 2025 Suryansh Singh
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * ------------------------------------------------------------------------------------------------------
 *
 * @path [ROOT]/next.config.ts
 * @file next.config.ts
 * @description Configuration file for Next.js
 *
 * @author thedevmystic (Surya)
 * @copyright 2025 Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2025 Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import withSerwistInit from "@serwist/next";

// MDX Plugins
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrismPlus from 'rehype-prism-plus';

/**
 * @description To determine whether it is production build, or not.
 */
const isProd: boolean = process.env.NODE_ENV === "production";

/**
 * @description Offline revision version.
 */
const OFFLINE_REVISION: string = "0.0.1";

/**
 * @description Serwist configurations.
 */
const withSerwist = withSerwistInit({
  // Service worker source
  swSrc: "src/sw.ts",
  // Service worker destination
  swDest: "public/sw.js",
  // Disable for developement & enable for production
  disable: !isProd,
  // Register worker manually
  register: false,
  // Cache on Navigation
  cacheOnNavigation: true,
  // Reload when network comes back
  reloadOnOnline: true,

  // Additional Precache pages
  additionalPrecacheEntries: [
    {
      url: "/~offline",
      revision: OFFLINE_REVISION,
    },
    {
      url: "/~offline/offline-placeholder-image.png",
      revision: OFFLINE_REVISION,
    },
    {
      url: "/~offline/offline-placeholder-video.mp4",
      revision: OFFLINE_REVISION,
    },
  ],

  // Exclude files
  exclude: [
    ({ asset }) => asset.name.startsWith('server/') || asset.name.startsWith('static/runtime/'),
    /\.map$/,
    /^.*middleware.*$/,
  ],
});

/**
 * @description MDX configurations.
 */
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypePrismPlus],
  },
});

/**
 * @description Next.js configurations.
 */
const nextConfig: NextConfig = {
  // As our website is a static site, use export output.
  output: "export",
  
  // As static website, we can not rely in image optimizations.
  images: {
    unoptimized: true,
  },

  // Base deplyoment path
  basePath: "",

  // Page extensions
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // Use trailing slashes
  trailingSlash: true,

  // Use react strict mode for safety.
  reactStrictMode: true,

  // Use react compiler
  reactCompiler: true,

  // Turbopack config
  turbopack: {},
};

/**
 * @description Export next's configurations with serwist's configurations.
 */
export default withSerwist(withMDX(nextConfig));

