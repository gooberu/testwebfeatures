
const { Given, When, Then } = require('cucumber');
const subjectsPage = require('../support/po/subjects.page');

/*
subjectsPageTitle: { value: 'subjects' },
subjectsTabSelector: { value: 'a[href="/subjects"]' },
subjectsUrl: { value: 'subjects' },
searchInput: { value: 'input[placeholder="GooberU a Subject..."]' },
resultsList: { value: 'div[class="ui segments"]' },
*/

Given(
    /^I am on the GooberU site "([^"]*)" page$/, (arg1) => {
        // browser.debug();
        browser.pause(500);
        browser.url(arg1);
        // browser.click(subjectsPage.subjectsTabSelector);
        browser.pause(500);
        // browser.debug();
    }
);

Then(
    /^I see the GooberU Subject search box$/, () => {
        // console.log(subjectsPage.searchInput);
        browser.isVisibleWithinViewport('Subject List');
    }
);

When(
    /^I enter "([^"]*)" into the GooberU search box$/, (arg1) => {
        // browser.debug();
        // browser.clearElement(subjectsPage.searchInput);
        // browser.setValue('input', arg1);
        // browser.getValue('input').should.equal(arg1);
        console.log(arg1);
        browser.pause(500);
    }
);

Then(
    /^I should see a list of GooberU search results$/, () => {
        browser.isVisibleWithinViewport(subjectsPage.resultsList);
        browser.pause(500);
    }
);
