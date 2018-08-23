
const { Given, When, Then } = require('cucumber');
const githubExamplePage = require('../support/po/githubexample.page');

/**
 *  Open the githubUrl
 */
function openGithub() {
    browser.url(githubExamplePage.githubUrl);
}

Given(
    /^I am on the github page$/,
    openGithub
);

/**
 *  Find the github search input
 */
function waitforGithubSearch() {
    browser.waitForVisible(githubExamplePage.searchInput);
}

Given(
    /^I see the github search box$/,
    waitforGithubSearch
);

/**
 * Type into on github search input.
 * @param {string} arg1 argument from regex
 */
function searchGithubPage(arg1) {
    browser.click(githubExamplePage.searchInput);
    browser.clearElement(githubExamplePage.searchInput);
    browser.setValue(githubExamplePage.searchInput, arg1);
    browser.getValue(githubExamplePage.searchInput).should.equal(arg1);
    browser.pause(500);
}

When(
    /^I enter "([^"]*)" into the github search box$/,
    searchGithubPage
);

When(/^I hit the "([^"]*)" key$/, (arg1) => {
    browser.keys(arg1);
});

When(/^I pause for "([^"]*)" seconds$/, (arg1) => {
    const argMilliseconds = arg1 * 1000;
    const startpause = new Date().getTime();
    browser.pause(argMilliseconds);
    const stoppause = new Date().getTime();
    const pausetime = stoppause - startpause;
    const logtext = '---githubexaple.dsl--> Paused for: ';
    console.log(logtext + pausetime);
});

When(/^I goto the debug command$/, () => {
    const logNote = '---githubexaple.dsl-->  DEBUG ';
    const extendTimeout = 'to EXTENDTIMEOUT set timeout=999999';
    const timeoutFile = 'SET the timeout option in: wdio.conf.js';
    const timeoutCmd = 'CMD: yarn run wdio --cucumberOpts.timeout=999999';
    console.log(logNote);
    console.log(extendTimeout);
    console.log(timeoutFile);
    console.log(timeoutCmd);
    browser.debug();
});

/**
 * Check the list data on github page.
 * @returns {bool} Is the list displayed
 */
function checkGithubPage() {
    browser.pause(2000);
    browser.waitForVisible(githubExamplePage.resultsList);
    return browser.isVisible(githubExamplePage.resultsList).should.be.true;
}

Then(
    /^I should see a list of github search results$/,
    checkGithubPage
);
