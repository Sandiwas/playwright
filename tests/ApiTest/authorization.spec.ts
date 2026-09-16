/*
1) No Auth (Public API)
2) Basic Auth
3) Bearer Token
4) API Key (in header or query)
*/
import { test, expect } from "@playwright/test";




test("Public API No Auth", async ({ request }) => {
  const noAuthresponse = await request.get("https://jsonplaceholder.typicode.com/posts/1",);
  const noAuthResponseBody = await noAuthresponse.json();
  expect(noAuthresponse.ok()).toBeTruthy();
  expect(noAuthresponse.status()).toBe(200);
  console.log(noAuthResponseBody);
});


test.only("Basic auth HTTPBin", async ({ request }) => {
    test.setTimeout(30000);
  const basicAuthresponse = await request.get("https://httpbin.org/basic-auth/user/pass",{headers: {Authorization:'Basic '+Buffer.from('user:pass').toString("base64")}});
  const basicAuthResponseBody = await basicAuthresponse.json();
  expect(basicAuthresponse.ok()).toBeTruthy();
  expect(basicAuthresponse.status()).toBe(200);
  console.log(basicAuthResponseBody);
  console.log(basicAuthresponse);

console.log(basicAuthresponse.status());
console.log(basicAuthresponse.statusText());
console.log(await basicAuthresponse.text());
});
test('Bearer Token Auth',async({request})=>{
const bearerToken="";
const bearerAuthResponse=await request.get('https://api.github.com/user',{headers:{Authorization:`Bearer ${bearerToken}`}})
const bearerTokenResponseBody=await bearerAuthResponse.json();
console.log(bearerTokenResponseBody);
expect(bearerAuthResponse.ok()).toBeTruthy();
expect(bearerAuthResponse.status()).toBe(200);

})

test('Bearer Token Auth Repository', async ({ request }) => {
const bearerToken="";
  const response = await request.get('https://api.github.com/user/repos', {
    headers: {
      Authorization: `Bearer ${bearerToken}`
    },
  });
  expect(response.status()).toBe(200);
  const data = await response.json();
  console.log(data);
});


test('Verify API Key Authentication',async({request})=>{
const apiKeyAuthResponse=await request.get('https://api.openweathermap.org/data/2.5/weather',{params:{q:'Pune',appid:'2e2c7f937c4b6cb993d40266bbd6a323'}})
const apiKeyAuthResponseBody=await apiKeyAuthResponse.json();
console.log(apiKeyAuthResponseBody);
expect(apiKeyAuthResponse.ok()).toBeTruthy();
expect(apiKeyAuthResponse.status()).toBe(200);
})

test('Verify API Key 2nd Authentication',async({request})=>{
const apiKeyAuthResponse=await request.get('http://api.weatherapi.com/v1/current.json',{params:{q:'Paris',key:'cb4c0b4eb964499a85755711263007'}})
const apiKeyAuthResponseBody=await apiKeyAuthResponse.json();
console.log(apiKeyAuthResponseBody);
expect(apiKeyAuthResponse.ok()).toBeTruthy();
expect(apiKeyAuthResponse.status()).toBe(200);
})


// email : wasekarsandip@gmail.com
// pass :Sandy10@10
///https://api.openweathermap.org/data/2.5/weather
//http://api.weatherapi.com/v1/current.json
