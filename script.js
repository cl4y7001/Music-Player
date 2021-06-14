$(document).ready(function(){


  var playlist = [{
      title:"Something I Don't Need",
      artist:"ESO",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/Something%20I%20Don't%20Need.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/Outta%20Body.jpg"
    },{
      title:"Without You",
      artist:"高爾宣 OSN",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/Without%20You.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/%23onsrap.jpg"
    },{
      title:"你的酒館對我打了烊",
      artist:"陳雪凝",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/你的酒館對我打了烊.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/你的酒館對我打了烊.jpg"
    },{
      title:"ちいさな日々",
      artist:"flumpool",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/ちいさな日々.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/Real.jpg"
    },{   
      title:"浪流連",
      artist:"茄子蛋",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/浪流連.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/浪流連.jpg"
    },{   
      title:"芒種",
      artist:"音闕詩聽",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/芒種.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/.jpg"
    },{   
      title:"漂向北方",
      artist:"黃明志 ft.王力宏",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/漂向北方.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/亞洲通車.jpg"
    },{   
      title:"幾分之幾",
      artist:"盧廣仲",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/幾分之幾.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/幾分之幾.jpg"     
    },{        
      title:"伯父",
      artist:"ESO",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/%E4%BC%AF%E7%88%B6.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/Outta%20Body.jpg"
    },{       
      title:"怨偶",
      artist:"MC HotDog Feat. 艾怡良",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/怨偶.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/廢物.jpg" 
    },{  
  }];
  
  

  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3",
    volumechange: function(event) {
      $( ".volume-level" ).slider("value", event.jPlayer.options.volume);
    },
    timeupdate: function(event) {
      $( ".progress" ).slider("value", event.jPlayer.status.currentPercentAbsolute);
    }
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  var PlayerData = $(cssSelector.jPlayer).data("jPlayer");
  
  
  // Create the volume slider control
  $( ".volume-level" ).slider({
     animate: "fast",
		max: 1,
		range: "min",
		step: 0.01,
		value : $.jPlayer.prototype.options.volume,
		slide: function(event, ui) {
			$(cssSelector.jPlayer).jPlayer("option", "muted", false);
			$(cssSelector.jPlayer).jPlayer("option", "volume", ui.value);
		}
  });
  
  // Create the progress slider control
  $( ".progress" ).slider({
		animate: "fast",
		max: 100,
		range: "min",
		step: 0.1,
		value : 0,
		slide: function(event, ui) {
			var sp = PlayerData.status.seekPercent;
			if(sp > 0) {
				// Move the play-head to the value and factor in the seek percent.
				$(cssSelector.jPlayer).jPlayer("playHead", ui.value * (100 / sp));
			} else {
				// Create a timeout to reset this slider to zero.
				setTimeout(function() {
					 $( ".progress" ).slider("value", 0);
				}, 0);
			}
		}
	});
 
});