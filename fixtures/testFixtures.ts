
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { EmployeePage } from '../pages/EmployeePage';

//type AppFixtures tells TypeScript which fixtures we're adding and their types.

type AppFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  employeePage: EmployeePage;
};

//base.extend<AppFixtures>() extends Playwright's existing test with our custom fixtures
//{ page } receives Playwright's built-in page fixture.
//new LoginPage(page) creates the page object using that test's browser page.
//await use(loginPage) makes the object available to the test. Playwright handles the fixture lifecycle around the test.

export const test = base.extend<AppFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  },

  employeePage: async ({ page }, use) => {
  const employeePage = new EmployeePage(page);
  await use(employeePage);
},

});

export { expect };
