(function() {
    function SongPlayer(Fixtures) {
        /**
        * @desc player object provide public functions for services
        * @type {Object}
        */
        var player = {};
        
        /**
        * @desc pcurrent album infirmation
        * @type {Object}
        */
        var currentAlbum = Fixtures.getAlbum();
        
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
                player.currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            player.currentSong = song;
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
        * @function getSongIndex
        * @desc return index of the song in current alubum
        * @param {Object} song
        * @return {Number} index of the song
        */
         var getSongIndex = function(song) {
             return currentAlbum.songs.indexOf(song);
         };
        
        /**
        * @desc current playing song object
        * @type {Object}
        */
        player.currentSong = null;
        
        /**
        * @function play
        * @desc Play song recieved as a parameter
        * @param {Object} song
        */        
         player.play = function(song){
            song = song || player.currentSong;
            if (player.currentSong !== song) {
                setSong(song);
                playSong(song);               
            } else if (player.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(song);
                }
            }
         };
        
        /**
        * @function pause
        * @desc Pause song recieved as a parameter
        * @param {Object} song
        */          
         player.pause = function(song) {
            song = song || player.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
         };
        
         /**
         * @function previous
         * @desc Play previous song
         */  
         player.previous = function() {
             var currentSongIndex = getSongIndex(player.currentSong);
             currentSongIndex--;
             if (currentSongIndex < 0) {
                currentSongIndex = currentAlbum.songs.length - 1;
             }
             var song = currentAlbum.songs[currentSongIndex];
             setSong(song);
             playSong(song);
         };
        
          
        return player;
    }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();