=============================================================================================================================
Playwright Browser Context Options (copy-friendly for notes/interview preparation):
Playwright Browser Context Options
| **Configuration Option**   | **Sample Value**                                                       | **Purpose / Description**                        |
| -------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------ |
| **viewport**               | `{ width: 1280, height: 720 }`                                         | Defines browser viewport size for test execution |
| **viewport**               | `null`                                                                 | Uses the available system/browser window size    |
| **screen**                 | `{ width: 1920, height: 1080 }`                                        | Configures the physical screen dimensions        |
| **deviceScaleFactor**      | `1`                                                                    | Defines device pixel ratio for rendering         |
| **isMobile**               | `true / false`                                                         | Enables mobile browser emulation                 |
| **hasTouch**               | `true / false`                                                         | Enables touch event support                      |
| **userAgent**              | `"Mozilla/5.0..."`                                                     | Sets custom browser user-agent information       |
| **locale**                 | `"en-US"`                                                              | Defines browser language and regional settings   |
| **timezoneId**             | `"Asia/Kolkata"`                                                       | Configures browser timezone                      |
| **colorScheme**            | `"light"` / `"dark"`                                                   | Sets preferred color theme                       |
| **geolocation**            | `{ latitude: 18.5204, longitude: 73.8567 }`                            | Configures browser location                      |
| **permissions**            | `["geolocation"]`                                                      | Grants browser permissions                       |
| **javaScriptEnabled**      | `true / false`                                                         | Enables or disables JavaScript execution         |
| **acceptDownloads**        | `true / false`                                                         | Allows file download handling                    |
| **ignoreHTTPSErrors**      | `true / false`                                                         | Ignores SSL certificate errors                   |
| **offline**                | `true / false`                                                         | Simulates offline browser behavior               |
| **proxy**                  | `{ server: "http://proxy.company.com:8080" }`                          | Configures network proxy settings                |
| **proxy (Authentication)** | `{ server:"http://proxy.com:8080", username:"user", password:"pass" }` | Configures authenticated proxy                   |
| **storageState**           | `"auth.json"`                                                          | Reuses previously saved browser session          |
| **baseURL**                | `"https://application.com"`                                            | Defines base URL for application navigation      |
| **extraHTTPHeaders**       | `{ Authorization:"Bearer token" }`                                     | Adds custom HTTP request headers                 |
| **httpCredentials**        | `{ username:"admin", password:"password" }`                            | Handles HTTP authentication                      |
| **recordVideo**            | `{ dir:"./videos" }`                                                   | Records test execution videos                    |
| **recordHar**              | `{ path:"network.har" }`                                               | Captures network activity logs                   |

Browser Launch Configuration Options
Browser Launch

| **Configuration Option** | **Sample Value**                                  | **Purpose / Description**                           |
| ------------------------ | ------------------------------------------------- | --------------------------------------------------- |
| **headless**             | `true`                                            | Executes tests without opening browser UI           |
| **headless**             | `false`                                           | Executes tests with browser UI                      |
| **slowMo**               | `1000`                                            | Adds delay between Playwright actions for debugging |
| **args**                 | `["--start-maximized"]`                           | Passes Chromium browser launch arguments            |
| **channel**              | `"chrome"`                                        | Executes tests using installed Chrome browser       |
| **executablePath**       | `"C:\\Program Files\\Google\\Chrome\\chrome.exe"` | Uses custom browser executable                      |
| **downloadsPath**        | `"./downloads"`                                   | Specifies download directory                        |


import { chromium } from "@playwright/test";

