(function() {
    function SongPlayer() {
        var currentSong = null;
        /**
        * @desc player object provide public functions for services
        * @type {Object}
        */
        var player = {};

        /**
        * @desc current playing song object
        * @type {Object}
        */
        var currentSong = null;
        
        /**
        * @desc Buzz object audio file
        * @type {Object}
        */
        var currentBuzzObject = null;

        
        /**
        * @function setSong
        * @desc Stops currently playing song and loads new audio file as currentBuzzObject
        * @param {Object} song
        */
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            currentSong = song;
         };
        
        /**
        * @function playSong
        * @desc Play audio file stored in currentBuzzObject
        * @param {Object} song
        */
         var playSong = function(song){
             currentBuzzObject.play();
             song.playing = true;
         }; 
        
        /**
        * @function play
        * @desc Play song recieved as a parameter
        * @param {Object} song
        */        
         player.play = function(song){
            if (currentSong !== song) {
                setSong(song);
                playSong(song);               
            } else if (currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(play);
                }
            }
         };
        
        /**
        * @function pause
        * @desc Pause song recieved as a parameter
        * @param {Object} song
        */          
         player.pause = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
         };
        
          
        return player;
    }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();