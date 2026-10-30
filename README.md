# OrangeHRM UI Automation Framework

A web test automation portfolio project built using **Playwright, TypeScript, and Playwright Test** to demonstrate maintainable automation framework design, reusable page objects, test isolation, and automated UI validation.

## Project Overview

This project automates selected user workflows in the OrangeHRM demo application. It demonstrates how to structure an automation framework using the Page Object Model (POM), reusable fixtures, centralized test data, and Playwright assertions.

**Application under test:** [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)

## Tech Stack

- **Language:** TypeScript
- **Automation:** Playwright
- **Test Runner:** Playwright Test
- **Design Pattern:** Page Object Model (POM)
- **Test Organization:** UI and API test folders
- **Configuration:** Playwright configuration and environment variables
- **Version Control:** Git and GitHub

## Framework Architecture

```text
Orange_HRM/
├── pages/
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   └── EmployeePage.ts
├── fixtures/
│   └── testFixtures.ts
├── test-data/
│   └── testUsers.ts
├── tests/
│   ├── ui/
│   │   ├── login.spec.ts
│   │   └── employee.spec.ts
│   └── api/
│       └── health.spec.ts
├── playwright.config.ts
├── tsconfig.json
├── .env                 # Local only; not committed
├── .gitignore
└── package.json
```

## Implemented Test Scenarios

### UI Automation

**Login Tests**
- Verify login with valid credentials.
- Verify that invalid credentials are rejected.
- Validate dashboard navigation after successful login.
- Verify relevant page elements and error messages.

**Employee Management Tests**
- Navigate to the PIM module and Employee List.
- Search for an existing employee.
- Verify that matching employee results are displayed.
- Verify that a search for a nonexistent employee returns no matching rows.

### HTTP Health Check

- Send an HTTP request to the OrangeHRM login page.
- Validate the HTTP status code.
- Validate the response content type.
- Verify that the response body contains HTML.

*Note: The current HTTP test is a basic health check, not an authenticated OrangeHRM business API test.*

## Key Framework Design Decisions

### 1. Page Object Model

Page classes encapsulate locators and reusable page-level actions. This separates test scenarios from UI implementation details and improves maintainability.

### 2. Custom Fixtures

Custom Playwright fixtures provide reusable `LoginPage`, `DashboardPage`, and `EmployeePage` objects to test cases.

### 3. Centralized Test Data

Test credentials and other reusable test values are maintained separately from test logic. Environment variables can be used for local configuration.

### 4. Reliable Assertions

Playwright's auto-retrying assertions are used to validate navigation, element visibility, and search results.

### 5. Test Isolation

Tests perform their required setup independently rather than relying on another test to run first.

### 6. Environment Configuration

The base URL and credentials are configured through environment variables, with local fallback values where configured in the project. Secrets must not be committed to source control.

## Prerequisites

Install the following:

- Node.js (a supported LTS version)
- npm
- Git
- Visual Studio Code or another code editor

## Setup Instructions

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd Orange_HRM
```

Replace the placeholder with your actual GitHub repository URL.

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

On Linux CI environments, you may need:

```bash
npx playwright install --with-deps chromium
```

### 4. Configure environment variables

Create a local `.env` file in the project root:

```env
ORANGEHRM_BASE_URL=https://opensource-demo.orangehrmlive.com
ORANGEHRM_USERNAME=your_authorized_username
ORANGEHRM_PASSWORD=your_authorized_password
```

Use credentials you are authorized to use. Never commit `.env` or share credentials publicly.

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run UI tests:

```bash
npx playwright test tests/ui
```

Run API health checks:

```bash
npx playwright test tests/api
```

Run a specific test file:

```bash
npx playwright test tests/ui/login.spec.ts
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests with the HTML reporter:

```bash
npx playwright test
npx playwright show-report
```

## Reports and Debugging

The framework is configured to use Playwright's list and HTML reporters.

Depending on the project configuration, it can also collect:
- Screenshots on test failure
- Traces on failure
- Videos on failure

These artifacts help investigate locator failures, navigation issues, timeouts, and inconsistent test behavior.

## Best Practices Demonstrated

- Reusable page objects and fixtures
- Clear separation of test logic and test data
- Meaningful test names and assertions
- Playwright locator strategies
- Auto-waiting and asynchronous test execution
- Environment-based configuration
- Git-based version control
- Basic HTTP response validation

## Planned Enhancements

- Expand authenticated API test coverage.
- Add API request fixtures and reusable API utilities.
- Integrate GitHub Actions for continuous integration.
- Publish test reports and failure artifacts from CI.
- Add cross-browser projects for Chromium, Firefox, and WebKit.
- Explore reusable authentication state with `storageState`.
- Add more positive, negative, and boundary test scenarios.

## Learning Outcomes

This project demonstrates practical experience with Playwright and TypeScript, automation framework structure, reusable test components, UI assertions, test data management, and debugging.

It is intended as a continuously improving portfolio project for QA Automation Engineer and SDET opportunities.

## Disclaimer

This project uses the publicly available OrangeHRM demo application for learning and demonstration. The demo environment may change, and test results can be affected by its availability or data changes. Avoid destructive actions and do not store sensitive credentials in the repository.

---

**Author:** Divyateja  
**Role:** QA Automation Engineer | Playwright | TypeScript  
