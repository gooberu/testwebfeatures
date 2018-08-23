Setup Mobile testing with Appium and WebdriverIO
================================================

Appium acts like a selenium server to your webdriver test code.  Appium server connects to the accessablity port on a "mobile device".

Step-01 - INSTALL Appium locally on a Mac
-----------------------------------------

#. Requirements

    #. selenium_ - (use the one pulled in by webdriverIO)  
    #. Mozilla's geckodriver_ 
    #. Xcode_
    #. node_
    #. homebrew_
    #. android-studio_
    #. wdio-appium-service_

#. Installs on Mac
    #. npm install -g appium
    #. npm install -g appium-doctor (not required... but looks at all the configs)
    #. brew install carthage

#. Installs in project
    #. npm install wdio-appium-service --save-dev
    #. NOTE: you may have to "npm unlink chai-webdriverio" for above to install

#. wdio.conf.js ::

    port: 4723,
    ....
    services: ['selenium-stanalone', 'appium'],
    appium: {
        args: {
            address: '127.0.0.1',
            commandTimeout: '7200',
            sessionOverride: true,
            debugLogSpacing: true,
            platformVersion: '9.3',
            platformName: 'iOS',
            showIosLog: true,
            deviceName: 'iPhone 6s Plus',
            nativeInstrumentsLib: true,
            isolateSimDevice: true,
            udid: '1231231234',
            automationName: 'XCUITest',
            safariAllowPopups: true
        }
    },

#. package.json
    #. "wdio-appium-service": "~0.2.2"

#. Run "appium-doctor"


Resources
---------

#. selenium_
#. geckodriver_
#. Xcode_
#. node_
#. homebrew_
#. android-studio_
#. wdio-appium-service_
#. sauce-labs-platform-configuration_
#. klamping-wdio-workshop_
#. klamping-appium-webdriverio-video1_
#. klamping-appium-webdriverio-video2_

.. _selenium: http://selenium-release.storage.googleapis.com/index.html
.. _geckodriver: https://github.com/mozilla/geckodriver/releases
.. _Xcode: https://developer.apple.com/xcode/downloads/
.. _node: https://nodejs.org/en/#download
.. _homebrew: https://brew.sh/
.. _android-studio: https://developer.android.com/studio/index.html
.. _wdio-appium-service: https://www.npmjs.com/package/wdio-appium-service
.. _sauce-labs-platform-configuration: https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
.. _klamping-wdio-workshop: https://github.com/klamping/wdio-workshop/blob/master/exercises/1-installation.md
.. _klamping-appium-webdriverio-video1: https://www.youtube.com/watch?v=UYyzPNtA4dY
.. _klamping-appium-webdriverio-video2: https://www.youtube.com/watch?v=o99xOIRMqiQ