$(function() {

  // ボタンをクリックしたとき
  $('.order_button').click(function(e) {
		e.preventDefault();

    // ボタンを押して2.5秒後に結果ページへ遷移
    var TransitionDelay = function(){
        window.location.href = './thanks.html';
    }
    setTimeout ( TransitionDelay, 2500 );

  });
});