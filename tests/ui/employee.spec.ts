

import { test, expect } from '../../fixtures/testFixtures';
import { testUsers } from '../../test-data/testUsers';

test.describe('OrangeHRM Employee Search', () => {
  test('should find Amelia Brown in Employee List', async ({
    page,
    loginPage,
    employeePage,
  }) => {
    // Step 1: Log in
    await loginPage.navigate();
    await loginPage.login(
      testUsers.validUser.username,
      testUsers.validUser.password,
    );

    // Step 2: Verify login succeeded
    await expect(page).toHaveURL(/dashboard/);

    // Step 3: Open Employee List
    await employeePage.openEmployeeList();

    // Step 4: Search for Amelia Brown
    await employeePage.searchEmployee('Amelia Brown');

    // Step 5: Verify the result
    await expect(employeePage.resultsTable).toContainText(
      'Amelia Brown',
    );
  });

  
test('should show no results for a nonexistent employee', async ({
  page,
  loginPage,
  employeePage,
}) => {
  // Step 1: Log in
  await loginPage.navigate();
  await loginPage.login(
    testUsers.validUser.username,
    testUsers.validUser.password,
  );

  await expect(page).toHaveURL(/dashboard/);

  // Step 2: Open Employee List
  await employeePage.openEmployeeList();

  // Step 3: Search for a nonexistent employee
  await employeePage.searchEmployee(
    'ZZZ_NonExistent_Employee_98765',
  );

  // Step 4: Verify no results are displayed
  await expect(
  employeePage.getEmployeeRows(
    'ZZZ_NonExistent_Employee_98765',
  ),
).toHaveCount(0);
})

});