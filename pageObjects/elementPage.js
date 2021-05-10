const { assert } = require('chai');
const {webdriver, Builder, By, Key, until} = require('selenium-webdriver');
//var webdriver = require('selenium-webdriver');
var config = require("../config")

let ElementPage;

ElementPage = function Element(driver) {
  this.driver = driver;
  this.url = config.urlUippQA2;
};

ElementPage.prototype.visit = function() {
  this.driver.get(this.url);
  return webdriver.promise.fulfilled(true);
};

ElementPage.prototype.weightEntryPresent = function() {
  return this.driver.isElementPresent(this.weightField);
};

ElementPage.prototype.weightEntryBlank = function() {
  return this.driver.findElement(this.weightField).getText();
};

ElementPage.prototype.view = function() {
    this.driver.get(this.url);
    return webdriver.promise.fulfilled(true);
};


ElementPage.prototype.elementClickId = function(object) {
    this.driver.sleep(1000).then(function(){
        assert.doesNotThrow(()=> {
            this.driver.findElement(By.id(object)).click();
        })
    })    
};

module.exports = ElementPage;