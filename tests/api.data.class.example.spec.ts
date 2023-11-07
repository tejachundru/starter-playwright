import { test, expect, APIRequestContext } from "@playwright/test";
import { Login } from "./pageobjects/login";
import { UserData } from "../utils/userData";
import usersRaw from "../data/users.json" assert { type: "json" };
import { UserRequest } from "./types/userRequest";
import { env } from "../utils/env";

// Request context is reused by all tests in the file.
let apiContext: APIRequestContext;
const userData = new UserData();

test.beforeEach(async ({ playwright }) => {
  apiContext = await playwright.request.newContext({
    // All requests we send go to this API endpoint.
    baseURL: env.BASE_URL,
    extraHTTPHeaders: {
      Accept: "application/json",
    },
  });
});

test.afterEach(async () => {
  // Dispose all responses.
  await apiContext.dispose();
});

/**
 * This test is a simple smoke test.
 */
test("API SignUp | Login UI", async ({ page }) => {
  const login = new Login(page);
  await login.goto();
  await login.sigIn();

  await page.getByTitle("Neuro Management Portal");
});

/**
 * This test is a simple smoke test.
 */
test("Login UI - Data From JSON", async ({ page }) => {
  // New User
  const users: UserRequest[] = usersRaw as UserRequest[];
  const { username } = users[0];
  const { password } = users[0];

  const login = new Login(page);
  await login.goto();
  await login.sigIn();
  await page.getByTitle("Neuro Management Portal");
});
