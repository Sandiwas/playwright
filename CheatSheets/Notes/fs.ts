========================================================================================================================================================

# Node.js `fs` Module Functions Used in Playwright

The **`fs` (File System)** module is used to work with files and folders. In Playwright, it is commonly used to verify downloads, create/delete files, read test data, and generate reports.

---

# Import `fs`

```ts
import fs from "fs";
```

or

```ts
import * as fs from "fs";
```

---

# 1. `existsSync()`

Checks whether a file or folder exists.

### Syntax

```ts
fs.existsSync(path)
```

### Example

```ts
const exists = fs.existsSync("downloads/report.pdf");

expect(exists).toBeTruthy();
```

---

# 2. `unlinkSync()`

Deletes a file.

### Syntax

```ts
fs.unlinkSync(path);
```

### Example

```ts
fs.unlinkSync("downloads/report.pdf");
```

---

# 3. `mkdirSync()`

Creates a folder.

### Syntax

```ts
fs.mkdirSync(path);
```

### Example

```ts
fs.mkdirSync("downloads");
```

Create if it doesn't exist:

```ts
if (!fs.existsSync("downloads")) {
    fs.mkdirSync("downloads");
}
```

---

# 4. `readFileSync()`

Reads file content.

### Syntax

```ts
fs.readFileSync(path, "utf8");
```

### Example

```ts
const text = fs.readFileSync("testdata/data.txt", "utf8");

console.log(text);
```

---

# 5. `writeFileSync()`

Creates a new file or overwrites an existing file.

### Syntax

```ts
fs.writeFileSync(path, data);
```

### Example

```ts
fs.writeFileSync("result.txt", "Playwright Automation");
```

---

# 6. `appendFileSync()`

Appends data to an existing file.

### Syntax

```ts
fs.appendFileSync(path, data);
```

### Example

```ts
fs.appendFileSync("logs.txt", "\nExecution Passed");
```

---

# 7. `renameSync()`

Renames a file.

### Syntax

```ts
fs.renameSync(oldPath, newPath);
```

### Example

```ts
fs.renameSync(
    "downloads/file.txt",
    "downloads/result.txt"
);
```

---

# 8. `copyFileSync()`

Copies one file to another location.

### Syntax

```ts
fs.copyFileSync(source, destination);
```

### Example

```ts
fs.copyFileSync(
    "downloads/file.txt",
    "backup/file.txt"
);
```

---

# 9. `readdirSync()`

Returns all files in a directory.

### Syntax

```ts
fs.readdirSync(folderPath);
```

### Example

```ts
const files = fs.readdirSync("downloads");

console.log(files);
```

---

# 10. `statSync()`

Returns file information.

### Syntax

```ts
fs.statSync(path);
```

### Example

```ts
const info = fs.statSync("downloads/file.txt");

console.log(info.size);
```

---

# 11. `rmSync()`

Deletes a folder.

### Syntax

```ts
fs.rmSync(path, { recursive: true });
```

### Example

```ts
fs.rmSync("downloads", {
    recursive: true,
    force: true
});
```

---

# 12. `createReadStream()`

Reads large files using a stream.

### Example

```ts
const stream = fs.createReadStream("largeFile.txt");
```

---

# 13. `createWriteStream()`

Writes large files using a stream.

### Example

```ts
const stream = fs.createWriteStream("output.txt");
```

---

# Most Common `fs` Functions Used in Playwright

| Function           | Purpose                  |
| ------------------ | ------------------------ |
| `existsSync()`     | Check file/folder exists |
| `unlinkSync()`     | Delete file              |
| `mkdirSync()`      | Create folder            |
| `readFileSync()`   | Read file                |
| `writeFileSync()`  | Create/overwrite file    |
| `appendFileSync()` | Append data              |
| `copyFileSync()`   | Copy file                |
| `renameSync()`     | Rename file              |
| `readdirSync()`    | List files in folder     |
| `statSync()`       | Get file details         |
| `rmSync()`         | Delete folder            |

---

# Real-Time Playwright Example

```ts
import fs from "fs";

const downloadPath = "downloads/report.pdf";

await download.saveAs(downloadPath);

// Verify file exists
expect(fs.existsSync(downloadPath)).toBeTruthy();

// Read file details
const info = fs.statSync(downloadPath);
console.log(info.size);

// Delete downloaded file
fs.unlinkSync(downloadPath);
```

---

# Interview Question

### Q. Which `fs` functions are commonly used in Playwright?

**Answer:**

The most commonly used `fs` functions in Playwright are:

* `existsSync()` – Verify downloaded file exists.
* `unlinkSync()` – Delete downloaded file.
* `mkdirSync()` – Create download folder.
* `readFileSync()` – Read file content.
* `writeFileSync()` – Create/write files.
* `appendFileSync()` – Append log data.
* `copyFileSync()` – Copy files.
* `renameSync()` – Rename files.
* `readdirSync()` – List files in a directory.
* `statSync()` – Get file information such as size.
* `rmSync()` – Delete folders.

---

# Easy Memory Trick

