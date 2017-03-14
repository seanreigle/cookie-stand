'use strict';

var total = 0;

function cookieShops (locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.locationName = locationName,
  this.minCustPerHour = minCustperHour,
  this.maxCustPerHour = minCustPerHour,
  this.avgCookiesperCust = avgCookiesperCust,
  this.cookiesEveryHour = cookiesEveryHour,
  this.totalDailySales = 0,
  this.custEveryHour = [];
};

var shopsOne = new cookieShops('1st and Pike', 23, 65, 6.3);
var shopsTwo = new cookieShops('SeaTac Airport', 3, 24, 1.2);
var shopsThree = new cookieShops('Seattle Center', 11, 38, 3.7);
var shopsFour = new cookieShops('Capitol Hill', 20, 38, 2.3);
var shopsFive = new cookieShops('Alki', 2, 16, 4.6);
var shopsObjects = [shopsOne, shopsTwo, shopsThree, shopsFour, shopsFive];
