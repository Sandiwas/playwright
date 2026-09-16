=========================================================
Playwright Alert Handling Methods
=========================================================

---------------------------------------------------------------------------------------------------------------
| Method                         | Description                                           | Example                                  |
---------------------------------------------------------------------------------------------------------------
| dialog.type()                  | Returns the type of alert.                            | dialog.type()                            |
| dialog.message()               | Returns the alert message.                            | dialog.message()                         |
| dialog.defaultValue()          | Returns the default prompt value.                     | dialog.defaultValue()                    |
| dialog.accept()                | Accepts the alert.                                    | dialog.accept()                          |
| dialog.accept("text")          | Accepts prompt and enters text.                       | dialog.accept("John")                    |
| dialog.dismiss()               | Dismisses/Closes the alert.                           | dialog.dismiss()                         |
---------------------------------------------------------------------------------------------------------------


=========================================================
1. dialog.type()
=========================================================

Description:
Returns the type of JavaScript dialog.

Possible values:
- alert
- confirm
- prompt
- beforeunload

Example:

page.on("dialog", async dialog => {
  console.log(dialog.type());
});

Output:
alert


=========================================================
2. dialog.message()
=========================================================

Description:
Returns the message displayed in the alert.

Example:

page.on("dialog", async dialog => {
  console.log(dialog.message());
  await dialog.accept();
});

Output:
I am an alert box!


=========================================================
3. dialog.defaultValue()
=========================================================

Description:
Returns the default value of a prompt dialog.

Example:

page.on("dialog", async dialog => {
  console.log(dialog.defaultValue());
  await dialog.accept();
});

Output:
Harry Potter


=========================================================
4. dialog.accept()
=========================================================

Description:
Clicks OK on the alert.

Example:

page.on("dialog", async dialog => {
  await dialog.accept();
});



=========================================================
5. dialog.accept("text")
=========================================================

Description:
Clicks OK and enters text into a prompt dialog.

Example:

page.on("dialog", async dialog => {
  await dialog.accept("Sandip");
});



=========================================================
6. dialog.dismiss()
=========================================================

Description:
Clicks Cancel or closes the dialog.

Example:

page.on("dialog", async dialog => {
  await dialog.dismiss();
});



=========================================================
Alert Handling Examples
=========================================================

---------------------------------------------------------
1. Alert Popup
---------------------------------------------------------

page.on("dialog", async dialog => {
  console.log(dialog.message());
  await dialog.accept();
});

await page.locator("#alertBtn").click();



---------------------------------------------------------
2. Confirmation Popup
---------------------------------------------------------

page.on("dialog", async dialog => {
  console.log(dialog.message());
  await dialog.dismiss();
});

await page.locator("#confirmBtn").click();



---------------------------------------------------------
3. Prompt Popup
---------------------------------------------------------

page.on("dialog", async dialog => {
  console.log(dialog.message());
  await dialog.accept("Sandip");
});

await page.locator("#promptBtn").click();



---------------------------------------------------------
4. beforeunload Popup
---------------------------------------------------------

page.on("dialog", async dialog => {
  console.log(dialog.type());
  await dialog.accept();
});

await page.close({ runBeforeUnload: true });



=========================================================
Real-Time Automation Examples
=========================================================

1. Accept delete confirmation popup.

page.on("dialog", async dialog => {
  await dialog.accept();
});

---------------------------------------------------------

2. Reject cancellation popup.

page.on("dialog", async dialog => {
  await dialog.dismiss();
});

---------------------------------------------------------

3. Enter username in prompt popup.

page.on("dialog", async dialog => {
  await dialog.accept("Admin");
});



=========================================================
Interview Questions & Answers
=========================================================

Q1. How do you handle alerts in Playwright?

Answer:
Playwright handles alerts using the page.on("dialog") event listener and Dialog methods like accept() and dismiss().

---------------------------------------------------------

Q2. What are the different dialog types in Playwright?

Answer:
1. alert
2. confirm
3. prompt
4. beforeunload

---------------------------------------------------------

Q3. How do you accept an alert?

Answer:

page.on("dialog", async dialog => {
  await dialog.accept();
});

---------------------------------------------------------

