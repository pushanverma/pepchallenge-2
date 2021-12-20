const request = require('request');
// feature -> request
console.log("Before");
request('https://en.wikipedia.org/wiki/P', cb);

const puppeteer =require("puppeteer");
let page;
// console.log("Before");
const browserOpenpromise =puppeteer.launch({args: [
    '--incognito',
  ],
headless:false , executablePath:'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'} );

browserOpenpromise.then(function(browser)
{
    //currently opened tabs 
    const pagesArrpromise =browser.pages();
    return pagesArrpromise;
}).then(function(browserPages)
{
    page=browserPages[0];
    let gotoPromise =page.goto("https://www.google.com/");
    return gotoPromise;
})

// .then(function()
// {
//     console.log("reached google page");
// })
// .catch(function(err)
// {
//     console.log(err);
// })


.then(function()
{
    //waiting for the element to appear on the page
    let elementWaitPromise =page.waitForSelector("input[type='text']",{visible :true});
    return elementWaitPromise;
})
.then(function()
{
    console.log("reached google home page");
    let keysWillBeSendPromise =page.type("input[type='text']" ,"wikipedia");
    return keysWillBeSendPromise;
})

.then(function()
{
    let enterWillBePressed=page.keyboard.press("Enter");
    return enterWillBePressed;
}).then(function()
{
    let elementWaitpromise =page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", {visible:true});
    return elementWaitpromise;
}).then(function () {
    
    let elementClickpromise =page.click("h3.LC20lb.MBeuO.DKV0Md");
    return elementClickpromise;
}).then(function()
{
    let elementWaitpromise =page.waitForSelector("a#js-link-box-en", {visible:true});
    return elementWaitpromise;
}).then(function () {
    
    let elementClickpromise =page.click("a#js-link-box-en");
    return elementClickpromise;
}).then(function()
{
    let elementWaitpromise =page.waitForSelector("a[title='Wikipedia:Contents/Portals']", {visible:true});
    return elementWaitpromise;
}).then(function () 
{ 
    let elementClickpromise =page.click("a[title='Wikipedia:Contents/Portals']");
    return elementClickpromise;
}).then(function()
{
    let elementWaitpromise =page.waitForSelector("a[title='Wikipedia:Contents/A–Z index']", {visible:true});
    return elementWaitpromise;
}).then(function () 
{ 
    let elementClickpromise =page.click("a[title='Wikipedia:Contents/A–Z index']");
    return elementClickpromise;
}).then(function()
{
    let elementWaitpromise =page.waitForSelector("a[title='Special:AllPages/P']", {visible:true});
    return elementWaitpromise;
}).then(function () 
{ 
    let elementClickpromise =page.click("a[title='Special:AllPages/P']");
    return elementClickpromise;
}).then(function()
{
    let elementWaitpromise =page.waitForSelector("a[title='P']", {visible:true});
    return elementWaitpromise;
}).then(function () 
{ 
    let elementClickpromise =page.click("a[title='P']");
    return elementClickpromise;
})

.catch(function(err)
{
    console.log(err);
})

console.log("After")
console.log("After")
function cb(error, response, html) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:',response&&response.statusCode); // Print the response status code if a response was received
    console.log('html:', html); // Print the HTML for the Google homepage.
}
