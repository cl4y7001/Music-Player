$(document).ready(function(){


  var playlist = [{
      title:"Something I Don't Need",
      artist:"ESO",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/Something%20I%20Don't%20Need.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/Outta%20Body.jpg"
    },{
      title:"ともに",
      artist:"WANIMA",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/ともに.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/Everybody.jpg"
    },{
      title:"雙手插口袋",
      artist:"頑童MJ116 feat.張震嶽",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/雙手插口袋.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/Fresh%20Game.jpg"
    },{
      title:"Down",
      artist:"Jay Sean",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/Down.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/All%20Or%20Nothing.jpg"
    },{
      title:"讓我留在你身邊",
      artist:"陳奕迅",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/讓我留在你身邊.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/讓我留在你身邊.jpg"
    },{
      title:"明仔載",
      artist:"盧廣仲",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/明仔載.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/幾分之幾.jpg"
    },{
      title:"Love Yourself",
      artist:"Justin Bieber",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/Love%20Yourself.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/Purpose.jpg"
    },{
      title:"追光者",
      artist:"岑寧兒",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/追光者.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/追光者.jpg"
    },{
      title:"晴天",
      artist:"周杰倫",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/晴天.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/葉惠美.jpg"                  
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
      title:"Wherever you are",
      artist:"ONE OK ROCK",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/Wherever%20you%20are.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/Niche%20Syndrome.jpg" 
    },{
      title:"Goodbye Firework",
      artist:"卓義峯",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/Goodbye%20Firework.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/.jpg" 
    },{ 
      title:"Why You Gonna Lie",
      artist:"高爾宣 OSN",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/Why%20You%20Gonna%20Lie.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/%23onsrap.jpg" 
    },{ 
      title:"綠色",
      artist:"陳雪凝",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/綠色.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/綠色.jpg" 
    },{
      title:"太陽",
      artist:"邱振哲 PikA",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/太陽.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/太陽.jpg" 
    },{
      title:"2030",
      artist:"頑童 MJ116",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/2030.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/幹大事.jpg" 
    },{
      title:"大人中",
      artist:"盧廣仲",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/大人中.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/大人中.jpg" 
    },{
      title:"浪子回頭",
      artist:"茄子蛋",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/浪子回頭.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/浪流連.jpg" 
    },{
      title:"飛鳥和蟬",
      artist:"任然",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/飛鳥和蟬.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/飛鳥和蟬.jpg" 
    },{
      title:"浪漫一下",
      artist:"頑童 MJ116",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/浪漫一下.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/幹大事.jpg"                        
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
