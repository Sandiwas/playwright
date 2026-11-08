//use section browser context aur page settings ke liye hota hai. Jo bhi yaha define karte ho, wo sab tests par by default apply hota hai.

 
import { defineConfig } from "@playwright/test";

export default defineConfig({
  
use: {
    // Base URL: page.goto("/login") opens this URL + "/login"
    baseURL: "https://example.com",

    // false = browser visible, true = browser hidden
    headless: false,

    // Browser window content size
    viewport: { width: 1920, height: 1080 },

    // Capture screenshots: "off" | "on" | "only-on-failure" | 'on-first-failure'
    screenshot: "only-on-failure",

    // Record videos: "off" | "on" | "retain-on-failure" | "on-first-retry"
    video: "retain-on-failure",

    // Save execution trace for debugging
    // "off" | "on" | "retain-on-failure" | "on-first-retry"
    trace: "retain-on-failure",

    // Reuse saved login/session state containing cookies and local storage
    storageState: "playwright/.auth/user.json",

    // Browser language and formatting locale
    locale: "en-US",

    // Browser timezone
    timezoneId: "Asia/Kolkata",

    // Browser permissions granted to the website
    permissions: ["geolocation", "notifications"],

    // Mock browser location
    // Geolocation permission must also be granted
    geolocation: {
      latitude: 19.076,
      longitude: 72.8777,
      accuracy: 100,
    },

    // Override browser user-agent
    userAgent: "My Playwright Automation Browser",

    // HTTP Basic Authentication credentials
    httpCredentials: {
      username: process.env.HTTP_USERNAME ?? "",
      password: process.env.HTTP_PASSWORD ?? "",
    },

    // Allow files to be downloaded
    acceptDownloads: true,

    // Ignore invalid or self-signed SSL certificates
    ignoreHTTPSErrors: true,

    // Maximum time for actions such as click(), fill(), check()
    actionTimeout: 15_000,

    // Maximum time for navigation such as goto() and reload()
    navigationTimeout: 30_000,

    // Headers included with every browser request
    extraHTTPHeaders: {
      "X-Test-Environment": "automation",
      Authorization: `Bearer ${process.env.API_TOKEN ?? ""}`,
    },

    // Options passed while launching the browser
    launchOptions: {
      slowMo: 100,  //Iska meaning: har browser action ke baad approximately 100ms delay.
      args: ["--start-maximized"],
    },

    // Proxy configuration
    proxy: {
      server: "http://proxy.example.com:8080",
      username: process.env.PROXY_USERNAME,
      password: process.env.PROXY_PASSWORD,
      bypass: "localhost,127.0.0.1",
    },

    // true simulates no internet connection
    offline: false,

    // Enable or disable JavaScript in webpages
    javaScriptEnabled: true,

    // Emulate operating-system color theme
    // "light" | "dark" | "no-preference" | null
    colorScheme: "light",
  },

/*
give me use section for playwrfhrcomfgi.ts 

baseURL
headless
viewport
screenshot
video
trace
storageState
locale
timezoneId
permissions
geolocation
userAgent
httpCredentials
acceptDownloads
ignoreHTTPSErrors
actionTimeout
navigationTimeout
extraHTTPHeaders
launchOptions
proxy
offline
javaScriptEnabled
colorScheme

cover all making notes 

});
 */
/* Framework-level settings:

testDir
timeout
expect.timeout
retries
workers
fullyParallel
reporter
grep / grepInvert
projects

Browser/Context-level settings (use):

baseURL
viewport
headless
locale
geolocation
permissions
video
trace
screenshot
actionTimeout
navigationTimeout

Easy yaad rakh:

👉 use = Browser/Page settings
 👉 defineConfig() root level = Framework settings */

/* 
 export default defineConfig({
  timeout: 60000,      // Framework level
  retries: 1,          // Framework level

  use: {
    screenshot: 'only-on-failure', // Browser/context level
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  }
}); */


