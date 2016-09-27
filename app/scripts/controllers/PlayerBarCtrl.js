 (function() {
     function PlayerBarCtrl($scope,Fixtures, SongPlayer) {
         this.albumData = Fixtures.getAlbum();
         this.songPlayer = SongPlayer;
         
         this.songPlayer.setCtrlScope($scope);
         
         //callback implementation
         //$scope.callBackMethod = function(){
         //    $scope.$apply(function(){});
         //};  
         //override service method to have callback into controller
         //this.songPlayer.callBackMethod = $scope.callBackMethod;
     }
 
     angular
         .module('blocJams')
         .controller('PlayerBarCtrl', ['$scope','Fixtures', 'SongPlayer', PlayerBarCtrl]);
 })();