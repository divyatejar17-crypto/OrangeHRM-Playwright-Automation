
import { type Page, type Locator } from '@playwright/test';

//We use this class to encapsulate a key dashboard element and provide a reusable page-readiness method.

export class DashboardPage {
  private readonly page: Page;
  readonly dashboardHeading: Locator;

  constructor(page: Page) {
    this.page = page;

    this.dashboardHeading = page.getByRole('heading', {
      name: 'Dashboard',
    });
  }

  // waitFor({ state: 'visible' }) waits for the heading to become visible. 
  // However, in our tests we'll generally prefer expect(...).toBeVisible() because it both waits and reports a clear assertion failure.
  async isLoaded() {
    await this.dashboardHeading.waitFor({
      state: 'visible',
    });
  }
}
