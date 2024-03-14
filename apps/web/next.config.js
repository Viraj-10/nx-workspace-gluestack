//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { withGluestackUI } = require('@gluestack/ui-next-adapter');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@gluestack-ui/themed'],
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withGluestackUI,
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
/** @type {import('next').NextConfig} */
