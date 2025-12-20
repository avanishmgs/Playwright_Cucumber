import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page, Browser, BrowserContext } from '@playwright/test'
import { pageFixture } from '../utiles/pageFixture';
import LoginPage from '../pageObjects/LoginPage';
import * as dotenv from 'dotenv';

dotenv.config();

let browser:Browser;
let context:BrowserContext;

const loginPage = new LoginPage()

Given('providing valid url for login',async function () {
    await pageFixture.page.goto(process.env.BASE_URL!)
    await pageFixture.logger.info("Opening Browser "+ process.env.BASE_URL!)
  });

  When('providing valid username and password',async function () {
    await loginPage.enterUserNameAndPassword(process.env.USERNAME!, process.env.PASSWORD!)
  });

  Then('clicking login button',async function () {
    await loginPage.submit()
  });

  /*When('providing valid username as {string} and password as {string}',async function (name, password) {
    await loginPage.enterUserNameAndPassword(name, password)
  });*/