testwebfeatures dev detail
==========================

Step-01 - Feature Test Setup - testwebfeatures-checkpoint-01_
-------------------------------------------------------------

The Feature Test Setup Step-01 intent is to just setup the framework for a simple feature test using webdriver-io, selenium and cucumber.

#. Create Feature Test Setup for testwebfeatures-checkpoint-01_

    #. Use webdriverio_ template
    #. Create cucumber based Domain Specific Language (DSL) GooberU UX language specific user tests in testweb-feature-tests_
    #. Verify the GooberU testwebapp_ UI / UX

#. Clone the webdriverio-cucumber-boilerplate_ to a template repo and cleanup::

    catmini:gooberu cat$ git clone https://github.com/webdriverio/cucumber-boilerplate.git testwebfeatures-template
    catmini:gooberu cat$ cd testwebfeatures-template/
    catmini:testwebfeatures-template cat$ yarn run clean

#. Pull the template structure into testwebfeatures::

    catmini:testwebfeatures cat$ cp -R ../testwebfeatures-template/src .
    catmini:testwebfeatures cat$ cp ../testwebfeatures-template/wdio.conf.js .
    catmini:testwebfeatures cat$ cp ../testwebfeatures-template/.babelrc .
    catmini:testwebfeatures cat$ cp ../testwebfeatures-template/.editorconfig .
    catmini:testwebfeatures cat$ cp ../testwebfeatures-template/.eslintrc.yaml .
    catmini:testwebfeatures cat$ cp ../testwebfeatures-template/.nvmrc .

#. Add src/features/githubSearch.feature test

#. Basic Repo File structure::

    catmini:testwebfeatures cat$ tree -L 2
    .
    ├── README.md
    ├── docs
    │   ├── Makefile
    │   ├── build
    │   ├── make.bat
    │   └── source
    ├── package.json
    ├── src
    │   ├── features
    │   ├── steps
    │   └── support
    └── wdio.conf.js

    7 directories, 5 files