(async () => {
    const browser = await chromium.launch({
        headless: false,              // Open browser with UI
        slowMo: 1000,                 // Add 1 second delay between actions
        args: ["--start-maximized"],  // Launch browser in maximized mode
        channel: "chrome"             // Use installed Google Chrome browser
    });
    const context = await browser.newContext({viewport: null})// Use full browser window size});

    const page = await context.newPage();
    await page.goto("https://www.google.com");
    await page.locator("textarea[name='q']").fill("Playwright Automation");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);
    await browser.close();
});
Interview Explanation:
For debugging purposes, I configure Playwright browser launch options with headless: false to see the browser execution, slowMo to add delay between actions,
 and --start-maximized to open the browser in maximized mode. This helps in analyzing and troubleshooting automation failures visually.
 
Interview Answer:
Browser launch options in Playwright are used to control how the browser starts. We can configure execution mode (headless), debugging speed (slowMo), 
browser arguments (args), browser type (channel), custom browser path (executablePath), and download behavior based on automation requirements.

Proxy Configuration Examples
| **Proxy Type**          | **Configuration Example**                                                      |
| ----------------------- | ------------------------------------------------------------------------------ |
| **HTTP Proxy**          | `{ server: "http://proxy.company.com:8080" }`                                  |
| **HTTPS Proxy**         | `{ server: "https://proxy.company.com:8080" }`                                 |
| **Authenticated Proxy** | `{ server:"http://proxy.company.com:8080", username:"user", password:"pass" }` |
| **SOCKS Proxy**         | `{ server:"socks5://proxy.company.com:1080" }`                                 |
Example Implementation

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Playwright Cookies - Complete Interview Notes


const context = await browser.newContext({viewport: {width: 1280,height: 720},locale: "en-US",timezoneId: "Asia/Kolkata",
    proxy: {server: "http://proxy.company.com:8080",username: "username",password: "password"},
    ignoreHTTPSErrors: true,
    acceptDownloads: true
});

Interview Explanation:
Browser Context options in Playwright are used to configure an isolated browser session.
They allow us to control browser behavior such as viewport size, proxy settings, 
authentication, location, permissions, session storage, and network conditions without affecting other test executions.


══════════════════════════════════════════════════════════════
                 PLAYWRIGHT COOKIES METHODS
══════════════════════════════════════════════════════════════


# Using `headless` in Script

## Syntax

```ts
const browser = await chromium.launch({
    headless: true
});
```

or

```ts
const browser = await chromium.launch({
    headless: false
});
```

---

## Example

```ts
import { test, chromium } from "@playwright/test";

test("Headless Example", async () => {

    const browser = await chromium.launch({
        headless: false
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.google.com");

    console.log(await page.title());

    await browser.close();
});
```

---

## What does `headless` mean?

* `headless: true` → Browser runs in the background (No UI). ✅ Faster execution.
* `headless: false` → Browser window opens and is visible. Useful for debugging.

---

## Where can we set `headless`?

### 1. Global Level (`playwright.config.ts`)

```ts
use: {
    headless: true
}
```

Applies to all tests.

---

### 2. Script Level (Manual Browser Launch)

```ts
const browser = await chromium.launch({
    headless: false
});
```

Applies only to that browser instance.

---

## Interview Question

**Q. Where do we use `headless`?**

**Answer:**
`headless` is specified while launching the browser using `chromium.launch()` in a script, or globally in `playwright.config.ts` under the `use` section.
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


1. addCookies()
--------------------------------------------------------------
Syntax:
await context.addCookies([{name: "MyCookie",value: "123456",url: "https://example.com"}]);

Purpose:
- Adds one or more cookies into the BrowserContext.

Return Type:
- Promise<void>

Interview Question:
Q. How do you add cookies in Playwright?

Answer:
Use context.addCookies() and pass an array of cookie
objects. Each cookie object must contain name, value,
and either url or domain + path.

══════════════════════════════════════════════════════════════

2. cookies()
--------------------------------------------------------------
Syntax:
const cookies = await context.cookies();

Purpose:
- Retrieves all cookies from the current BrowserContext.

Return Type:
- Promise<Cookie[]>

Interview Question:
Q. How do you retrieve all cookies?

