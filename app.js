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
