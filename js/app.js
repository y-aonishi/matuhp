/*★★　ページトップリンク　はじまり★★*/

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 500){//上から500pxスクロールしたら
      $('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
      $('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
    }else{
      if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
        $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
        $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
      }
    }
  }

  /*★★続きを読む　はじまり*/ 
  
  // 画面をスクロールをしたら動くようにする
  $(window).scroll(function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
  });
  
  // #page-topをクリックした際の設定
  $('#page-top a').click(function () {
      $('body,html').animate({
          scrollTop: 0//ページトップまでスクロール
      }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
      return false;//リンク自体の無効化
  });
  
/*★★　ページトップリンク　おわり★★*/
  

$(function () {
  var $text = $('.ac-text');//対象のテキスト
  var $more = $('.more');//続きを読むボタン
  var lineNum = 8;//表示する行数
  var textHeight = $text.height();//テキスト全文の高さ
  var lineHeight = parseFloat($text.css('line-height'));//line-height
  var textNewHeight = lineHeight * lineNum;//指定した行数までのテキストの高さ
  
  // テキストが表示制限の行数を超えたら発動
  if (textHeight > textNewHeight) {
    $text.css({
      height: textNewHeight,
      overflow: 'hidden',
    });
    //続きを読むボタンクリックで全文表示
    $more.click(function () {
      $(this).hide();
      $text.css({
        'height': textHeight,
        'overflow': 'visible',
      });
      return false;//aタグ無効化
    });
  } else {
    // 指定した行数以下のテキストなら続きを読むは表示しない
    $more.hide();
  }
});

/*★★続きを読む　おわり*/ 