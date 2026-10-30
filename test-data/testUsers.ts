//process.env provides environment variables to Node.js applications

export const testUsers = {
  validUser: {
    username: process.env.ORANGEHRM_USERNAME ?? 'Admin',
    password: process.env.ORANGEHRM_PASSWORD ?? 'admin123',
  },

  invalidUser: {
    username: 'Admin',
    password: 'wrong-password',
  },
};

// The ?? 'Admin' and ?? 'admin123' parts are fallback values. 
// If .env isn't loaded, your tests could still pass using these fallback credentials.
