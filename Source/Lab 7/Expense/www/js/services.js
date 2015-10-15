angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Grocery',
    lastText: '200$',
    face: 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/simple-red-glossy-icons-business/086760-simple-red-glossy-icon-business-dollar-solid.png'
  }, {
    id: 1,
    name: 'Movie',
    lastText: '70$',
    face: 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/simple-red-glossy-icons-business/086760-simple-red-glossy-icon-business-dollar-solid.png'
  }, {
    id: 2,
    name: 'Clothing',
    lastText: '100$',
    face: 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/simple-red-glossy-icons-business/086760-simple-red-glossy-icon-business-dollar-solid.png'
  }, {
    id: 3,
    name: 'Food',
    lastText: '30$',
    face: 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/simple-red-glossy-icons-business/086760-simple-red-glossy-icon-business-dollar-solid.png'
  }, {
    id: 4,
    name: 'Gas',
    lastText: '50$',
    face: 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/simple-red-glossy-icons-business/086760-simple-red-glossy-icon-business-dollar-solid.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
