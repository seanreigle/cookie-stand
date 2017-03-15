'use strict';

var storeHours = ['6am','7am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Total'];

var body = document.getElementsByTagName('body')[0];

function cookieShops (minCust, maxCust, avgCookie, name) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.name = name;
  this.salesArray = [];

  this.randCust = function() {
    return Math.floor (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };

  this.cookieSales = function() {
    var total = 0;
    for (var i = 0; i < storeHours.length - 1; i++) {
      var salesPerhour = Math.floor(this.randCust() * this.avgCookie);
      this.salesArray.push(salesPerhour);
      total += salesPerhour;
    }
    this.salesArray.push(total);
  };

  this.createListItems = function(){
    var newHeading = document.createElement('h2');
    body.appendChild(newHeading);
    newHeading.innerText = this.name;
    var newUL = document.createElement('ul');
    for (var i = 0; i < storeHours.length; i++) {
      var newLI = document.createElement('li');
      newLI.innerText = storeHours[i] + ': ' + this.salesArray[i] + ' cookies';
      newUL.appendChild(newLI);
    }
    body.appendChild(newUL);
  };
};

this.cookiesTable = function() {
  var table = document.createElement('table');
  body.appendChild(table);
  var tableRow = document.createElement('tr');
  table.appendChild(table);
  var tableHeader = document.createElement('th');
  tableRow.appendChild(tableHeader);
  var tableCells = document.createElement('th');
  tableCells.innerText = 'hours[i]';
  for (var i = 0; i < storeHours.length + 1; i++)
    var headerCells = document.createElement('th');

};

var shopsOne = new cookieShops(23, 65, 6.3,'1st and Pike');
var shopsTwo = new cookieShops(3, 24, 1.2,'SeaTac Airport');
var shopsThree = new cookieShops(11, 38, 3.7,'Seattle Center');
var shopsFour = new cookieShops(20, 38, 2.3,'Capitol Hill');
var shopsFive = new cookieShops(2, 16, 4.6,'Alki');
