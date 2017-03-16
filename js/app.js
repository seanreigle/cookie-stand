'use strict';

var storeHours = ['6am','7am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Total'];
var body = document.getElementsByTagName('body')[0];
var allStores = [];

var shopsOne = new cookieShops(23, 65, 6.3,'1st and Pike');
var shopsTwo = new cookieShops(3, 24, 1.2,'SeaTac Airport');
var shopsThree = new cookieShops(11, 38, 3.7,'Seattle Center');
var shopsFour = new cookieShops(20, 38, 2.3,'Capitol Hill');
var shopsFive = new cookieShops(2, 16, 4.6,'Alki');

function cookieShops (minCust, maxCust, avgCookie, name) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.name = name;
  this.total = 0;
  this.salesArray = [];
  this.custPerHour = function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };

  this.cookieSales = function() {
    for (var i = 0; i < storeHours.length - 1; i++) {
      var salesPerHour = Math.floor(this.custPerHour() * this.avgCookie);
      this.salesArray.push(salesPerHour);
      this.total += salesPerHour;
    }
  };

  this.generateTableRow = function() {
    this.cookieSales();
    var table = document.getElementsByTagName('table')[0];
    var tRow = document.createElement('tr');
    var tableBody = document.getElementById('table-body');
    tableBody.appendChild(tRow);
    var nameTD = document.createElement('th');
    nameTD.innerText = this.name;
    tRow.appendChild(nameTD);
    var total = document.createElement('td');
    total.innerText = this.total;
    tRow.appendChild(total);
    for (var i = 0; i < storeHours.length - 1; i++) {
      var nameTD = document.createElement('td');
      nameTD.innerText = this.salesArray[i];
      tRow.appendChild(nameTD);
    }
  };
  allStores.push(this);
}

function createTable() {
  var table = document.createElement('table');
  body.appendChild(table);
  var tableHead = document.createElement('thead');
  table.appendChild(tableHead);
  var tRow = document.createElement('tr');
  tableHead.appendChild(tRow);
  var th = document.createElement('th');
  tRow.appendChild(th);
  for (var i = 0; i < storeHours.length; i++) {
    var th = document.createElement('th');
    th.innerText = storeHours[i];
    tRow.appendChild(th);
  }

  var tableBody = document.createElement('tbody');
  table.appendChild(tableBody);
  tableBody.id = 'table-body';
};

var storeForm = document.getElementById('storeForm');
function submitForm(event) {
  event.preventDefault();

  var form = event.target;
  var newStore = storeForm.newstore.value;
  var minimum = storeForm.mincust.value;
  var maximum = storeForm.maxcust.value;
  var average = storeForm.avgcust.value;
  var addStore = new cookieShops(newStore, minimum, maximum, average);
  addStore.generateTableRow();
};

storeForm.addEventListener('submit', submitForm);

createTable();
for (var i = 0; i < allStores.length; i++) {
  allStores[i].generateTableRow();
};
