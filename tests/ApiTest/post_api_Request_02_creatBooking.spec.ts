import { test, expect } from "@playwright/test";
import fs from "fs";

// function getjsonFile(){{
//     const jsonPath='testData/post_request_body.json';
// return JSON.parse(fs.readFileSync('jsonPath','utf-8'))
// }

test("create post request using json file", async ({ request }) => {
  const jsonPath = "testData/post_request_body.json";
  
  const requestBody: any = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
  const resopnse = await request.post("/booking", { data: requestBody });
  
  console.log(resopnse);
  
  const responseBody = await resopnse.json();
  console.log(responseBody);

  expect(resopnse.status()).toBe(200);
  expect(resopnse.ok()).toBeTruthy();

  //validate response body attributes
  expect(responseBody).toHaveProperty("bookingid");
  expect(responseBody).toHaveProperty("booking");
  expect(responseBody).toHaveProperty("booking.additionalneeds");
  expect(responseBody).toHaveProperty("booking.firstname");
  expect(responseBody).toHaveProperty("booking.lastname");
  expect(responseBody).toHaveProperty("booking.depositpaid");
  expect(responseBody).toHaveProperty("booking.bookingdates");
  expect(responseBody).toHaveProperty("booking.bookingdates.checkin");
  expect(responseBody).toHaveProperty("booking.bookingdates.checkout");

  expect(responseBody.bookingid).toBeDefined();
  expect(responseBody.bookingid).toEqual(expect.any(Number));
  expect(typeof responseBody.bookingid).toBe("number");

  const booking: any = responseBody.booking;

  expect(booking).toMatchObject({
    firstname: requestBody.firstname,
    lastname: requestBody.lastname,
    totalprice: requestBody.totalprice,
    depositpaid: requestBody.depositpaid,
    additionalneeds: requestBody.additionalneeds,
  });

  const bookingdates = responseBody.booking.bookingdates;

  //validate booking dates (nested json object)
  expect(bookingdates).toMatchObject({
    checkin: requestBody.bookingdates.checkin,
    checkout: requestBody.bookingdates.checkout,
  });
});
