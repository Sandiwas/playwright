import { test, expect } from "@playwright/test";

test.beforeAll("beforeAll hooks", async () => {
  console.log("Before...  all ");
});

test.afterAll("afterAll hooks", async () => {
  console.log("After... all");
});

test.beforeEach("beforeEach hooks", async () => {
  console.log("Before...  each ");
});

test.afterEach("afterEach hooks", async () => {
  console.log("After... each");
});

test("Test1", async () => {
  console.log("First Test1");
});

test("Test2", async () => {
  console.log("Second Test2");
});

test("Test3", async () => {
  console.log("Third Test3");
});

test("Test4", async () => {
  console.log("Third Test4");
});
