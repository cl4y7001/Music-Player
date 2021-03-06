$(document).ready(function(){


  var playlist = [{
        title:"RUDE",
        artist:"MAGIC!",
        mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/Rude.mp3",
        poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/rude.jpg"
    },{  
        title:"簡單愛",
        artist:"周杰倫",
        mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/%E7%B0%A1%E5%96%AE%E6%84%9B.mp3",
        poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/范特西.jpg"
    },{  
        title:"與我無關",
        artist:"阿冗",
        mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/%E8%88%87%E6%88%91%E7%84%A1%E9%97%9C.mp3",
        poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/%E8%88%87%E6%88%91%E7%84%A1%E9%97%9C.jpg"
    },{  
        title:"ベテルギウス",
        artist:"優里",
        mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/%E3%83%99%E3%83%86%E3%83%AB%E3%82%AE%E3%82%A6%E3%82%B9.mp3",
        poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/%E3%83%99%E3%83%86%E3%83%AB%E3%82%AE%E3%82%A6%E3%82%B9.jpg"   
    },{   
        title:"Mood",
        artist:"24kGoldn",
        mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/Mood.mp3",
        poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/mood.jpg"
    },{     
        title:"夏天的味道",
        artist:"陸虎",
        mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/%E5%A4%8F%E5%A4%A9%E7%9A%84%E5%91%B3%E9%81%93.mp3",
        poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/范特西.jpg"
    },{          
      title:"I Used to Care",
      artist:"Louyah",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/I%20Used%20to%20Care.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/6Feet.jpg"
    },{
      title:"旅行的意義",
      artist:"陳綺貞",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/旅行的意義.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/旅行的意義.jpg"
    },{  
      title:"灰色と青",
      artist:"米津玄師",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/灰色と青.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/bootleg.jpg"
    },{
      title:"自由",
      artist:"張震嶽",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/自由.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/Free%20night.jpg"
    },{   
      title:"Yellow",
      artist:"Coldplay",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/Yellow.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/Parachutes.jpg"
    },{
      title:"Closer",
      artist:"The Chainsmokers",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/Closer.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/Closer.jpg"
    },{        
      title:"你不知道的事",
      artist:"王力宏",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/你不知道的事.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/火力全開.jpg"
    },{
      title:"而我知道",
      artist:"五月天",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/而我知道.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/五月之戀.jpg"
    },{
      title:"Do You Remember",
      artist:"MC HotDog",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/Do%20You%20Remember.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/Do%20You%20Remember.jpg"
    },{
      title:"捲菸",
      artist:"美秀集團",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/捲菸.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/美秀集團.jpg"
    },{
      title:"地球上最浪漫的一首歌",
      artist:"黃鴻升",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/地球上最浪漫的一首歌.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/愛%26英雄.jpg"
    },{
      title:"A Thousand Years",
      artist:"Boyce Avenue(cover)",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/A%20Thousand%20Years.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/A%20Thousand%20Years.jpg"
    },{
      title:"世界末日",
      artist:"周杰倫",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/世界末日.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/范特西.jpg"
    },{  
      title:"我不是饒舌歌手",
      artist:"Marz23",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/我不是饒舌歌手.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/NOT%20A%20RAPPER.jpg"
    },{   
      title:"十年",
      artist:"陳奕迅",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/十年.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/陳奕迅.jpg" 
    },{        
      title:"藍色眼睛",
      artist:"ZAYIN",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/藍色眼睛.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/Zayin.jpg"
    },{    
      title:"世界盡頭",
      artist:"TRASH",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/世界盡頭.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/trash.jpg"
    },{
      title:"當你",
      artist:"林俊傑",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/當你.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/當你.jpg"
    },{
      title:"那些勸我別抽菸的人都死了",
      artist:"山姆Someshit",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/那些勸我別抽菸的人都死了.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/someshit.jpg"
    },{  
      title:"她的睫毛",
      artist:"周杰倫",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/她的睫毛.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/葉惠美.jpg" 
    },{
      title:"Memories",
      artist:"Maroon 5",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/Memories.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/JORDI.jpg"
    },{        
      title:"惡作劇",
      artist:"王藍茵",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/惡作劇.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/惡作劇之吻.jpg"
    },{
      title:"秘密基地",
      artist:"兄弟本色 G.U.T.S & 吳念真",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/秘密基地.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/秘密基地.jpg"
    },{
      title:"傻子",
      artist:"林宥嘉",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/傻子.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/大小說家.jpg"
    },{
      title:"我愛你",
      artist:"盧廣仲",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/我愛你.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/100種生活.jpg"
    },{
      title:"Spotlight",
      artist:"頑童MJ116",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/Spotlight.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/Fresh%20Game.jpg"
    },{          
      title:"夜空中最亮的星",
      artist:"逃跑計劃",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/夜空中最亮的星.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/世界.jpg"
    },{
      title:"在這座城市遺失了你",
      artist:"告五人",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/在這座城市遺失了你.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/運氣來得若有似無.jpg"
    },{
      title:"高嶺の花子さん",
      artist:"back number",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/高嶺の花子さん.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/ラブストーリー.jpg"
    },{
      title:"再見Hip-Hop",
      artist:"張震嶽x熱狗x功夫胖x派克特",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/再見Hip-Hop.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/再見Hip-Hop.jpg"
    },{
      title:"因為是你",
      artist:"琳誼01(cover)",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/因為是你.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/北棲Playlist.jpg"
    },{
      title:"Something Just Like This",
      artist:"The Chainsmokers & Coldplay",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/Something%20Just%20Like%20This.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/Something%20Just%20Like%20This.jpg"
    },{
      title:"想你的習慣",
      artist:"宋念宇",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/想你的習慣.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/就站在這裡.jpg"
    },{  
      title:"成全",
      artist:"林宥嘉",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/成全.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/成全.jpg"
    },{
      title:"明年",
      artist:"盧廣仲",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/Let%20Go.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/明年.jpg"
    },{                
        title:"Something I Don't Need",
        artist:"ESO",
        mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/Something%20I%20Don't%20Need.mp3",
        poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/Outta%20Body.jpg"
    },{  
      title:"不是男人",
      artist:"八三夭",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/不是男人.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/最後的831.jpg"  
    },{
      title:"還是會",
      artist:"韋禮安",
      mp3:"https://raw.githubusercontent.com/cl4y7001/Music-Player/master/music/還是會.mp3",
      poster: "https://raw.githubusercontent.com/cl4y7001/Music-Player/master/img/有人在等.jpg"
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