Answer:
Use context.cookies(). It returns an array containing
all cookies available in the current BrowserContext.

══════════════════════════════════════════════════════════════

3. cookies(urls)
--------------------------------------------------------------
Syntax:
const cookies = await context.cookies([
  "https://example.com"
]);

Purpose:
- Retrieves cookies for a specific URL.

Return Type:
- Promise<Cookie[]>

Interview Question:
Q. Can you retrieve cookies for a specific website?

Answer:
Yes. Pass one or more URLs to context.cookies(urls).
Playwright returns only the cookies associated with
those URLs.

══════════════════════════════════════════════════════════════

4. clearCookies()
--------------------------------------------------------------
Syntax:
await context.clearCookies();

Purpose:
- Deletes all cookies from the BrowserContext.

Return Type:
- Promise<void>

Interview Question:
Q. How do you delete cookies in Playwright?

Answer:
Use context.clearCookies() to remove all cookies from
the current BrowserContext.

══════════════════════════════════════════════════════════════

5. find() (JavaScript Array Method)
--------------------------------------------------------------
Syntax:
const cookie = cookies.find(
  c => c.name === "MyCookie"
);

Purpose:
- Searches the cookies array and returns the first
  matching cookie object.

Return Type:
- Cookie | undefined

Interview Question:
Q. How do you retrieve a specific cookie?

Answer:
First call context.cookies() to retrieve all cookies.
Then use JavaScript's find() method to search the
cookies array and return the first cookie whose name
matches the specified value. If no cookie is found,
find() returns undefined.

══════════════════════════════════════════════════════════════
IMPORTANT POINTS
══════════════════════════════════════════════════════════════

✓ Cookies are managed by BrowserContext.

✓ addCookies() accepts an array of Cookie objects.

✓ One object = One complete cookie.

✓ One array = Multiple cookies.

✓ Required properties while adding:
  • name
  • value
  • url
      OR
  • domain + path

✓ context.cookies() returns Cookie[].

✓ find() is a JavaScript Array method,
  NOT a Playwright method.

✓ find() returns:
  • Matching Cookie Object
  • undefined (if no match found)

✓ clearCookies() deletes all cookies.

✓ url is used only while adding cookies.

✓ Retrieved cookies contain:
  • name
  • value
  • domain
  • path
  • expires
  • httpOnly
  • secure
  • sameSite

✗ Retrieved cookies DO NOT contain url.
Frequently Asked Interview Questions


&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
console.log(cookie?.name);
console.log(cookie?.value);
console.log(cookie?.domain);
console.log(cookie?.path);
console.log(cookie?.expires);
console.log(cookie?.httpOnly);
console.log(cookie?.secure);
console.log(cookie?.sameSite);


Interview Answer

Q. Does the URL passed to context.cookies(urls) have to match the URL used in addCookies()?

Answer:
Yes. context.cookies(urls) returns only the cookies associated with the specified URL(s). 
If you added a cookie using a particular URL (or if the website created cookies for that domain),
 you should pass the same URL or a URL belonging to that domain. If there are no cookies 
 associated with the provided URL, Playwright returns an empty array ([]).

Important Interview Note
context.cookies() → Returns all cookies from the current BrowserContext.
context.cookies(["URL"]) → Returns only the cookies associated with the specified URL(s).
Note: context.cookies(["URL"]) works only if cookies already exist for that URL
 (either because you added them with addCookies() or because the website created them after navigation). Otherwise, it returns an empty array ([]).




Interview tip

context.addCookies() accepts an array of Cookie objects. Each object must contain 
all the required properties (name, value, and either url or domain/path). You cannot split one cookie across multiple objects.
[
  { name: "MyCookie" },
  { value: "123456" },
  { url: "https://example.com" }
]

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
# Playwright Cookies - Complete Notes

## 1. Add a Single Cookie

```ts
await context.addCookies([
  {
    name: "MyCookie",
    value: "123456",
    url: "https://example.com"
  }
]);
```

