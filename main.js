  var music = new Audio();
 music.preload = "auto";
    music.src = "https://rr4---sn-npoldn7s.googlevideo.com/videoplayback?expire=1656851258&ei=2jbBYraLC_2nz7sP0LGX-AY&ip=168.81.72.26&id=o-AL3IDeuWS3x-XIJZnRYscKoHDdEW01Ejgd7WslSsVEP-&itag=140&source=youtube&requiressl=yes&vprv=1&mime=audio/mp4&gir=yes&clen=4282462&dur=264.568&lmt=1646007338204580&keepalive=yes&fexp=24001373,24007246&c=ANDROID&txp=5318224&sparams=expire,ei,ip,id,itag,source,requiressl,vprv,mime,gir,clen,dur,lmt&sig=AOq0QJ8wRAIgOf42e4MIzs54THMJGDl1xjSvwyBHgGoenRHOWkKFHhsCIHDZ6BBoVeAHhhSRynKfFuwpcSobxxWxfZbF5SA6OuLk&avi=K1A%2FHwERIiwAVF9GaQhoQhMXBB8LPn1HSFQmDVNZV0E1FigaFRwsBwECFkYZX0dfPF5LNQwEJQAWIgwJRkJGUj0CS0wLASEJSFQ1CEJIU1E5HgACHCc5BBADFkYZX0dfPF5LIAwQKAotGAMLdkNeej4WDA5HTn1JRi8xB0xEXEciC0tMCwEhCUhUNRZMSUsRalABAhEEd0pLR1NcDQkDHWdAR0RTTnVVVEZKRg8Tf1IoPwAYATciEAoCFx0BC1xGPB5FVCYBPxcBGBEwSlxXQCQTBAZHTm9UUkNTXBEIBAZoUEVUIAw5FwUVEQtRZUtDNVBTVAcVPgA0GgQdRkN4QHIP&from_cache=False&title=%E3%82%B9%E3%83%AD%E3%83%BC%E3%83%AB%E3%83%BC%E3%83%97%20ED%20%E3%82%B7%E3%83%A5%E3%83%AF%E3%82%B7%E3%83%A5%E3%83%AF&redirect_counter=1&cm2rm=sn-cvhzl7e&req_id=e0c4a64cb80aa3ee&cms_redirect=yes&mh=Tp&mip=2403:7800:b53c:500:482c:9df4:722:bb48&mm=34&mn=sn-npoldn7s&ms=ltu&mt=1656829240&mv=m&mvi=4&pl=33&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAOjl8Nlf4ZyBSZn7YOFFQcr9uVfr5Y4C2dAv0g8VRd5eAiEA8Hx2ASpM1MCxAimRmvwQVlyRvbV-Yi9_hZK5_cImoM0%3D";
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
