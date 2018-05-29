~function (global, axios) {
  var $ = global.document.querySelector.bind(global.document)
  var oBtn = $('button')
  oBtn.addEventListener('click', submitHandler, false)

  function submitHandler (e) {
    e.preventDefault()
    var nickname = $('.nickname').value
    var email = $('.email').value
    var password = $('.password').value
    axios.post('/signup', {
      nickname: nickname,
      email: email,
      password: password
    })
    .then(function (res) {
      if (res.data.errcode != 0) {
        return global.alert(res.errmsg)
      }
      global.location.href = '/signin.html'
    })
  }
}(window, axios)
