/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src example.com;
  style-src 'self' example.com;
  font-src 'self';
`;
const nextConfig = {
  images: {
    domains: ["fbsoabrjmkvucwrsxunv.supabase.co"],
  },
  key: "Content-Security-Policy",
  value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
};

module.exports = nextConfig;
