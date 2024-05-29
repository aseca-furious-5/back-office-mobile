exports.config = {
    runner: 'local',
    port: 4723,
    host: 'locahost',
    hostname: 'localhost',
    specs: [
        "./test_cases/*.ts"
    ],
    exclude: [
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 5,
        // appiumVersion: '1.22.3-4',
        // deviceName: 'emulator-5554',
        // app: '/home/jorgesuarez/WebstormProjects/back-office-mobile/back-office-mobile.apk',
        // automationName: 'UiAutomator2',
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:appiumVersion': '1.22.3-4',
        'appium:platformName': 'Android',
        'appium:automationName': 'UiAutomator2',
        //'appium:app': '/home/jorgesuarez/WebstormProjects/back-office-mobile/back-office-mobile.apk',
        'appium:appActivity': '.MainActivity',
        'appium:appPackage': 'com.jorgesuarezv.backofficemobile',
        'appium:ignoreHiddenApiPolicyError': true,
        'appium:noReset': true,
    }],

    logLevel: 'debug',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium', 'visual'],

    framework: 'mocha',
    
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    before: async function (capabilities, specs) {
        // Your global setup
        global.expect = (await import('chai')).expect;
    },
}
