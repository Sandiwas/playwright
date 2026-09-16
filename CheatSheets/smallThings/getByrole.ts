/* # Accessible Name Sources with Examples

## 1. ✅ Visible Label (Most Common)

### HTML
```html
<label for="email">Email</label>
<input id="email" type="text">
```

### Playwright
```ts
await page.getByRole('textbox', { name: 'Email' }).fill('abc@test.com');
```

**Explanation:**
- Role = `textbox`
- Name = `Email` (comes from the `<label>`)

---

## 2. ✅ aria-label

### HTML
```html
<input type="text" aria-label="Search">
```

### Playwright
```ts
await page.getByRole('textbox', { name: 'Search' }).fill('Laptop');
```

**Explanation:**
- Role = `textbox`
- Name = `Search` (comes from `aria-label`)

---

## 3. ✅ aria-labelledby

### HTML
```html
<label id="usernameLabel">Username</label>

<input
    type="text"
    aria-labelledby="usernameLabel">
```

### Playwright
```ts
await page.getByRole('textbox', { name: 'Username' }).fill('admin');
```

**Explanation:**
- `aria-labelledby` points to another element.
- The text inside that element becomes the accessible name.

---

## 4. ✅ Visible Text

### HTML
```html
<button>Login</button>
```

### Playwright
```ts
await page.getByRole('button', { name: 'Login' }).click();
```

Another example:

```html
<a href="/home">Home</a>
```

```ts
await page.getByRole('link', { name: 'Home' }).click();
```

**Explanation:**
- The visible text becomes the accessible name.

---

## 5. ✅ alt Attribute (Images)

### HTML
```html
<img src="logo.png" alt="Company Logo">
```

### Playwright
```ts
await page.getByRole('img', { name: 'Company Logo' });
```

**Explanation:**
- Role = `img`
- Name = `Company Logo` (comes from `alt`)

---

## 6. ✅ title Attribute (Sometimes)

### HTML
```html
<button title="Close">✖</button>
```

### Playwright
```ts
await page.getByRole('button', { name: 'Close' }).click();
```

**Explanation:**
- If there is no visible text or label, browsers may use the `title` attribute as the accessible name.
- This behavior depends on the element and browser, so it's less reliable than labels or `aria-label`.

---

# Interview Summary

| Accessible Name Source | HTML Example | Playwright |
|-------------------------|--------------|------------|
| Visible Label | `<label>Email</label><input>` | `getByRole('textbox', { name: 'Email' })` |
| aria-label | `<input aria-label="Search">` | `getByRole('textbox', { name: 'Search' })` |
| aria-labelledby | `<input aria-labelledby="lbl">` | `getByRole('textbox', { name: 'Username' })` |
| Visible Text | `<button>Login</button>` | `getByRole('button', { name: 'Login' })` |
| alt | `<img alt="Company Logo">` | `getByRole('img', { name: 'Company Logo' })` |
| title | `<button title="Close">✖</button>` | `getByRole('button', { name: 'Close' })` |

# Easy Memory Trick

- **Visible Label** → Form fields (Email, Password, Username)
- **aria-label** → Hidden label written in HTML
- **aria-labelledby** → Label comes from another element
- **Visible Text** → Button, Link, Heading
- **alt** → Images
- **title** → Tooltip (used only sometimes) */




/* =============================================================================================================================

# Playwright `getByRole()` Notes (Interview + Practical)

## What is `getByRole()`?
- `getByRole()` locates elements using their **ARIA role** and **accessible name**.
- It is the **recommended locator** in Playwright because it mimics how users and screen readers interact with a webpage.
- It creates stable and readable automation scripts.

---

## Syntax

```ts
page.getByRole(role, { name: 'Accessible Name' })
```

Example:

```ts
await page.getByRole('button', { name: 'Login' }).click();
```

---

## What is the `name`?

The `name` is the **Accessible Name** of the element.

It is **NOT**
- ❌ id
- ❌ class
- ❌ HTML `name` attribute

It comes from:

1. ✅ Visible Label
2. ✅ `aria-label`
3. ✅ `aria-labelledby`
4. ✅ Visible Text
5. ✅ `alt` attribute (images)
6. ✅ `title` (sometimes)

---

## Examples

### Button

HTML

```html
<button>Login</button>
```

Playwright

```ts
await page.getByRole('button', { name: 'Login' }).click();
```

---

### Textbox

HTML

```html
<label>Email</label>
<input type="text">
```

Playwright

```ts
await page.getByRole('textbox', { name: 'Email' }).fill('abc@test.com');
```

---

### Checkbox

HTML

```html
<label>
<input type="checkbox">
Remember Me
</label>
```

Playwright

```ts
await page.getByRole('checkbox', { name: 'Remember Me' }).check();
```

---

### Link

HTML

```html
<a href="/about">About Us</a>
```

Playwright

```ts
await page.getByRole('link', { name: 'About Us' }).click();
```

---

### Combobox

HTML

```html
<select>
<option>India</option>
</select>
```

Playwright

```ts
await page.getByRole('combobox').selectOption('India');
```

---

## Common Roles

| HTML Element | Role |
|--------------|------|
| `<button>` | button |
| `<input type="text">` | textbox |
| `<input type="checkbox">` | checkbox |
| `<input type="radio">` | radio |
| `<a>` | link |
| `<select>` | combobox |
| `<img>` | img |
| `<table>` | table |
| `<tr>` | row |
| `<td>` | cell |
| `<h1>`–`<h6>` | heading |
| `<textarea>` | textbox |
| `<ul>` | list |
| `<li>` | listitem |

---

## Order of Preferred Locators

1. ⭐ getByRole()
2. ⭐ getByLabel()
3. ⭐ getByPlaceholder()
4. ⭐ getByText()
5. ⭐ getByTestId()
6. CSS Locator
7. XPath (last option)

---

## Why Prefer `getByRole()`?

- Stable locator
- User-centric
- Accessibility-friendly
- Less affected by HTML structure changes
- Recommended by Playwright

---

## When `getByRole()` May Not Work

If an element:
- has no accessible role,
- has no accessible name,
- or is not exposed to the accessibility tree,

then use another locator like:

```ts
page.locator('#username')
```

or

```ts
page.getByLabel('Username')
```

---

## Interview Questions

### Q1. What is `getByRole()`?

**Answer:**
`getByRole()` locates elements using their ARIA role and accessible name.
 It is the recommended Playwright locator because it closely matches how users and assistive technologies interact with a web page.

---

### Q2. What is the `name` in `getByRole()`?

**Answer:**
The `name` is the element's **accessible name**, which usually comes from:
- Visible label
- Visible text
- aria-label
- aria-labelledby
It does **not** come from the HTML id, class, or name attribute.

---

### Q3. Which locator should you prefer?

**Answer:**
1. getByRole()
2. getByLabel()
3. getByPlaceholder()
4. getByText()
5. getByTestId()
6. CSS/XPath only if needed.

---

## Easy Way to Remember

**Role = What the element is**

- button
- textbox
- checkbox
- radio
- link
- combobox

**Name = What the user sees or what assistive technologies announce**

Example:

```html
<button>Submit</button>
```

```ts
page.getByRole('button', { name: 'Submit' });
```

### Memory Trick

**Role = Type of element**

**Name = User-visible or Accessible text** */