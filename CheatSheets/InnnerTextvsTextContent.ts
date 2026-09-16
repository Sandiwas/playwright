

=========================================================
Interview Answer
=========================================================

innerText()
-----------
Returns only the text visible to the user.

textContent()
-------------
Returns all text present in the DOM, including hidden text.

I use innerText() for UI validations and textContent()
when I need raw DOM text or hidden element text.


=========================================================
Real-Time Playwright Example
=========================================================

// Validate what user sees
const message = await page.locator(".success-msg").innerText();
expect(message).toBe("Login Successful");

// Read hidden tooltip text
const tooltip = await page.locator("#tooltip").textContent();
expect(tooltip).toContain("Password");


=========================================================
Example 1 : Hidden Element
=========================================================

HTML:

<div id="demo">
  Hello
  <span style="display:none">World</span>
</div>

---------------------------------------------------------
innerText()
---------------------------------------------------------

const text = await page.locator("#demo").innerText();

console.log(text);

Output:
Hello

Reason:
"World" is hidden (display:none), so innerText() ignores it.

---------------------------------------------------------
textContent()
---------------------------------------------------------

const text = await page.locator("#demo").textContent();

console.log(text);

Output:
Hello World

Reason:
textContent() reads everything from the DOM, including hidden text.



=========================================================
Example 2 : Hidden Button
=========================================================

HTML:

<button id="btn" style="display:none">
  Submit
</button>

---------------------------------------------------------
innerText()
---------------------------------------------------------

const text = await page.locator("#btn").innerText();

console.log(text);

Output:
"" (empty string)

Reason:
The button is hidden.

---------------------------------------------------------
textContent()
---------------------------------------------------------

const text = await page.locator("#btn").textContent();

console.log(text);

Output:
Submit

Reason:
textContent() can read hidden text.


=========================================================
Example 3 : Spaces and Line Breaks
=========================================================

HTML:

<div id="msg">
   Hello

   World
</div>

---------------------------------------------------------
innerText()
---------------------------------------------------------

const text = await page.locator("#msg").innerText();

console.log(text);

Output:
Hello World

Reason:
innerText() normalizes spaces and line breaks.

---------------------------------------------------------
textContent()
---------------------------------------------------------

const text = await page.locator("#msg").textContent();

console.log(text);

Output:

"   Hello

   World"

Reason:
textContent() returns the original text exactly as it exists in the DOM.



==========================================================================================================

=========================================================
Interview Answer : innerText() vs textContent()
=========================================================

innerText()
-----------
1. Returns only the text visible to the user.
2. Ignores hidden elements (display:none, visibility:hidden).
3. Normalizes spaces and line breaks.
4. Returns the actual text that the user sees on the UI.

Example:
<div>Hello <span style="display:none">World</span></div>

innerText() Output:
Hello

---------------------------------------------------------

textContent()
-------------
1. Returns all text present in the DOM.
2. Includes hidden elements.
3. Preserves original spaces and line breaks.
4. Returns the raw text from the HTML.

Example:
<div>Hello <span style="display:none">World</span></div>

textContent() Output:
Hello World

---------------------------------------------------------

Which method gives actual text shown to the user?

Answer:
✅ innerText()

---------------------------------------------------------

Which method includes hidden elements?

Answer:
✅ textContent()

---------------------------------------------------------

Which method preserves original spaces and line breaks?

Answer:
✅ textContent()

---------------------------------------------------------

Which method should be used for UI validations?

Answer:
✅ innerText()

---------------------------------------------------------

Which method should be used to read raw DOM text or hidden text?

Answer:
✅ textContent()

=========================================================
Most Important Interview Answer
=========================================================

I use innerText() when I need the actual text displayed to the user because it ignores hidden elements and normalizes spaces.

I use textContent() when I need the raw DOM text because it includes hidden elements and preserves original spaces and line breaks.



%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
innerText() → Gives only the text that the user can see on the screen.(return exact text , visible text)
textContent() → Gives all text from the HTML, including hidden text.(hidden elelemnt also return space as well,DOM text )
innerText() ignores hidden elements and extra spaces.
textContent() includes hidden elements and keeps the original spaces.


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
console.log(productName?.trim());

Explanation:
The ?. (optional chaining) operator safely calls trim() only if productName is not null or undefined, and trim() removes leading and trailing spaces.

Example:

const productName = "  iPhone  ";
console.log(productName?.trim());
// Output: iPhone

const productName2 = undefined;
console.log(productName2?.trim());
// Output: undefined

Interview Answer:
productName?.trim() safely removes extra spaces from a string and prevents an error if the variable is null or undefined.