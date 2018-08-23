/* github Example PageObject */

const Page = require('./page');

const githubExamplePage = Object.create(Page, {

    /*
     * github example Template
     */

    // $name:  { get: function () { return browser.element('$selector'); } },
    // $name:  { value: '$value' },

    githubPageTitle: { value: 'github' },
    githubUrl: { value: 'https://www.github.com/' },
    searchInput: { value: 'input[placeholder="Search GitHub"]' },
    searchButton: { value: 'div[aria-label="webdriverio"]' },
    resultsList: { value: 'ul[class="repo-list"]' },

});

module.exports = githubExamplePage;