Q4. How do you dismiss an alert?

Answer:

page.on("dialog", async dialog => {
  await dialog.dismiss();
});

---------------------------------------------------------

Q5. How do you get the alert message?

Answer:

page.on("dialog", async dialog => {
  console.log(dialog.message());
  await dialog.accept();
});

---------------------------------------------------------

Q6. How do you enter text in a prompt popup?

Answer:

page.on("dialog", async dialog => {
  await dialog.accept("Sandip");
});

---------------------------------------------------------

Q7. What happens if you don't handle the dialog?

Answer:
The page will freeze because Playwright automatically waits for the dialog to be handled before continuing.

---------------------------------------------------------

Q8. Which event is used to handle alerts?

Answer:

page.on("dialog", callback)

---------------------------------------------------------

Q9. What is dialog.defaultValue() used for?

Answer:
It returns the default text present inside a prompt dialog.

---------------------------------------------------------

Q10. What is the difference between accept() and dismiss()?

----------------------------------------------------------------------------------------------------
| Method      | Action Performed                                  |
----------------------------------------------------------------------------------------------------
| accept()    | Clicks OK on the dialog                           |
| dismiss()   | Clicks Cancel or closes the dialog                |
----------------------------------------------------------------------------------------------------

---------------------------------------------------------

Most Important Interview Answer:

Playwright handles JavaScript dialogs using the page.on("dialog") event. We can read the message using message(), determine the type using type(),
 accept alerts using accept(), dismiss them using dismiss(), and provide input to prompt dialogs using accept("text").




 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

 Q1. What is page.on() in Playwright?
Answer:
page.on() is used to register a persistent event listener. It executes every time the specified event occurs. 
It is commonly used for continuously monitoring events such as console logs, network requests, dialogs, downloads, or popups.
Example:

1. Dialog Event
page.on('dialog', async dialog => {
  console.log(dialog.message());
  await dialog.accept();
});
2. Download Event
page.on('download', async download => {
  console.log(await download.suggestedFilename());
});

3. Request Event
page.on('request', request => {
  console.log(request.url());
});

Interview Answer
page.on() follows the standard event handler syntax: page.on(eventName, callback). The first parameter is the event name, and the second parameter is a callback function that
 receives the event object whenever the event occurs. The callback can be synchronous or asynchronous depending on whether we need to use await inside it.

 This is the syntax interviewers generally expect you to explain:
 page.on(eventName, callbackFunction);
Easy way to remember:


Interview Answer
Yes. page.on() is used when an event may occur multiple times. Every time the event is triggered, 
the registered callback is executed. For example, if the page generates multiple console logs, network requests, 
or dialogs, the event handler runs once for each occurrence. If I expect the event only once, I use page.once() instead.
✅ page.on() = Every occurrence (0...n times)
✅ page.once() = First occurrence only (1 time)


Q2. What is page.once() in Playwright?

Answer:
page.once() is used to register a one-time event listener. 
It executes only the first time the specified event occurs and 
then automatically removes itself. It is ideal for events that are expected only once.
Example:
page.once('dialog', async dialog => {
  await dialog.accept();
});


Q3. What is the difference between page.on() and page.once()?
Answer:
page.on():
- Executes every time the event occurs.
- Listener remains active until removed.
- Used for continuous event monitoring.

page.once():
- Executes only once.
- Listener is automatically removed after the first execution.
- Used for one-time events.


Q4. Which one do you prefer in automation?
Answer:
I prefer page.once() whenever I know the event will occur only once, such as a popup, dialog, or download. It automatically removes the listener after the first execution, making the code cleaner and preventing duplicate handling. I use page.on() only when I need to continuously listen for events like console logs or network requests.


Q5. Give a real-time example of page.on().
Answer:
A common use case is monitoring browser console logs throughout the test execution.
Example:
page.on('console', msg => {
  console.log(msg.type(), msg.text());
});


Q6. Give a real-time example of page.once().
Answer:
A common use case is handling a one-time download event.

Example:
page.once('download', async download => {
  console.log(await download.suggestedFilename());
});

await page.click('#downloadButton');


