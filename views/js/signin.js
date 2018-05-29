~function (global, axios) {
  var $ = global.document.querySelector.bind(global.document)
  var oBtn = $('button')
  oBtn.addEventListener('click', submitHandler, false)

  function submitHandler (e) {
    e.preventDefault()
    var name = $('.name').value
    var password = $('.password').value
    axios.post('/signin', {
      username: username,
      passwrod: passwrod
    })
    .then(function (res) {
      if (res.errcode != 0) {
        return global.alert(res.errmsg)
      }
      global.location.href = '/index.html'
    })
  }
}(window, axios)
