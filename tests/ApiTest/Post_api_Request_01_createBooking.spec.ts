import { test, expect } from "@playwright/test";
/*
    Test: create booking
    Request type: Post
    Request body: static

    Add url to playwright.config.ts file
        baseURL: 'https://restful-booker.herokuapp.com'
    */

test("create post request using static body", async ({ request }) => {
  const requestBody: any ={
    firstname: "Jim",
    lastname: "Brown",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2019-01-01",
    },
    additionalneeds: "Breakfast",
  }

  // send post request
  const response = await request.post("/booking", { data: requestBody });

  // Extractred response body
  const responseBody = await response.json(); // Extractred response body

  //print response Body
  console.log(responseBody);

  //validate status
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

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

      //validate booking details
  const booking = responseBody.booking;

  expect(booking).toMatchObject({
    firstname: "Jim",
    lastname: "Brown",
    totalprice: 111,
    depositpaid: true,
    additionalneeds: "Breakfast",
  });


      //validate booking dates (nested json object)
  expect(booking.bookingdates).toMatchObject({
    checkin: "2018-01-01",
    checkout: "2019-01-01",
  });
});
