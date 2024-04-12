const puppeteer = require('puppeteer');


export default async function scrapeContent({ url }: { url: string }) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Hämtar alla h1
    const headings = await page.evaluate(() => Array.from(document.querySelectorAll('h1'), element => element.textContent));

    // Hämtar alla p
    const text = await page.evaluate(() => Array.from(document.querySelectorAll('p'), element => element.innerText));

    console.log('Paragraphs:', text);
    console.log('Headings:', headings);

    await browser.close();

    return (

        <div>
            <p >{headings}</p>
            <p >{text}</p>
        </div>
    )
}

// Lägg en länk här
