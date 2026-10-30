
import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],

  //The nullish coalescing operator (??) uses the fallback only when the left side is null or undefined.
  //This means the configured URL takes precedence, and the demo URL is used if the environment variable isn't defined.

  use: {
    baseURL:
      process.env.ORANGEHRM_BASE_URL ??
      'https://opensource-demo.orangehrmlive.com',

    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
