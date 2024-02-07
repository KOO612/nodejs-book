var relationship1 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  longFriends: function () {
    var that = this;
    this.friends.forEach(function (friend) {
      console.log(that.name, friend);
    });
  },
};
relationship1.longFriends();
console.log('--------------');

const relationship2 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  longFriends() {
    this.friends.forEach((friend) => {
      console.log(this.name, friend);
    });
  },
};
relationship2.longFriends();
