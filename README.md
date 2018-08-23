# testwebfeatures
Test Cucumber DSL for testwebapp

Quick Start
-----------

1. Clone the git repo — `git clone https://github.com/ctrees/drpfeature.git`

2. Install the dependencies 

```sh
$ yarn install
```

4. Run the tests

```sh
$ yarn run test
```

5. Build the documents

```sh
$ yarn run docs
```

Resouces
--------

1. This github [testwebfeatures](https://github.com/gooberu/testwebfeatures)
2. Target web application [testwebapp](https://github.com/gooberu/testwebapp)
3. Target mobile application [testscreens](https://github.com/gooberu/testscreens)


DSL Testing
===========

The objective of this repo is to maintain a red-green suite Domain Specfic Language (DSL) for the [goober testweb repos](https://github.com/gooberu).

Tests are written in [Gherkin syntax](https://cucumber.io/docs/reference). All test files are located in
`./src/features/*` and have the file ending `.feature`.  Below is 

__githubSeach.feature__
```gherkin
Feature: GooberU Github test
    As a Developer for a GooberU github repo
    I want to verify access to the GooberU-github repository
    So that I can use the GooberU-DSL to write tests

Scenario: open URL
    Given I open the url "https://github.com/gooberu/testwebfeatures"
    Then  I expect that the url is "https://github.com/gooberu/testwebfeaturs"
    And   I expect that the title is "GitHub - gooberu/testwebfeatures: Test Cucumber DSL for testwebapp"

Scenario: Another test
    Given ...

```

This test opens the browser and navigates them to google.com to check if the title contains the search
query after doing a search. As you can see, it is pretty simple and understandable for everyone.

# Configurations

To configure your tests, checkout the [`wdio.conf.js`](https://github.com/webdriverio/cucumber-boilerplate/blob/master/wdio.conf.js) file in your test directory. It comes with a bunch of documented options you can choose from.

## Environment-specific configurations

You can setup multiple configs for specific environments. Let's say you want to have a different `baseUrl` for
your local and pre-deploy tests. Use the `wdio.conf.js` to set all general configs (like mochaOpts) that don't change.
They act as default values. For each different environment you can create a new config with the following name
scheme:

```txt
wdio.<ENVIRONMENT>.conf.js
```

Now you can create a specific config for your pre-deploy tests:

__wdio.PageObjectTest.conf.js__
```js
const wdioConfig = require('./wdio.conf.js');

wdioConfig.config.capabilities = [{
    browserName: 'chrome',
}];
wdioConfig.config.logLevel = 'silent',
wdioConfig.config.baseUrl = 'https://localhost:3000/',
wdioConfig.config.specs = [ __dirname + '/src/pospecs/*.spec.js' ],
wdioConfig.config.services = ['selenium-standalone', 'visual-regression'];
wdioConfig.config.framework = 'mocha';

exports.config = wdioConfig.config;
```

Your environment-specific config file will get merged into the default config file and overwrites the values you set.
To run a test in a specific environment just add the desired configuration file as the first parameter:

```sh
$ yarn run wdio wdio.PageObjectTest.conf.js
```

# Running single feature
Sometimes its useful to only execute a single feature file, to do so use the following command:

```sh
$ yarn run wdio -- --spec ./test/features/githubSearch.feature
```


# Using tags

If you want to run only specific tests you can mark your features with tags. These tags will be placed before each feature like so:

```gherkin
@Tag
Feature: ...
```

To run only the tests with specific tag(s) use the `--cucumberOpts.tagExpression=` parameter like so:

```sh
$ yarn run wdio -- --cucumberOpts.tagExpression=@Tag,@AnotherTag
```

You can add multiple tags separated by a comma

