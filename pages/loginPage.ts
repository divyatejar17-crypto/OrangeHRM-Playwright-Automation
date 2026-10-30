//POM - Page Object Model. The class encapsulated the locators and actions of the page, while test describes the scenario and verifies the outcome.


import { type Page, type Locator } from '@playwright/test';

//A class groups related data and behavior. Here, the related data is the login page's locators, and the behavior is navigating and logging in.
//private readonly - This improves encapsulation and catches certain mistakes at compile time.
//readonly - This ensures that the property cannot be reassigned after initialization, which is useful for locators that should not change during the test execution.


export class LoginPage {
  private readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  //The constructor receives the page created by Playwright's test fixture. This lets the page object control the correct browser tab without launching a separate browser itself.

  constructor(page: Page) {
    this.page = page;

    
    this.usernameInput = page.getByPlaceholder('Username');

    this.passwordInput = page.getByPlaceholder('Password');


    this.loginButton = page.getByRole('button', {
      name: 'Login',
    });

    this.errorMessage = this.page.getByText(
    'Invalid credentials',
    { exact: false }
  );
  }

  //waitUntil: 'domcontentloaded' lets navigation finish when the initial HTML is loaded, without waiting for every resource.

  async navigate() {
    await this.page.goto('/web/index.php/auth/login', {
      waitUntil: 'domcontentloaded',
      //timeout: 60000 gives navigation up to 60 seconds.
      timeout: 60000,
    });
  }

 //why reusable login method - Instead of repeating three browser actions in every test, we call one method with different inputs. The method accepts strings, so TypeScript can help catch invalid argument types.
  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    
    await this.loginButton.click({
    timeout: 15000,
    });
  }

  //getErrorMessage() - This method returns the error message locator, allowing tests to verify the presence of an error message after a failed login attempt.
  
  async getErrorMessage() {
    return this.errorMessage;
  }
}
