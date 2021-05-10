const {Builder, By, until} = require('selenium-webdriver');
var assert = require('assert');
var selenium = require('selenium-webdriver');
var driver;

var ElementPage = require('../pageObjects/elementPage');
var elementPage;

const timeOut = 15000;

const locator = require('../util/locator');

const searchLinkEntrar = locator.searchLinkEntrar;
const searchFieldLogin = locator.searchFieldLogin;
const searchButtonContinue = locator.searchButtonContinue;
const searchFieldPassword = locator.searchFieldPassword;
const searchButtonEntrar = locator.searchButtonEntrar;


describe('calculating weights', function() {
    beforeEach(function() {
      this.timeout(timeOut);
      driver = new Builder().
        forBrowser('firefox').
        build();
        elementPage = new ElementPage(driver);
        //elementPage.view();
    });
   
    afterEach(function() {
      driver.quit();
    });
   
    xit('calculates weights', function() {
        elementPage.weightEntryPresent().then(function(weight) {
        assert.equal(weight, true, "Weight entry not possible");
      });
    });


    it('Entrando na tela de Login', function() {
        elementPage.elementClickId(searchLinkEntrar);

    });
   
    xit('provides no default weight', function() {
        elementPage.weightEntryBlank().then(function(weight) {
        assert.equal(weight, '', "Weight started with values");
      });
    });
  });
  
  