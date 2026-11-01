import { test, expect, Frame, FrameLocator } from "@playwright/test";

test.only("frames demo", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Frames.html", { waitUntil: "domcontentloaded" });

  const frames: Frame[] = page.frames();
  console.log("Total frames : ", frames.length);

for (let i = 0; i < frames.length; i++) {
  await page.waitForTimeout(5000);
  console.log(i, frames[i].url());
}
  //---- Approach 1: using page.frame() ----
  //const frame: Frame | null = page.frame("SingleFrame"); //by name
  // const frame: Frame | null = page.frame({ url: "https://demo.automationtesting.in/SingleFrame.html" }); //by url
  /*  
 if (frame) {
    await frame.locator("input[type='text']").fill("Welcome");
  } else {
    console.log("frame is not available");
  }

   */
  // --- Approach 2: Using frameLocator() ---
  await page.frameLocator("#singleframe").locator("input[type='text']").fill("Welcome");
  await expect(page.frameLocator("#singleframe").locator("input[type='text']")).toHaveValue("Welcome");
  await page.waitForTimeout(5000);
});

test("inner or child frame demo with frameLocator()", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Frames.html", { waitUntil: "domcontentloaded" });
  await page.getByText("Iframe with in an Iframe").click();
  await page.waitForTimeout(5000);

  const frame: FrameLocator = page.frameLocator("iframe[src='MultipleFrames.html']");
  const frameName = await frame.getByText("Nested iFrames").innerText();
  console.log("First frame name : ", frameName);

  const childFrame: FrameLocator = frame.frameLocator("iframe[src='SingleFrame.html']");
  const chileFrameName: string = await childFrame.getByText("iFrame Demo").innerText();
  console.log("Child frame name is ", chileFrameName);
  await childFrame.locator("input[type='text']").fill("hi");
  await page.waitForTimeout(5000);

  const mainFrame = page.mainFrame();
  const homeText = await mainFrame.getByText("Home").innerText();
  console.log(homeText);

  const frameName1 = await frame.getByText("Nested iFrames").innerText();
  console.log("First frame name : ", frameName1);
});

test("inner or child frame demo with frame() method", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Frames.html", { waitUntil: "domcontentloaded" });
  await page.getByText("Iframe with in an Iframe").click();
  await page.waitForTimeout(5000);

  const frame: Frame | null = page.frame({ url: "https://demo.automationtesting.in/MultipleFrames.html" });
  if (frame) {
    const frameName = await frame.getByText("Nested iFrames").innerText();
    console.log("First frame name : ", frameName);

    const childFrames: Frame[] = frame.childFrames();
    console.log("No of child farme is : ", childFrames.length);
    const childFirst = childFrames[0];
    if (childFirst) {
      const childFrameName = await childFirst.getByText("iFrame Demo").innerText();
      console.log("child frame name is ", childFrameName);
      await childFirst.locator("input[type='text']").fill("Perfect");
      await page.waitForTimeout(5000);

      const parnet = childFirst.parentFrame();
      if (parnet) {
        const frameName = await parnet.getByText("Nested iFrames").innerText();
        console.log("First frame name : ", frameName);
      }
    }
    const mainPage: Frame = page.mainFrame();
    console.log("Home page is ", await mainPage.getByText("Home").innerText());
  } else {
    console.log("Frame is not found");
  }


});

/*
An iframe (short for “inline frame”) is an HTML element that allows you to 
embed another HTML document within the current document. 
Iframes are commonly used to embed external content such as videos,
 maps, or other web pages (as seen here) into a web page without affecting the parent document.
*/

// `page.frame()` may return a **Frame object** if the frame is found, or **null** if the frame does not exist.

// The `?.` (Optional Chaining Operator) checks whether `frame` is available before calling `locator()`.
// If `frame` is `null`, it prevents a runtime error and safely skips the method call.
