'use strict';

var parentEl = document.getElementById('parentElement');

var child = document.createElement('h1');
child.textContent = 'Seattle: ';
parentEl.appendChild(child);

var shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// console.log(child);

//var randomNumbers = [];

var salmonCookieShopOne = {
  locationName: 'Seattle',
  shopHours,

  minCust: 23,
  maxCust: 65,
  avgCookie:6.3,
  sumRandoms: 0,
  randomNumberGenerator: function (min, max) {
    // return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
    var rand = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
    this.sumRandoms += rand;
    return rand;
  },

  render: function() {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      childEl.textContent = `${this.shopHours[i]}: ${this.randomNumberGenerator()} cookies `;
      parentEl.appendChild(childEl);
    }
    childEl.textContent = ` Total: ${this.sumRandoms} cookies`;
    parentEl.appendChild(childEl);
  }
};

salmonCookieShopOne.randomNumberGenerator();
salmonCookieShopOne.render();


var parentEl = document.getElementById('parentElement');

var child = document.createElement('h1');
child.textContent = 'Tokyo: ';
parentEl.appendChild(child);

var salmonCookieShopTwo = {
  locationName: 'Tokyo',
  shopHours,

  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  sumRandoms: 0,
  randomNumberGenerator: function (min, max) {
    // return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
    var rand = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
    this.sumRandoms += rand;
    return rand;
  },

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      childEl.textContent = `${this.shopHours[i]}: ${this.randomNumberGenerator()} cookies `;
      parentEl.appendChild(childEl);
    }
    childEl.textContent = ` Total: ${this.sumRandoms} cookies`;
    parentEl.appendChild(childEl);
  }
};

salmonCookieShopTwo.randomNumberGenerator();
salmonCookieShopTwo.render();

var parentEl = document.getElementById('parentElement');

var child = document.createElement('h1');
child.textContent = 'Dubai: ';
parentEl.appendChild(child);

var salmonCookieShopThree = {
  locationName: 'Dubai',
  shopHours,

  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  sumRandoms: 0,
  randomNumberGenerator: function (min, max) {
    // return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
    var rand = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
    this.sumRandoms += rand;
    return rand;
  },

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      childEl.textContent = `${this.shopHours[i]}: ${this.randomNumberGenerator()} cookies `;
      parentEl.appendChild(childEl);
    }
    childEl.textContent = ` Total: ${this.sumRandoms} cookies`;
    parentEl.appendChild(childEl);
  }
};

salmonCookieShopThree.randomNumberGenerator();
salmonCookieShopThree.render();

var parentEl = document.getElementById('parentElement');

var child = document.createElement('h1');
child.textContent = 'Paris: ';
parentEl.appendChild(child);

var salmonCookieShopFourth = {
  locationName: 'Paris',
  shopHours,

  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  sumRandoms: 0,
  randomNumberGenerator: function (min, max) {
    // return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
    var rand = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
    this.sumRandoms += rand;
    return rand;
  },

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      childEl.textContent = `${this.shopHours[i]}: ${this.randomNumberGenerator()} cookies `;
      parentEl.appendChild(childEl);
    }
    childEl.textContent = ` Total: ${this.sumRandoms} cookies`;
    parentEl.appendChild(childEl);
  }
};

salmonCookieShopFourth.randomNumberGenerator();
salmonCookieShopFourth.render();


var parentEl = document.getElementById('parentElement');

var child = document.createElement('h1');
child.textContent = 'Lima: ';
parentEl.appendChild(child);

var salmonCookieShopFifth = {
  locationName: 'Lima',
  shopHours,

  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  sumRandoms: 0,
  randomNumberGenerator: function (min, max) {
    // return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
    var rand = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
    this.sumRandoms += rand;
    return rand;
  },

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      childEl.textContent = `${this.shopHours[i]}: ${this.randomNumberGenerator()} cookies `;
      parentEl.appendChild(childEl);
    }
    childEl.textContent = ` Total: ${this.sumRandoms} cookies`;
    parentEl.appendChild(childEl);
  }
};

salmonCookieShopFifth.randomNumberGenerator();
salmonCookieShopFifth.render();