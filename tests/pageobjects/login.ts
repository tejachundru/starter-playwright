import { Locator, Page } from "@playwright/test";
import { env } from "../../utils/env";

export class Login {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly signIn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByPlaceholder("Username");
    this.password = page.getByPlaceholder("Password");
    this.signIn = page.getByRole("button", { name: "Login" });
  }

  async goto() {
    await this.page.goto(env.BASE_URL);
  }

  async sigIn() {
    await this.username.type(env.USER_NAME);
    await this.password.type(env.PASSWORD);
    await this.signIn.click();
  }
}
