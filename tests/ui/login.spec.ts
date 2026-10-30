
import { test, expect } from '../../fixtures/testFixtures';
import { testUsers } from '../../test-data/testUsers';

test('should log in with valid credentials', async ({
  page,
  loginPage,
  dashboardPage,
}) => {
  await loginPage.navigate();

  console.log('URL before login:', page.url());

  await loginPage.login(
    testUsers.validUser.username,
    testUsers.validUser.password,
  );

  console.log('URL after login:', page.url());
  console.log('Page title:', await page.title());

  await expect(page).toHaveURL(/dashboard/, {
    timeout: 15000,
  });

  await expect(dashboardPage.dashboardHeading).toBeVisible();
});

  test('should reject invalid credentials', async ({
    loginPage,
  }) => {
    await loginPage.navigate();

    await loginPage.login(
      testUsers.invalidUser.username,
      testUsers.invalidUser.password,
    );

    await expect(
    await loginPage.getErrorMessage()
    ).toBeVisible();

  });