Q7. What happens if page.once() is used and the event occurs multiple times?
Answer:
Only the first occurrence is handled. After that, the listener is automatically removed, so all subsequent events are ignored.


Q8. What happens if page.on() is used for an event that occurs multiple times?
Answer:
The callback executes every time the event occurs until the listener is explicitly removed or the page is closed.


Q9. When should you avoid using page.on()?
Answer:
Avoid using page.on() when the event is expected to occur only once. In such cases, page.once() is a better choice because it prevents duplicate event handling and automatically removes the listener.


Q10. Interview Answer (Best Answer)

page.on() is used for continuous event listening, whereas page.once() is used for one-time event handling. I prefer page.once() for single 
events such as dialogs, downloads, or popups because it automatically removes the listener and avoids
 duplicate execution. I use page.on() when I need to continuously monitor events like console logs, network requests, or repeated dialogs.

 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 Q. Can you explain page.on() with a real-time example?

Answer:
page.on() is used to register a persistent event listener. It executes every time the specified event occurs. It is used when an event can occur multiple times during the test execution.

--------------------------------------------------
Real-Time Example 1: Monitor All API Requests
--------------------------------------------------

Scenario:
In an e-commerce application, when the Home page loads, multiple API calls are triggered to fetch the user profile, product list, cart details, and notifications. Since multiple requests are expected, we use page.on('request').

Code:

page.on('request', request => {
  console.log(request.method(), request.url());
});

await page.goto('https://example.com');

Output:
GET /login
GET /profile
GET /products
GET /cart

Here, the callback executes 4 times because 4 requests are sent.

Interview Answer:
I use page.on('request') when I need to monitor every network request during test execution. Since multiple API calls are made, page.on() listens to each request until the test ends.

--------------------------------------------------
Real-Time Example 2: Capture Browser Console Logs
--------------------------------------------------

Scenario:
During regression testing, I want to capture all browser console logs to identify JavaScript errors.

Code:

page.on('console', msg => {
  console.log(msg.type(), msg.text());
});

await page.goto('https://example.com');

Output:
info Application Started
warning API response is slow
error Failed to load image

The callback executes every time a console message is generated.

Interview Answer:
I use page.on('console') to continuously monitor browser console logs. Since an application can generate multiple logs during execution, page.on() is the appropriate choice.

--------------------------------------------------
Real-Time Example 3: Handle Multiple Dialogs
--------------------------------------------------

Scenario:
Suppose an application displays a confirmation dialog every time a record is deleted.

Code:

page.on('dialog', async dialog => {
  console.log(dialog.message());
  await dialog.accept();
});

await page.click('#deleteUser1');
await page.click('#deleteUser2');
await page.click('#deleteUser3');

Result:
Delete User 1 -> Dialog handled
Delete User 2 -> Dialog handled
Delete User 3 -> Dialog handled

The callback executes 3 times because the dialog appears 3 times.

--------------------------------------------------
Best Interview Answer
--------------------------------------------------

Q. What is page.on() in Playwright?

Answer:

page.on() is used when an event is expected to happen multiple times. It keeps monitoring the event throughout the test execution.
 Every time the specified event occurs, the callback function is executed.

In real projects, I use page.on() to monitor network requests, browser console logs, and repeated dialogs because these events can occur multiple times during a test.

Example:

page.on('request', request => {
  console.log(request.method(), request.url());
});

await page.goto('https://example.com');

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

Interview Question

Q. What is a callback function in page.on()?

Answer:

A callback function is the function passed to page.on(). Playwright automatically executes this function whenever the specified event occurs. 
It contains the logic to handle that event.

For example:

page.on('dialog', async dialog => {
  await dialog.accept();
});

Here, async dialog => { await dialog.accept(); } is the callback function because it is executed automatically when the dialog event occurs.

Easy way to remember:

page.on() = Registers the event.
Callback function = Handles the event when it happens.


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

Good question. dialog is not a variable for validation—it is an object.

For example:

page.on('dialog', async dialog => {
  console.log(dialog.message());
  await dialog.accept();
});
Breakdown
page.on('dialog', async dialog => {
'dialog' → Event name
async → Makes the callback asynchronous so you can use await.
dialog → Dialog object passed by Playwright when the event occurs.