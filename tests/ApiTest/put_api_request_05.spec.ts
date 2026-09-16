import { expect, test } from "@playwright/test";
import fs from "fs";

function readjson(filePath: string) {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

test("update booking {put}", async ({ request }) => {
  const postRequestBody: any = readjson("testData/post_request_body.json");

  const postResponse = await request.post("/booking", { data: postRequestBody });
  const postResponseBody = await postResponse.json();
  console.log(postResponse);
  console.log(postResponseBody);

  expect(postResponse.ok()).toBeTruthy();
  expect(postResponse.status()).toBe(200);

  const bookingid = await postResponseBody.bookingid;
  console.log("Booking id is :", bookingid);


  const getResponse=await request.get(`/booking/${bookingid}`)
  const getResponseBody=await getResponse.json();
  console.log(getResponseBody);


const tokenRequestBody=readjson('testData/token_request_body.json')
const tokenResponse = await request.post("/auth", { data: tokenRequestBody });
const tokenResponseBody = await tokenResponse.json();

const token=await tokenResponseBody.token;
console.log('token : ', token)



const putRequestBody=readjson('testData/put_request_body.json')
const putResponse= await request.put(`/booking/${bookingid}`,
                                            {
                                            headers:{"Cookie":`token=${token}`}
                                            ,data:putRequestBody
                                        }
                                    );
const putResponseBody=await putResponse.json();

expect(putResponse.status()).toBe(200);
expect(putResponse.ok()).toBeTruthy();

console.log(putRequestBody);

                                        

});


