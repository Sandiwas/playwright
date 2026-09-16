import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { DateTime } from "luxon";
import { json } from "node:stream/consumers";
test("create post request using faker data", async ({ request }) => {
  const firstname = faker.person.firstName();
  const lastname = faker.person.lastName();
  const totalprice = faker.number.int({ min: 100, max: 5000 });
  const depositpaid = faker.datatype.boolean();

  const checkinDate = DateTime.now().toFormat("yyyy-MM-dd");
  const checkoutDate = DateTime.now().plus({ day: 5 }).toFormat("yyyy-MM-dd");
  const additionalneeds = "Breakfast";

  const requestBody = {
    firstname: firstname,
    lastname: lastname,
    totalprice: totalprice,
    depositpaid: depositpaid,
    bookingdates: {
      checkin: checkinDate,
      checkout: checkoutDate,
    },
    additionalneeds: additionalneeds,
  };

  // send post request
  const response:any = await request.post("/booking", { data: requestBody });
  const resposeBody:any = await response.json();

  //validate status
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  //validate response body attributes
  expect(resposeBody).toHaveProperty("bookingid");
  expect(resposeBody).toHaveProperty("booking");
  expect(resposeBody).toHaveProperty("booking.additionalneeds");
  expect(resposeBody).toHaveProperty("booking.firstname");
  expect(resposeBody).toHaveProperty("booking.lastname");
  expect(resposeBody).toHaveProperty("booking.totalprice");
  expect(resposeBody).toHaveProperty("booking.depositpaid");
    expect(resposeBody).toHaveProperty("booking.bookingdates");
  expect(resposeBody).toHaveProperty("booking.bookingdates.checkin");
  expect(resposeBody).toHaveProperty("booking.bookingdates.checkout");

  //validate bookingid has vallue
  expect(resposeBody.bookingid).toBeDefined();

  //validate booking details
  const booking = resposeBody.booking;
  expect(booking).toMatchObject({
    firstname: booking.firstname,
    lastname: booking.lastname,
    totalprice: booking.totalprice,
    depositpaid: booking.depositpaid,
    additionalneeds: booking.additionalneeds,
  });

  //validate booking dates (nested json object)
  const bookingdates = resposeBody.booking.bookingdates;
  expect(bookingdates).toMatchObject({
    checkin: requestBody.bookingdates.checkin,
    checkout: requestBody.bookingdates.checkout,
  });
});
