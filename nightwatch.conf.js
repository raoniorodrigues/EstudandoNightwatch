require('babel-core/register')

const chromedriver = require('chromedriver');
require('geckodriver');

const testUrl = 'http://zombie-web:5000/'
const defaultTimeout = 14000
module.exports = {
    src_folders: ['tests'],

    page_objects_path: './pages',
    globals_path: './hooks/globals.js',

    webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 9515
    },
    test_workers: {
        enabled: false,
        workers: 4
    },

    test_settings: {
        default: {
            launch_url: testUrl,
            globals: {
                waitForConditionTimeout: defaultTimeout //Timeout Global
            },
            desiredCapabilities: {
                browserName: "chrome"
            }
        },
        headless:{
            launch_url: testUrl,
            globals: {
                waitForConditionTimeout: defaultTimeout //Timeout Global
            },
            desiredCapabilities: {
                browserName: "chrome",
                chromeOptions:{
                    w3c: false,
                    args:['--headless', 'no-sandbox']
                }
            }
        },


        firefox: {
            launch_url: testUrl,
            globals: {
                waitForConditionTimeout: defaultTimeout //Timeout Global
            },
            webdriver: {
                start_process: true,
                server_path: '.\\node_modules\\.bin\\geckodriver.cmd',
                port: 4444
            },
            desiredCapabilities: {
                browserName: "firefox",
                acceptInsecureCerts: true
            }            
        },




        stage: {
            launch_url: "http://www.stage.zombieplus.com/"
        }
    }
}