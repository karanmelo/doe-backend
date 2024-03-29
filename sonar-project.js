/* eslint-disable @typescript-eslint/no-var-requires */
const propertiesReader = require('properties-reader');
const scanner = require('sonarqube-scanner');
const options = propertiesReader('./sonar-project.properties');

const properties = options._properties;
properties['sonar.login'] = 'admin';
properties['sonar.password'] = 'sonar';
scanner(
  {
    serverUrl: 'http://localhost:9000',
    options: properties,
  },
  () => process.exit(),
);
