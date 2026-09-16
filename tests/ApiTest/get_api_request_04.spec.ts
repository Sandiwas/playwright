import { expect, test } from "@playwright/test";

test("get booking details using id -path params", async ({ request }) => {
  const bookingId = 1;
  const response = await request.get(`/booking/${bookingId}`);
  const responseBody = await response.json();

  console.log(responseBody);

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  expect(responseBody).toHaveProperty("firstname");
  expect(responseBody).toHaveProperty("lastname");
  expect(responseBody).toHaveProperty("totalprice");
  expect(responseBody).toHaveProperty("bookingdates");
  expect(responseBody).toHaveProperty("additionalneeds");

  expect(responseBody).toHaveProperty("bookingdates.checkin");
  expect(responseBody).toHaveProperty("bookingdates.checkout");
});


test("get booking details using Name -path params", async ({ request }) => {
  const firstname = "Jim";
  const lastname = "Brown";
  const response = await request.get('/booking',{params:{firstname,lastname}});
  const responseBody = await response.json();
  console.log(response);
  console.log(responseBody);

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  for(const item of responseBody){
    console.log("item name : ",item);
    console.log("item length :",item.lenght)
    console.log("Type of iteam :",typeof item.bookingid)

    expect(item).toHaveProperty('bookingid');
    expect(item.bookingid).toBeGreaterThan(0);
    expect(typeof item.bookingid).toBe('number');
  }
});


test.only("get booking details using Name -path params2", async ({ request }) => {
  // const firstname = "Jim";
  // const lastname = "Brown";
  const response = await request.get('/booking',{params:{firstname:'Jim',lastname:'Brown'}});
  const responseBody = await response.json();
  console.log(response);
  console.log(responseBody);

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  for(const item of responseBody){
    console.log("item name : ",item);
    console.log("item length :",item.lenght)
    console.log("Type of iteam :",typeof item.bookingid)

    expect(item).toHaveProperty('bookingid');
    expect(item.bookingid).toBeGreaterThan(0);
    expect(typeof item.bookingid).toBe('number');
  }
});


