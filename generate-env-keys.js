#!/usr/bin/env node

/**
 * Strapi Security Keys Generator
 * 用于生成Strapi应用所需的环境变量密钥
 */

const crypto = require('crypto');

// 生成指定长度的随机字符串
function generateRandomString(length = 16) {
  return crypto.randomBytes(length).toString('base64');
}

// 生成指定长度的十六进制字符串
function generateHexKey(length = 32) {
  return crypto.randomBytes(length).toString('hex');
}

console.log('=== Strapi Environment Variables Generator ===\n');

// 生成各个密钥
const keys = {
  APP_KEYS: `${generateRandomString()},${generateRandomString()}`,
  API_TOKEN_SALT: generateRandomString(),
  ADMIN_JWT_SECRET: generateRandomString(),
  TRANSFER_TOKEN_SALT: generateRandomString(),
  JWT_SECRET: generateRandomString(),
  ENCRYPTION_KEY: generateHexKey()
};

// 输出结果
console.log('请将以下环境变量添加到您的Railway项目中:\n');

Object.entries(keys).forEach(([key, value]) => {
  console.log(`${key}=${value}`);
});

console.log('\n=== 生成完成 ===');
console.log('\n重要提示:');
console.log('- 请妥善保管这些密钥，不要泄露给他人');
console.log('- 在生产环境中不要使用默认值或示例值');
console.log('- 建议定期轮换这些密钥以提高安全性');