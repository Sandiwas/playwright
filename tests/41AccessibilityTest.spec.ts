/*
WCAG = web content accessibility guideline
1) Playwright can be used to test your application for many types of accessibility issues.
Examples:
    Missing or Improper ALT Text for Images
    Poor Color Contrast
    Missing Form Labels
    Keyboard Navigation Issues

Every website should follow WCAG guidelines.
    - Web Content Accessibility Guidelines (WCAG) 

Install @axe-core/playwright: 
    npm install @axe-core/playwright

https://www.npmjs.com/package/@axe-core/playwright

*/




import {test,expect} from "@playwright/test"
import AxeBuilder from "@axe-core/playwright"


test("Accessibility test",async({page},testInfo)=>{
await page.goto("https://demowebshop.tricentis.com/");
//await page.goto('https://www.w3.org/');

//1) Scanning detect all types of WCAG violations.
    const accessibilityAnalyaseResult=await new AxeBuilder({page}).analyze();
    console.log(accessibilityAnalyaseResult);

    //expect(accessibilityAnalyaseResult.violations.length).toEqual(0);
    //expect(accessibilityAnalyaseResult.violations.length).toEqual([]);

    //2) Scanning for few WCAG violations

    // const accessibilityCheckWithTags=await new AxeBuilder({page}).withTags(['wcaga2a','wcaga2aa','wcag21a','wcag21aa']).analyze();
    // console.log(accessibilityCheckWithTags);
    // expect(accessibilityCheckWithTags.violations.length).toEqual(0);


    //3) Scanning for fe WCAG violations with rules
    //const accessibilityCheckWithRule=await new AxeBuilder({page}).disableRules('duplicate-id').analyze();
    // console.log(accessibilityCheckWithRule);
    // expect(accessibilityCheckWithRule.violations.length).toEqual(0);
  
   //we can capture violation result in specific file and share those result with devloper 

     const accessibilityCheckWithRule=await new AxeBuilder({page}).disableRules('duplicate-id').analyze();

    await testInfo.attach('accessibility results',{
                                                    body :JSON.stringify(accessibilityCheckWithRule,null,2),
                                                    contentType:'application/json'
                                                    });

    console.log("Number of Violations:====>",accessibilityCheckWithRule.violations.length)
    expect(accessibilityCheckWithRule.violations.length).toEqual(0);
})

