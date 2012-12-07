$(document).ready(function() {
  document.onkeydown = function(e) {
    console.log(e.keyCode)
    var soundId = sounds[e.keyCode];
    if (soundId) document.getElementById(soundId).play();
    else console.log("key not mapped : code is", e.keyCode);
  }
});
var sounds = {
   87 : 'bird', // key 'w'
   65 : 'bird2', // key 'a'
   83 : 'wm', // key 's'
   68 : 'cat', // key 'd'
   70 : 'jez', // key 's'
   38 : 'whip', // key 'up'
   71 : 'chicken', // key 'down'
   40 : 'dog' // key 'g'
};
