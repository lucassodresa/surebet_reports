import { executablePath } from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import * as dotenv from "dotenv";
dotenv.config();

puppeteer.use(StealthPlugin());

export const surebetLogin = async () => {
  try {
    console.log("Doing login...");

    const EMAIL_INPUT_SELECTOR = "#user_email";
    const PASSWORD_INPUT_SELECTOR = "#user_password";
    const SIGN_BUTTON_LOGIN_PAGE_SELECTOR = "#sign_in_user";
    const PROFILE_IMAGE_SELECTOR = ".nav-link > img";

    console.log("Opening Browser...");

    const browser = await puppeteer.launch({
      headless: false,
      executablePath: executablePath(),
    });

    const page = await browser.newPage();
    console.log("Waiting for cookie...");

    await page.goto("https://pt.surebet.com/users/sign_in");

    await page.waitForSelector(SIGN_BUTTON_LOGIN_PAGE_SELECTOR, {
      visible: true,
    });

    await page.type(EMAIL_INPUT_SELECTOR, process.env.LOGIN_EMAIL);
    await page.type(PASSWORD_INPUT_SELECTOR, process.env.LOGIN_PASSWORD);
    await page.click(SIGN_BUTTON_LOGIN_PAGE_SELECTOR);

    await page.waitForSelector(PROFILE_IMAGE_SELECTOR, {
      visible: true,
    });

    const cookiesObjects = await page.cookies();

    const cookies = cookiesObjects
      .map(({ name, value }) => `${name}=${value}`)
      .join(";");

    console.log("Got cookie!!");
    console.log("Closing broser...");

    await browser.close();

    console.log("Logged in!");

    return { cookies };
  } catch (error) {
    console.log("Something went wrong");

    console.log(error);
    return { cookies: null };
  }
};
