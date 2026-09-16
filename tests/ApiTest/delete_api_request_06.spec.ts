/*
1) create new booking
2) get booking
3) update booking  ( token)
4) delete booking  (token)
*/

import { test, expect } from "@playwright/test";
import fs, { readFileSync } from "fs";

function readJson(jsonPath: string) {
  return JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
}

test("Delete booking (end to end ) ", async ({ request }) => {
  //1) create new booking
  const postRequestBody = readJson("testData/post_request_body.json");
  const postResponse = await request.post("/booking", {
    data: postRequestBody,
  });
  const postResponseBody = await postResponse.json();

  expect(postResponse.ok()).toBeTruthy();
  expect(postResponse.status()).toBe(200);

  console.log("POST  Booking details are .....................");
  console.log("post Resopnse Body : ", postResponseBody);
  const bookingId = await postResponseBody.bookingid;
  console.log("Booking id is ", bookingId);

  //2) get booking

  const getResponse = await request.get(`/booking/${bookingId}`);
  const getResponseBody = await getResponse.json();

  expect(getResponse.ok()).toBeTruthy();
  expect(getResponse.status()).toBe(200);
  console.log("GET Booking details are .....................");
  console.log("get respose body : ", getResponseBody);

  //3) update booking  ( token)

  //creating token

  const tokenRequestBody = readJson("testData/token_request_body.json");
  const tokenResponse = await request.post("/auth", { data: tokenRequestBody });
  const tokenResponseBody = await tokenResponse.json();
  const token = tokenResponseBody.token;

  console.log("TOKEN details are .....................");
  console.log("token is : ", token);
  console.log("token post request body : ", tokenResponseBody);

  //4)sending put request

  const putRequestBody = readJson("testData/put_request_body.json");
  const putResponse = await request.put(`/booking/${bookingId}`, {
    headers: { Cookie: `token=${token}` },
    data: putRequestBody,
  });
  const putResponseBody = await putResponse.json();
  console.log("PUT  Booking details are .....................");
  console.log("Put Response body  details are", putResponseBody);

  expect(putResponse.ok()).toBeTruthy();
  expect(putResponse.status()).toBe(200);

  //4) delete booking

  const deleteResponse = await request.delete(`/booking/${bookingId}`, {
    headers: { Cookie: `token=${token}` },
  });

  console.log("DELETE  Booking details are .....................");

  expect(deleteResponse.statusText()).toBe("Created");
  expect(deleteResponse.status()).toBe(201);

  const deleteResonseBody = await deleteResponse.text();
  expect(deleteResonseBody).toBe("Created");

  console.log("Booking are deleted successfully.....");
});
