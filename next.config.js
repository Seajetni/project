/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
}

module.exports = {
  // ตัวเลือกการกำหนดค่าอื่น ๆ...
  env: {
    NEXTAUTH_SECRET: 'https://project-sea.vercel.app/', // แทนที่ด้วยคีย์ลับจริงของคุณ
  },
};

module.exports = nextConfig
