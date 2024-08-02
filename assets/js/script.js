$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

//オープニング
$(function(){

    const opVideo = $('#opv').get(0);
    $('#opv-wrap').fadeIn(1000);
  
    opVideo.addEventListener('loadedmetadata', function() {
      const playTime = opVideo.duration * 1000 - 1000;
  
      // 確認用
      console.log('3000： ' + opVideo.duration);
      console.log('3000： ' + playTime);
  
      setTimeout(function(){
        $('#opv-wrap').fadeOut(0, function(){
          $('main').fadeIn(1000);
        });
      }, playTime);
  
    });
  
  });



  //音声の再生
document.getElementById("audio").play();

//音声の一時停止
// document.getElementById("audio").pause();

// $(function () {
//   var audioBtn = $(".audio_button"),
//     audioWrap = $(".audio_wrap"),
//     audio = document.getElementById("audio");

//   audioBtn.on("click", function () {
//     if (audioWrap.hasClass("play")) {
//       audio.pause();
//       audioWrap.removeClass("play");
//     } else {
//       audio.play();
//       audioWrap.addClass("play");
//     }
//   });
// });
