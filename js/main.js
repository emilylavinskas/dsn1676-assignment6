var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

var $btnCollapseExpand = $('.btn-collapse-expand');
var $panel = $('.panel');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');

var $btnAppend = $('.btn-append');
var $List = $('.list');

$btnShowHide.on('click', function () {
   $box.toggleClass('box-show');
});

$btnCollapseExpand.on('click', function () {
   $panel.toggleClass('js-panel-close'); 
});

$btnMove.on('click', function () {
    $diamond.toggleClass('diamond-move');
});

$btnBounce.on('click', function () {
    $circle.addClass('js-circle-bounce');
});
   
$circle.on('webkitAnimationEnd animationend', function () {
    $circle.removeClass('js-circle-bounce');
});

$btnAppend.on('click', function () {
    var $li = $('<li>New List Item</li>');
    $List.prepend($li);
    $li.addClass('js-btn-append');
});