### Syntax

```ts
await context.addCookies([
  {
    name: "CookieName",
    value: "CookieValue",
    url: "https://example.com"
  }
]);
```

> **Note:** `addCookies()` accepts an **array of Cookie objects**.

---

## 2. Add Multiple Cookies

```ts
await context.addCookies([
  {
    name: "MyCookie",
    value: "123456",
    url: "https://example.com"
  },
  {
    name: "UserId",
    value: "Sandip",
    url: "https://example.com"
  },
  {
    name: "SessionId",
    value: "ABC123",
    url: "https://example.com"
  }
]);
```

### Remember

- `[]` = Array of cookies.
- `{}` = One complete cookie object.
- One object = One complete cookie.

❌ Wrong

```ts
[
  { name: "MyCookie" },
  { value: "123456" },
  { url: "https://example.com" }
]
```

✅ Correct

```ts
[
  {
    name: "MyCookie",
    value: "123456",
    url: "https://example.com"
  }
]
```

---

# 3. Retrieve All Cookies

```ts
const allCookies = await context.cookies();

console.log(allCookies);
```

Returns:

```ts
[
  {
    name: "MyCookie",
    value: "123456",
    domain: "example.com",
    path: "/",
    expires: -1,
    httpOnly: false,
    secure: false,
    sameSite: "Lax"
  }
]
```

---

# 4. Retrieve a Specific Cookie

```ts
const retrievedCookie = allCookies.find(
  c => c.name === "MyCookie"
);

console.log(retrievedCookie);
```

### How `find()` Works

`find()` loops through every cookie.

For each cookie:

```ts
function(c) {
    return c.name === "MyCookie";
}
```

- Returns **true** → `find()` returns the current cookie object.
- Returns **false** → `find()` checks the next cookie.
- If no cookie matches → returns `undefined`.

---

# 5. Access Cookie Properties

```ts
console.log(retrievedCookie?.name);
console.log(retrievedCookie?.value);
console.log(retrievedCookie?.domain);
console.log(retrievedCookie?.path);
console.log(retrievedCookie?.expires);
console.log(retrievedCookie?.httpOnly);
console.log(retrievedCookie?.secure);
console.log(retrievedCookie?.sameSite);
```

---

# Why `cookie.url` is Undefined?

While adding a cookie:

```ts
await context.addCookies([
  {
    name: "MyCookie",
    value: "123456",
    url: "https://example.com"
  }
]);
```

The `url` is used **only to create the cookie**.

Playwright converts it into:

```ts
domain = "example.com"
path = "/"
```

After the cookie is stored, `url` is discarded.

Retrieved cookie contains:

```ts
{
  name,
  value,
  domain,
  path,
  expires,
  httpOnly,
  secure,
  sameSite
}
```

So:

```ts
cookie.url
```

returns

```text
undefined
```

Use:

```ts
cookie.domain
cookie.path
```

instead.

---

# Cookie Lifecycle

```
Add Cookie
--------------------------------
{
  name: "MyCookie",
  value: "123456",
  url: "https://example.com"
}

        │
        ▼

Playwright converts

domain = example.com
path = /

        │
        ▼

Cookie Stored

{
  name: "MyCookie",
  value: "123456",
  domain: "example.com",
  path: "/"
}

        │
        ▼

Retrieve Cookie

cookie.name      ✅
cookie.value     ✅
cookie.domain    ✅
cookie.path      ✅
cookie.url       ❌ undefined
```

---

# Interview Points

- `context.addCookies()` accepts an array of Cookie objects.
- Each cookie object must contain:
  - `name`
  - `value`
  - `url` **or** `domain + path`
- `context.cookies()` returns an array of stored cookie objects.
- Stored cookies contain `domain` and `path`, not `url`.
- `find()` returns the first matching cookie object.
- If no cookie matches, `find()` returns `undefined`.