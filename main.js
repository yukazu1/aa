  var music = new Audio();
 music.preload = "auto";
    music.src = "https://yukazu1.github.io/aa/main.mp3";
 music.load();

function play()
{

      music.loop = true;
    music.play();
}



document.onkeydown = function(e) { 

  switch( e.keyCode )
    {
      case 80:
        play();
        break;
        case 83:
        stop();
        break;
        }
}
