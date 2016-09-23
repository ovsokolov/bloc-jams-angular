(function() {
     function AlbumCtrl(Fixtures) {
        console.log("in album");
        this.albumData = Fixtures.getAlbum();
        console.log( this.albumData);
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
 })();