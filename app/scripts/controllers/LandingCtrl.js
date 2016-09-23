 (function() {
     function LandingCtrl() {
         console.log("in landings");
         this.heroTitle = "Turn the Music Up!";
     }
 
     angular
         .module('blocJams')
         .controller('LandingCtrl', LandingCtrl);
 })();