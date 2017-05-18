const webdriver = require('selenium-webdriver');
const {By, until} = require('selenium-webdriver');
const assert = require('chai').assert;
const test = require('selenium-webdriver/testing');

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

const closeBrowser = () => {
    driver.quit();
};
// Load dependencies
test.describe('>>>>> END TO END TEST FOR BATTLE-GAME <<<<<<<<<', function () {
    let userCardValueBeforePlay,
        userCardValueAfterPlay,
        userCardTextBeforePlay,
        userCardTextAfterPlay,
        userCardBeforePlay,
        userCardAfterPlay,
        userCardImageStyle,
        userCardImageNewStyle;

    beforeEach(function (done) {
        this.timeout(3500); // A very long environment setup.
        setTimeout(done, 800);
    });

    test.it('+++Title should be "Battle-game"', () => {
// Go to URL
        driver.get('http:localhost:3000');
// Find title and assert
        driver.executeScript('return document.title').then((return_value) => {
            assert.equal(return_value, 'Battle-game')
        });

    });

    test.it('+++User should\'nt have the same value card once click has been triggered"', () => {
        userCardValueBeforePlay = driver.findElement(By.xpath("//*[@id='root']/div/div[1]/h2"));
        userCardValueBeforePlay.getText()
            .then((text) => {
                userCardTextBeforePlay = text;
            })

            .then(() => {
                driver.findElement(By.className("btn-play")).click();
                userCardValueAfterPlay = driver.findElement(By.xpath("//*[@id='root']/div/div[1]/h2"));
                userCardValueAfterPlay.getText()
                    .then((newText) => {
                        userCardTextAfterPlay = newText;
                    });

                assert.notEqual(userCardTextBeforePlay, userCardTextAfterPlay)
            });

    });

    test.it('+++User\'s card shouldn\'t be the same after calling the button play', () => {

        userCardBeforePlay = driver.findElement(By.xpath("//*[@id='root']/div/div[1]/div[4]"));
        userCardBeforePlay.getAttribute('style')
            .then((attr) => {
                userCardImageStyle = attr;
            });

        driver.findElement(By.className("btn-play")).click()

            .then(() => {
                userCardAfterPlay = driver.findElement(By.xpath("//*[@id='root']/div/div[1]/div[4]"));
                userCardAfterPlay.getAttribute('style')
                    .then((newAttr) => {
                        userCardImageNewStyle = newAttr;
                    });

                assert.notEqual(userCardImageStyle, userCardImageNewStyle)
            })

            .then(closeBrowser());
    });
});