#. Basic Install and Test::

    catmini:testwebfeatures cat$ yarn install
    yarn install v1.9.4
    info No lockfile found.
    [1/4] 🔍  Resolving packages...
    warning jest > jest-cli > istanbul-api > istanbul-lib-hook@1.2.1: 1.2.0 should have been a major version bump
    [2/4] 🚚  Fetching packages...
    [-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------] 0/841(node:10031) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
    [3/4] 🔗  Linking dependencies...
    warning " > eslint-config-airbnb-base@13.0.0" has incorrect peer dependency "eslint@^4.19.1".
    [4/4] 📃  Building fresh packages...
    success Saved lockfile.
    ✨  Done in 40.97s.
    catmini:testwebfeatures cat$ yarn run wdio
    yarn run v1.9.4
    $ /Users/cat/gooberu/testwebfeatures/node_modules/.bin/wdio
    (node:10356) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
    ------------------------------------------------------------------
    [chrome #0-0] Session ID: fba9578c6a4961bc42a6e2e77c221fda
    [chrome #0-0] Spec: /Users/cat/gooberu/testwebfeatures/src/features/githubSearch.feature
    [chrome #0-0] Running: chrome
    [chrome #0-0]
    [chrome #0-0] Github test
    [chrome #0-0]
    [chrome #0-0]     open URL
    [chrome #0-0]       ✓ I open the url "https://github.com/"
    [chrome #0-0]       ✓ I expect the url to contain "github.com"
    [chrome #0-0]       ✓ I expect that the title is "The world’s leading software development platform · GitHub"
    [chrome #0-0]
    [chrome #0-0]         search for webdriverio repository
    [chrome #0-0]           ✓ I open the url "https://github.com/search"
    [chrome #0-0]           ✓ the element "[placeholder='Search GitHub']" not contains any text
    [chrome #0-0]           ✓ I add "webdriverio" to the inputfield "[placeholder='Search GitHub']"
    [chrome #0-0]           ✓ I press "Space"
    [chrome #0-0]           ✓ I add "selenium" to the inputfield "[placeholder='Search GitHub']"
    [chrome #0-0]           ✓ I press "Enter"
    [chrome #0-0]           ✓ I expect that element ".header-search-input" contains the text "webdriverio selenium"
    [chrome #0-0]           ✓ I expect that element ".repo-list-item:first-child" contains the text "A Node.js bindings implementation for the W3C WebDriver protocol"
    [chrome #0-0]
    [chrome #0-0]
    [chrome #0-0] 11 passing (7s)
    [chrome #0-0]

    ✨  Done in 15.48s.
    catmini:testwebfeatures cat$

#. Setup and run a local dev testwebapp_ repo::

    catmini:gooberu cat$ cd testwebapp/
    catmini:testwebapp cat$ yarn start

#. Browse to http://localhost:3000/ to verify testwebapp-dev-test-site_ is running

#. Create and debug src/features/testwebapp-ux-po-landingPage.feature test

    #. Create src/features/testwebapp-ux-po-taskPage.feature text
    #. catmini:testwebfeatures cat$ yarn run wdio
    #. Had issues with Scenario Outline format - https://github.com/webdriverio/cucumber-boilerplate/issues/18
    #. Got it working

#. Setup for pageobject based githubexample.dsl.js css mapping

    #. Create src/support/po directory
    #. Create src/support/po/page.js - This is the page generic
    #. Create src/support/po/githubexample.page.js - This is the DSL key to CSS locator transform
    #. Create src/steps/githubexample.dsl.js - This is the Cucumber Language to WebdriverIO using github DSL regex feature file processor
    #. Create src/features/githubexample-po.feature - This is the cucumber github DSL feature test

#. Debugging and test

    #. To run JUST a single feature:: 

        catmini:testwebfeatures cat$ yarn run wdio --spec ./src/features/githubexample-po.feature
    
    #. Tag tests to run put "@WIP" before the "Feature:" in the somefeature.feature file::

        @WIP
        Feature: Performing a github Search

            As a user on the github search page
            I want to search for WebdriverIO
            Because I want to learn more about it
    
    #. Then run test with tagExpression option::

        catmini:testwebfeatures cat$ yarn run wdio --cucumberOpts.tagExpression=@WIP

    #. Chrome Developer Tools - things used to debug pageobjects development
        #. Find input in Console::

             $('input[placeholder="Search or jump to…"]')

        #. Edit HTML - right click HTML in Elements tab then select "Edit as HTML"
        #. Break on DOM events - click on HTML in Elements then click on the "..." and set "Break on" event
        #. Break on CODE - click on linenumber in Sources will set a breakpoint and it will show up in the right menu under "Breakpoints"

    #. Create a debug pause statement in DSL::

        And I pause for "3" seconds
        And I goto the debug command

    #. Test make sure they work then comment them out but leave as example.

#. Add and Test githubexample-po feature verification
    #. Create src/features/githubexample-po.feature page object based test file

        .. literalinclude:: ../../src/features/githubexample-po.feature
           :language: gherkin
           :linenos:

    #. Create the related DSL src/steps/githubexample.dsl.js that translates the feature into page-object calls

        .. literalinclude:: ../../src/steps/githubexample.dsl.js
           :language: javascript
           :linenos:

    #. Create the related page object src/support/po/githubexample.page.js that mapps the dsl to page specific objects

        .. literalinclude:: ../../src/support/po/githubexample.page.js
           :language: javascript
           :linenos:

    #. Make it work
        #. yarn run wdio --spec ./src/features/githubexample-po.feature 
        #. Fix and repeat untill success ::

            catmini:testwebfeatures cat$ yarn run wdio --spec ./src/features/githubexample-po.feature
            yarn run v1.9.4
            $ /Users/cat/gooberu/testwebfeatures/node_modules/.bin/wdio --spec ./src/features/githubexample-po.feature
            (node:22200) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
            ------------------------------------------------------------------
            [chrome #0-0] Session ID: 50151ac4cc1712cefb414ce798497404
            [chrome #0-0] Spec: /Users/cat/gooberu/testwebfeatures/src/features/githubexample-po.feature
            [chrome #0-0] Running: chrome
            [chrome #0-0]
            [chrome #0-0] Performing a github Search
            [chrome #0-0]
            [chrome #0-0]     Performing a github search
            [chrome #0-0]       ✓ I am on the github page
            [chrome #0-0]       ✓ I see the github search box
            [chrome #0-0]       ✓ I enter "webdriverIO" into the github search box
            [chrome #0-0]       ✓ I hit the "Return" key
            [chrome #0-0]       ✓ I should see a list of github search results
            [chrome #0-0]
            [chrome #0-0]
            [chrome #0-0] 5 passing (8s)
            [chrome #0-0]

            ✨  Done in 11.60s.
            catmini:testwebfeatures cat$ 

#. Replicate the page object pattern for src/features/testwebapp-ux-subjectsPage.feature

#. Verify working status via "yarn run wdio"

        .. literalinclude:: ./testwebfeatures-dev-detail-step01-success-output.txt
           :language: bash


#. Produce testwebfeatures-checkpoint-01_ Feature Test Setup ::

    macci:testwebfeatures cat$ cd ~/bast23/testwebfeatures/docs
    macci:docs cat$ vi source/testwebfeatures-dev-detail.rst (update doc)
    macci:docs cat$ vi source/conf.py (Bump minor version to X.X.NN to match checkpoint-01)
    macci:docs cat$ make html 
    macci:docs cat$ open build/html/index.html (verify docs)
    macci:testwebfeatures cat$ cd ~/bast23/testwebfeatures
    macci:testwebfeatures cat$ git add *
    macci:testwebfeatures cat$ git commit -m "commit for testwebfeatures-checkpoint-01 - Feature Test Setup"
    macci:testwebfeatures cat$ git tag testwebfeatures-checkpoint-01
    macci:testwebfeatures cat$ git push
    macci:testwebfeatures cat$ git push origin testwebfeatures-checkpoint-01
    
#. Verify checkpoint testwebfeatures-checkpoint-01_


Resources
---------

#. ReadTheDocs site: readthedocs_
#. ReadTheDocs demo files: 2cld-readthedocs-demo_
#. DSL test template: webdriverio-cucumber-boilerplate_
#. webdriverio: webdriverio_
#. GooberU testwebapp DSL feature tests: testweb-feature-tests_
#. GooberU testwebapp dev test url: testwebapp-dev-test-site_
#. GooberU testwebapp top page object source: testwebapp-src-app-layout-app_
#. W3C webdriver keyboard actions: w3c-webdriver-keyboard-actions_
#. ESLint valid JSDoc comments: eslint-valid-jsdoc_
#. ESLint require JSDoc comments: eslint-require-jsdoc_

.. _testwebfeatures-checkpoint-NN: https://github.com/gooberu/testwebfeatures
.. _testwebfeatures-checkpoint-01: https://github.com/gooberu/testwebfeatures/tree/testwebfeatures-checkpoint-01

.. _readthedocs: https://readthedocs.org/
.. _2cld-readthedocs-demo: https://github.com/2cld/readthedocsdemo
.. _webdriverio-cucumber-boilerplate: https://github.com/webdriverio/cucumber-boilerplate
.. _webdriverio: http://webdriver.io/
.. _testweb-feature-tests: https://github.com/gooberu/testwebfeatures/src/features
.. _testwebapp: https://github.com/gooberu/testwebapp
.. _testwebapp-dev-test-site: http://localhost:3000/
.. _testwebapp-src-app-layout-app: https://github.com/gooberu/testwebapp/blob/master/src/app/layout/App.jsx
.. _w3c-webdriver-keyboard-actions: https://w3c.github.io/webdriver/#keyboard-actions
.. _eslint-valid-jsdoc: https://eslint.org/docs/rules/valid-jsdoc
.. _eslint-require-jsdoc: https://eslint.org/docs/rules/require-jsdoc