
//request: Playwright's built-in fixture for sending HTTP requests.
//request.get(...): sends a GET request without opening a browser.
//response.status(): returns the HTTP status code.
//expect(...).toBe(200): asserts the expected response status.

import { test, expect } from '@playwright/test';

test.describe('OrangeHRM API checks', () => {
  test('should return a successful response for the login page', async ({
    request,
  }) => {
    const response = await request.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    );

    // Validate HTTP status
    expect(response.status()).toBe(200);

    // Validate response headers
    expect(response.headers()['content-type']).toContain(
      'text/html',
    );

    // Validate response body
    const body = await response.text();

    expect(body.length).toBeGreaterThan(0);
    expect(body).toContain('<html');
  });
});
