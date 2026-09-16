===============================================================================================================================================================

1. What is an ElementHandle in Playwright?
Answer: ElementHandle is a reference (pointer) to a specific DOM element. It allows us to perform actions like click, get text, get attributes, etc.

2. How do you get an ElementHandle?
const button = await page.$('#loginBtn');

3. What does page.$() return?
Answer: It returns the first matching ElementHandle or null if no element is found.

4. What does page.$$() return?
const buttons = await page.$$('button');
Answer: It returns an array of ElementHandles.

5. Difference between Locator and ElementHandle?

Locator:
- Recommended by Playwright
- Re-finds the element every time
- Auto-waiting support
- Does not become stale easily

ElementHandle:
- Direct reference to a DOM element
- Holds a fixed reference
- No auto re-query
- Can become stale if DOM changes

6. Why is Locator preferred over ElementHandle?
Answer: Locator automatically waits and re-finds the element if the DOM changes, whereas ElementHandle can become stale.

7. Common methods of ElementHandle:
await button.click();
await button.textContent();
await button.getAttribute('id');
await button.hover();
await button.isVisible();
await button.screenshot();

8. Why do we use ?. with ElementHandle?
await button?.click();

Answer: Because page.$() can return null. Optional chaining prevents:
Cannot read properties of null.

9. What happens if the DOM changes after getting an ElementHandle?
Answer: The ElementHandle may become stale and operations on it can fail.

10. Which JavaScript method is similar to page.$()?
page.$('#id')  ->  document.querySelector('#id')

11. Which JavaScript method is similar to page.$$()?
page.$$('button')  ->  document.querySelectorAll('button')

12. When would you use ElementHandle?
Answer: When you need direct DOM access, pass elements into evaluate(), or work with APIs that specifically require an ElementHandle.

13. What is the difference between $ and $$?
$  -> Returns a single ElementHandle.
$$ -> Returns an array of ElementHandles.

14. What is optional chaining (?.)?
Answer: It executes the method only if the object is not null or undefined.

15. Give a simple example of ElementHandle.
const button = await page.$('#loginBtn');
await button?.click();
console.log(await button?.textContent());
console.log(await button?.getAttribute('id'));





// ElementHandle is an object that represents a DOM element in Playwright. It acts as a handle (reference/pointer) 
// to a specific element on the page and allows us to perform actions like click, get text, get attributes, etc.

// const options = await page.locator('#dropdown option').elementHandles();

// for (const option of options) {
//   console.log(await option.textContent());
// }