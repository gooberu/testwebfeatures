/* subjects PageObject */

const Page = require('./page');

const subjectsPage = Object.create(Page, {

    /*
     * subjects example Template
     */

    // $name:  { get: function () { return browser.element('$selector'); } },
    // $name:  { value: '$value' },

    subjectsPageTitle: { value: 'subjects' },
    subjectsTabSelector: { value: 'a[href="/subjects"]' },
    subjectsUrl: { value: 'subjects' },
    searchInput: { value: 'input[placeholder="GooberU a Subject..."]' },
    resultsList: { value: 'div[class="ui segments"]' },

});

module.exports = subjectsPage;
