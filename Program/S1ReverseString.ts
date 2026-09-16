const str = "Playwright";

let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str.charAt(i);
    //reverse += str[i];
}

console.log(reverse);