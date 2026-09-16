/// <reference types="node" />
import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  //grep:/@sanity/,
  //grep:/(?=.*@sanity)(?=.*@regression)/,
  //grepInvert:/@regression/,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,
  // retries:1,
  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined,
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */

  //reporter: "html",
  reporter: [
    ["html"],
    [
      "allure-playwright",
      {
        outputFolder: "allure-results",
        detail: true,
        suiteTitle: false,
        cleanResults: true,
      },
    ],
  ],
  // reporter:'line',
  // reporter:'dot',
  //reporter:'line',
  //reporter:[['junit',{outputFolder:'junitReport/result.xml'}]]
  //reporter:[['json',{outputfoledr:'jsonReprt/result.json'}]]
  //reporter:[['html',{open:'always','outputFolder':'html-report'}]],
  // reporter:[['html',{open:'always',outputFolder:'report-html'}],
  //          ['line'],
  //          ['dot'],
  //          ['list'],
  //          ['junit',{outputFolder:'junitReport/result.xml'}],
  //          ['json',{outputfolder:'jsonReport/result.josn'}],
  //          ['allure-playwright']
  //         ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  //----------------------------------------------------------------------------------------------------------------------

  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',
    //baseURL : 'https://restful-booker.herokuapp.com',

    screenshot: "only-on-failure", //'on' 'on-first-failuer' 'only-on-failuer',
    video: "retain-on-failure", //recored the video
    trace:"retain-on-failure" /* Collect trace when retrying the failed test. */,

    /* Open browser in maximized mode */
    headless: true,
    viewport: null,
    //locale:'en-US',
    //viewport:{width:1200,height:800},
    //proxy:{server:'https://myproxy.com:3245'},
    ignoreHTTPSErrors: true,
    launchOptions: {
      args: ["--start-maximized"],
    },
  },
  //---------------------------------------------------------------------------------------------------------------------------

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
        viewport: null,
        //viewport:{width:1200,height:800},
        launchOptions: { args: ["--start-maximized"] },
      },
    },

    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
