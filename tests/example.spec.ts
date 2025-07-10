import { test, expect } from '@playwright/test';
import { LoginPage } from './page-object/loginPage';
import { InventoryPage } from './page-object/inventoryPage';

test('test the sauce demo page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.enterUsername('standard_user');
  await loginPage.enterPassword('secret_sauce');
  await page.screenshot({ path: 'screenshots/login.png', fullPage: true });
  await loginPage.clickLoginButton();
  await inventoryPage.validateShoppingCart();
  await page.screenshot({ path: 'screenshots/homePage.png', fullPage: true });
});

