
import { type Page, type Locator } from '@playwright/test';

export class EmployeePage {
  private readonly page: Page;
  private readonly pimMenu: Locator;
  private readonly employeeListLink: Locator;
  private readonly employeeNameInput: Locator;
  private readonly searchButton: Locator;
  readonly resultsTable: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pimMenu = page.getByRole('link', {
      name: 'PIM',
      exact: true,
    });

    this.employeeListLink = page.getByRole('link', {
      name: 'Employee List',
    });

    this.employeeNameInput = page.getByPlaceholder(
      'Type for hints...',
    ).first();

    this.searchButton = page.getByRole('button', {
      name: 'Search',
      exact: true,
    });

    this.resultsTable = page.getByRole('table');
  }

  async openEmployeeList() {
    await this.pimMenu.click();
    await this.employeeListLink.click();
  }

  async searchEmployee(employeeName: string) {
    await this.employeeNameInput.fill(employeeName);
    
    await this.searchButton.click({
    timeout: 15000,
    });
  }

  
getEmployeeRows(employeeName: string) {
  return this.resultsTable.getByRole('row').filter({
    hasText: employeeName,
  });
}

async getNoRecordsMessage() {
  return this.page.getByText('No Records Found', {
    exact: true,
  });
}

}
