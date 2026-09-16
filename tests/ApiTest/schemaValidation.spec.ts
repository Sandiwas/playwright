import { expect, test } from "@playwright/test";
import Ajv from "ajv";

test("Validate json resopnse with Schema1 ", async ({ request }) => {
  const response = await request.get("https://mocktarget.apigee.net/json");
  const responseBody = await response.json();
  console.log(responseBody);

  const schema = {
    type: "object",
    properties: {
      firstName: {
        type: "string",
      },
      lastName: {
        type: "string",
      },
      city: {
        type: "string",
      },
      state: {
        type: "string",
      },
    },
    required: ["firstName", "lastName", "city", "state"],
    additionalProperties: false,
  };

  const ajv = new Ajv.default();
  const validate = ajv.compile(schema);
  const isvalid = validate(responseBody);
  expect(isvalid).toBeTruthy();
});

test("Validate json resopnse with Schema2 ", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1",
  );
  const responseBody = await response.json();
  console.log(responseBody);

  const schema = {
    type: "object",

    properties: {
      userId: {
        type: "integer",
      },
      id: {
        type: "integer",
      },
      title: {
        type: "string",
      },
      body: {
        type: "string",
      },
    },
    required: ["body", "id", "title", "userId"],

    additionalProperties: false,
  };

  const ajv = new Ajv.default();
  const validate = ajv.compile(schema);
  const isvalid = validate(responseBody);
  expect(isvalid).toBeTruthy();
});
