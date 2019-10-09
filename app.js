'use strict';

var shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


var tableBody = document.getElementById('tableElement');

var renderHeaderRow = function () {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for (var i=0; i < shopHours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = shopHours[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = 'Daily total';
  trEl.appendChild(tdEl);

  tableBody.appendChild(trEl);
};

renderHeaderRow();



var allShops = [];
// class shop
function Shop(location, minCust, maxCust, avgCookie) {
  // this.shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookiePerHour = [];
  this.dailyLocationTotal = 0;
  // this.cookiePerHour;
  // add to the list of shops
  // count cookies
  this.countCookie = function () {
    for (var i = 0; i < shopHours.length; i++) {
      var randomNumber = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
      this.cookiePerHour.push(randomNumber);
    }
  };
  // count amount
  this.totalPerDay = function(){
    for (var i = 0; i < this.cookiePerHour.length; i++) {
      this.dailyLocationTotal += this.cookiePerHour[i];
    }
  };
  // call them
  this.countCookie();
  this.totalPerDay();

  allShops.push(this);
}
// render to the page
Shop.prototype.render = function(){
  // create table row for data
  var trEl = document.createElement('tr');
  var thEl = document.createElement('td');
  thEl.textContent = this.location;
  trEl.appendChild(thEl);

  for (var i = 0; i < shopHours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiePerHour[i];
    trEl.appendChild(tdEl);
  }

  var totalEl = document.createElement('td');
  totalEl.textContent = this.dailyLocationTotal;
  trEl.appendChild(totalEl);

  tableBody.appendChild(trEl);
};

var seattle = new Shop('Seattle', 23, 65, 6.3);
var tokyo = new Shop('Tokyo', 3, 24, 1.2);
var dubai = new Shop('Dubai', 11, 38, 3.7);
var paris = new Shop('Paris', 20, 38, 2.3);
var lima = new Shop('Lima', 2, 16, 4.6);
// seattle.cookiePerHour();
// seattle.totalPerDay();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

var totalRow = function () {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('td');
  thEl.textContent = 'Total:';
  trEl.appendChild(thEl);

  for (var i = 0; i < shopHours.length; i++) {
    var tdEl = document.createElement('td');
    var grandTotal = 0;
    for (var j = 0; j < allShops.length; j++) {
      grandTotal += allShops[j].cookiePerHour[i];
      tdEl.textContent = grandTotal;
      trEl.appendChild(tdEl);
    }
  }

  var finalTotal = 0;
  for (var k = 0; k < allShops.length; k++) {
    finalTotal += allShops[k].dailyLocationTotal;
  }
  var lastRow = document.createElement('td');
  lastRow.textContent = finalTotal;
  trEl.appendChild(lastRow);

  tableBody.appendChild(trEl);
};

totalRow();


var userForm = document.getElementById('user-form');
userForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  console.log('event.target.inputElementNewLocation.value:', event.target.inputElementNewLocation.value);

  this.location = event.target.inputElementNewLocation.value;
  this.minCust = event.target.inputElementMinimumCustomers.value;
  this.maxCust = event.target.inputElementMaximumCustomers.value;
  this.avgCookie = event.target.inputElementMaximumCustomers.value;


  if (isNaN(this.minCust)) {
    alert('Please enter a number');
    event.target.inputElementMinimumCustomers.value = null;

  }
  if (isNaN(this.maxCust)) {
    alert('Please enter a number');
    event.target.inputElementMaximumCustomers.value = null;

  }
  if (isNaN(this.avgCookie)) {
    alert('Please enter a number');
    event.target.event.target.inputElementMaximumCustomers.value = null;
  }
  alert(`New location is ${this.location} and the numbers of minimum customers: ${this.minCust}, maximum customers: ${this.maxCust}, average cookies: ${this.avgCookie}`);
}