```text
existsSync()      → Check
mkdirSync()       → Create Folder
writeFileSync()   → Create File
readFileSync()    → Read File
appendFileSync()  → Add Data
copyFileSync()    → Copy File
renameSync()      → Rename File
readdirSync()     → List Files
statSync()        → File Details
unlinkSync()      → Delete File
rmSync()          → Delete Folder
```


===============================================================================================================================================================
&&&&&&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
================================================================================================================================================================
# Playwright Interview Questions & Answers – Node.js `fs` Module

---

# 1. What is the `fs` module?

**Answer:**

`fs` stands for **File System**. It is a built-in Node.js module used to create, read, update, copy, rename, and delete files and folders.

---

# 2. Why do we use the `fs` module in Playwright?

**Answer:**

The `fs` module is mainly used for:

* Verifying downloaded files
* Reading test data
* Creating log files
* Creating download folders
* Deleting downloaded files
* Copying and renaming files

---

# 3. Which `fs` function is most commonly used in Playwright?

**Answer:**

`existsSync()`

It verifies whether a downloaded file exists.

Example:

```ts
expect(fs.existsSync(downloadPath)).toBeTruthy();
```

---

# 4. What does `existsSync()` do?

**Answer:**

It checks whether a file or folder exists.

Returns:

* `true`
* `false`

Example:

```ts
const exists = fs.existsSync("downloads/report.pdf");
```

---

# 5. Why do we use `unlinkSync()`?

**Answer:**

It deletes a file from the system.

Example:

```ts
fs.unlinkSync("downloads/report.pdf");
```

---

# 6. Why do we use `mkdirSync()`?

**Answer:**

It creates a new folder.

Example:

```ts
fs.mkdirSync("downloads");
```

---

# 7. What is the difference between `writeFileSync()` and `appendFileSync()`?

**Answer:**

`writeFileSync()`

* Creates a new file.
* Overwrites existing content.

Example:

```ts
fs.writeFileSync("log.txt", "Execution Started");
```

---

`appendFileSync()`

* Adds data to an existing file.
* Does not remove previous content.

Example:

```ts
fs.appendFileSync("log.txt", "\nExecution Passed");
```

---

# 8. What is `readFileSync()`?

**Answer:**

Reads the content of a file.

Example:

```ts
const text = fs.readFileSync("data.txt", "utf8");
```

---

# 9. Why is `"utf8"` passed to `readFileSync()`?

**Answer:**

Without `"utf8"` it returns a Buffer object.

With `"utf8"` it returns readable text.

Example:

```ts
const data = fs.readFileSync("data.txt", "utf8");
```

---

# 10. What does `renameSync()` do?

**Answer:**

Renames a file.

Example:

```ts
fs.renameSync(
    "old.txt",
    "new.txt"
);
```

---

# 11. What does `copyFileSync()` do?

**Answer:**

Copies one file to another location.

Example:

```ts
fs.copyFileSync(
    "source.txt",
    "backup.txt"
);
```

---

# 12. What is `readdirSync()`?

**Answer:**

Returns all files inside a folder.

Example:

```ts
const files = fs.readdirSync("downloads");
```

---

# 13. What is `statSync()`?

**Answer:**

Returns file information.

Example:

```ts
const info = fs.statSync("downloads/report.pdf");

console.log(info.size);
```

Common properties:

* size
* isFile()
* isDirectory()
* birthtime

---

# 14. What is `rmSync()`?

**Answer:**

Deletes a folder.

Example:

```ts
fs.rmSync("downloads", {
    recursive: true,
    force: true
});
```

---

# 15. Why do we use `statSync()` after downloading a file?

**Answer:**

To verify file properties such as:

* Size
* Creation time
* Whether it is a file

---

# 16. How do you verify a downloaded file in Playwright?

**Answer:**

```ts
await download.saveAs(downloadPath);

expect(fs.existsSync(downloadPath)).toBeTruthy();
```

---

# 17. How do you delete a downloaded file after verification?

**Answer:**

```ts
if (fs.existsSync(downloadPath)) {
    fs.unlinkSync(downloadPath);
}
```

---

# 18. Which `fs` methods are synchronous?

**Answer:**

Methods ending with **Sync** are synchronous.

Examples:

* existsSync()
* readFileSync()
* writeFileSync()
* unlinkSync()
* mkdirSync()
* renameSync()

---

# 19. What is the difference between synchronous and asynchronous methods?

**Answer:**

Synchronous (`Sync`)

* Executes one statement at a time.
* Waits until completion.
* Easier to write.

Asynchronous

* Does not block execution.
* Faster for large operations.
* Uses callbacks, Promises, or async/await.

---

# 20. Which `fs` methods do you use most in Playwright projects?

**Answer:**

In real Playwright automation, the most commonly used methods are:

* existsSync()
* unlinkSync()
* mkdirSync()
* readFileSync()
* writeFileSync()
* appendFileSync()
* statSync()

---

# Interview One-Liner

**Q. Why is the `fs` module used in Playwright?**

**Answer:**

The `fs` module is used to work with files and folders, such as verifying downloads, reading test data, 
creating log files, managing directories, and cleaning up files after test execution.
