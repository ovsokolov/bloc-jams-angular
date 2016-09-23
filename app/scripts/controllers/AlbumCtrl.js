(function() {
     function AlbumCtrl() {
        console.log("in album");
        this.albumData = angular.copy(albumPicasso);
        console.log( this.albumData);
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();