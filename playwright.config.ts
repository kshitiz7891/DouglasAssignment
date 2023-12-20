import { defineConfig } from '@playwright/test';

export default defineConfig({
  fullyParallel: true,
  workers: 3,
  reporter: [['html', { open: "never" }]],
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: `chromium`,
        channel: `chrome`
      },
    },
  ]
});