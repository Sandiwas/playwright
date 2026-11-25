/// <reference types="node" />
import { defineConfig ,devices} from "@playwright/test";

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

  // timeout: 60000,
  //expect: { timeout: 10000 },

  /* 
  // To change the timeout globally for all tests (default is 30000 ms / 30 secs)
   timeout: 60000,
  
   Ek test case ko complete hone ke liye maximum 60 seconds milenge.
   Agar test 60 seconds ke andar complete nahi hua, to Playwright test ko fail kar dega with timeout error.
   test('Login Test', async ({ page }) => {
   pura test 60 sec ke andar complete hona chahiye
  });
  
  To apply a longer wait for all expect assertions (default is 5000 ms / 5 secs)
  expect: {timeout: 10000},
  
  */

  //grep:/@sanity/,
  //grep:/(?=.*@sanity)(?=.*@regression)/,
  //grepInvert:/@regression/,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,

  //retry locally
  //retries:3,

  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined,
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */

  reporter: "html",
  //reporter: "list",
  //reporter: "dot",
  //reporter: "line",
  //reporter: "junit",
  //reporter: "json",
  //reporter: "allure-playwright",

  // reporter: [
  //   ["html", { open: "always", outputFolder: "html-report" }],
  //   ["list"],
  //   ["line"],
  //   ["dot"],
  //   ["json", { outputFile: "json-report/result.json" }],
  //   ["junit", { outputFile: "junit-report/result.xml" }],
  //   ["allure-playwright"],
  //   ['./my-custom-reporter.ts', { customOption: 'some value' }]
  // ],

//reporter : [ ['./my-custom-reporter.ts', { customOption: 'some value' }]],

  /*   reporter: [
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
  ], */
  //reporter:'line',
  //reporter:'dot',
  //reporter:'line',
  //reporter:[['junit',{outputFile:'junitReport/result.xml'}]]
  //reporter:[['json',{outputFile:'jsonReprt/result.json'}]]
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
    trace: "retain-on-failure" /* Collect trace when retrying the failed test. */,

    /* Open browser in maximized mode */
    headless: false,
    viewport: null,
    //locale:'en-US',
    //viewport:{width:1200,height:800},
    //proxy:{server:'https://myproxy.com:3245'},
    ignoreHTTPSErrors: false,
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
        channel: "chrome",
      },
    },

    // {
    //   name: "firefox",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //   },
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
