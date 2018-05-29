/**
 * 控制侧边菜单的展开与否
 */
~function (global) {
  var $ = global.document.querySelector.bind(global.document)
  var oSide = $('.side')

  // 显示
  $('.header img').addEventListener('click', function () {
    oSide.classList.add('side-show')
  }, false)

  // 隐藏
  oSide.addEventListener('click', function (e) {
    oSide.classList.remove('side-show')
  }, false)
}(window)
