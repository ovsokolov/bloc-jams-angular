(function() {
     function CollectionCtrl(Fixtures) {
        this.albums = Fixtures.getCollection(16);
        console.log("in collection");
     }
 
     angular
         .module('blocJams')
         .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
 })();