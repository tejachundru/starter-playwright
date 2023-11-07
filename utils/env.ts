import "dotenv/config";

/**
 * Retrieves the value of an environment variable.
 * If the variable is not set or is empty, it returns the fallback value.
 * @param key - The name of the environment variable.
 * @param fallback - The fallback value to return if the environment variable is not set or is empty.
 * @returns The value of the environment variable or the fallback value.
 */
function getEnv(key: string, fallback?: any): any {
  const value = process.env[key];
  console.log("🚀 ~ file: env.ts:12 ~ getEnv ~ value:", value);

  if (value === undefined || value === null || value === "") {
    return fallback;
  }

  return value;
}

export const env = {
  BASE_URL: getEnv("BASE_URL", "https://mgmt.qa-syd-5.netlinkz.dev/"),
  USER_NAME: getEnv("USER_NAME"),
  PASSWORD: getEnv("PASSWORD"),
};
