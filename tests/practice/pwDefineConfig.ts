
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // Configuration/report mein displayed name
  name: "Playwright Automation",

  // Test files ka folder
  testDir: "./tests",

  // Kaun-si test files execute hongi
  testMatch: "**/*.spec.ts",

  // Kaun-si files/folders ignore honge
  testIgnore: ["**/node_modules/**", "**/test-data/**"],

  // Har test ka maximum execution time
  timeout: 60_000,

  // Puri test suite ka maximum execution time
  // 0 means no global timeout
  globalTimeout: 0,

  // Assertion configuration
  expect: {
    // Auto-retrying assertions ka timeout
    timeout: 10_000,

    // Screenshot comparison settings
    toHaveScreenshot: {
      animations: "disabled",
      caret: "hide",
      maxDiffPixels: 100,
      maxDiffPixelRatio: 0.01,
      scale: "css",
      threshold: 0.2,
      // stylePath: "./screenshot.css",
      // pathTemplate: "{testDir}/screenshots/{testFilePath}/{arg}{ext}",
    },

    // Normal snapshot comparison settings
    toMatchSnapshot: {
      maxDiffPixels: 100,
      maxDiffPixelRatio: 0.01,
      threshold: 0.2,
    },

    // ARIA/accessibility snapshot settings
    toMatchAriaSnapshot: {
      children: "deep-equal",
      // pathTemplate: "{testDir}/aria/{testFilePath}/{arg}{ext}",
    },

    // expect(...).toPass() settings
    toPass: {
      timeout: 10_000,
      intervals: [100, 250, 500, 1_000],
    },
  },

  // All test files ke tests parallel run honge
  fullyParallel: true,

  // Parallel worker processes
  // Number ya percentage de sakte hain
  workers: process.env.CI ? 1 : "50%",

  // Failed test retry count
  retries: process.env.CI ? 2 : 0,

  // "immediate" | "isolated"
  retryStrategy: "immediate",

  // Har test ko kitni baar repeat karna hai
  repeatEach: 1,

  // Itni failures ke baad execution stop
  // 0 means unlimited
  maxFailures: 0,

  // Flaky test milne par run fail karna
  failOnFlakyTests: !!process.env.CI,

  // test.only present hone par CI execution fail
  forbidOnly: !!process.env.CI,

  // Test title/tag ke according tests include
  // grep: /@smoke/,
  // grep: [/@smoke/, /@regression/],

  // Matching tests exclude
  // grepInvert: /@manual/,

  // Reports mein automatically tag add karta hai
  tag: ["@automation"],

  // Test console output hide karna
  quiet: false,

  // Reporter configuration
  reporter: [
    ["list"],["html",{
        outputFolder: "playwright-report",
        open: "never",
      },],
    ["junit",
      {
        outputFile: "reports/junit-results.xml",
      },
    ],
  ],

  // Screenshots, videos aur traces ka output folder
  outputDir: "test-results",

  // "always" | "never" | "failures-only"
  preserveOutput: "failures-only",

  // Slow test files report karna
  reportSlowTests: {
    max: 5,
    threshold: 60_000,
  },

  // Test run ki custom report information
  metadata: {
    environment: process.env.TEST_ENV ?? "QA",
    executedBy: process.env.USERNAME ?? "Unknown",
  },

  // Git commit/diff information report mein capture
  captureGitInfo: {
    commit: true,
    diff: !!process.env.CI,
  },

  // Global setup test run se pehle execute hota hai
  // globalSetup: "./global-setup.ts",

  // Global teardown sab tests ke baad execute hota hai
  // globalTeardown: "./global-teardown.ts",

  // Snapshot base folder
  snapshotDir: "./snapshots",

  // Snapshot file location format
  snapshotPathTemplate:
    "{snapshotDir}/{testFilePath}/{projectName}/{arg}{ext}",

  // Snapshot assertions skip karna
  ignoreSnapshots: false,

  // "all" | "changed" | "missing" | "none"
  updateSnapshots: "missing",

  // "overwrite" | "3way" | "patch"
  updateSourceMethod: "patch",

  // Test TypeScript configuration
  // tsconfig: "./tsconfig.json",

  // .gitignore rules respect karni hain
  respectGitIgnore: true,

  // Heavy JavaScript files ko transformation se exclude karna
  build: {
    external: ["**/node_modules/**"],
  },

  // Tests ko multiple machines mein divide karna
  // shard: {
  //   current: 1,
  //   total: 3,
  // },

  // Different browsers/environments ke projects
  projects: [
    {
      name: "Chrome",
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome",
      },
    },
    {
      name: "Firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },
    {
      name: "Edge",
      use: {
        ...devices["Desktop Edge"],
        channel: "msedge",
      },
    },
  ],

  // Browser/context settings
  use: {
    baseURL: "https://example.com",
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
  },

  // Application server automatically start karna
  // Sirf local application ke liye enable karein
  /*
  webServer: {
    command: "npm run start",
    cwd: "./",
    url: "http://localhost:3000",
    timeout: 120_000,
    reuseExistingServer: !process.env.CI,
    ignoreHTTPSErrors: false,
    name: "Application",
    stdout: "pipe",
    stderr: "pipe",
    env: {
      NODE_ENV: "test",
    },
  },
  */
});

 */

// defineConfig() ke top-level options:

// name
// testDir
// testMatch
// testIgnore
// timeout
// globalTimeout
// expect
// fullyParallel
// workers
// retries
// retryStrategy
// repeatEach
// maxFailures
// failOnFlakyTests
// forbidOnly
// grep
// grepInvert
// tag
// quiet
// reporter
// outputDir
// preserveOutput
// reportSlowTests
// metadata
// captureGitInfo
// globalSetup
// globalTeardown
// snapshotDir
// snapshotPathTemplate
// ignoreSnapshots
// updateSnapshots
// updateSourceMethod
// tsconfig
// respectGitIgnore
// build
// shard
// projects
// use
// webServer

