import { test } from "@jest/globals"
import { describe } from "yargs"

const { Builder, Capabilities, By } = require ("selenium-webdriver")

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('https://vendor.fassnotary.com/')
});

afterAll(async () => {
    await driver.quit()
});

describe('Bot functionality', ()=> {

    test('Grab the FASS number', async () =>  {
        let fassNumber = await driver.findElement(By.class('mainMenu_1 mainMenuLink mainMenu_3')) 
        fassNumber.click()
        
    })
})


