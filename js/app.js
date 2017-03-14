'use strict';

var openHours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

var body = document.getElementsByTagName('body')[0];

function cookieShops (locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = minCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.cookiesEveryHour = cookiesEveryHour;
  this.totalDailySales = 0;
  this.custEveryHour = [];
};

var shopsOne = new cookieShops('1st and Pike', 23, 65, 6.3);
var shopsTwo = new cookieShops('SeaTac Airport', 3, 24, 1.2);
var shopsThree = new cookieShops('Seattle Center', 11, 38, 3.7);
var shopsFour = new cookieShops('Capitol Hill', 20, 38, 2.3);
var shopsFive = new cookieShops('Alki', 2, 16, 4.6);
var shopsObjects = [shopsOne, shopsTwo, shopsThree, shopsFour, shopsFive];
