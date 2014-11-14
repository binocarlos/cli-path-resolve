var tape = require('tape')
var resolve = require('./')

tape('test against a relative path', function(t){
	var resolved = resolve('package.json')

	t.equal(resolved, __dirname + '/package.json')
	t.end()
})


tape('return null for a null input', function(t){
	var resolved = resolve()

	t.equal(resolved, null, 'resolved is null')
	t.end()
})

tape('test against an absolute path', function(t){
  var resolved_linux = resolve('/tmp/apples.txt')
  var resolved_win = resolve('c:\\tmp\\apples.txt')

  t.equal(resolved_linux, '/tmp/apples.txt')
  t.equal(resolved_win, 'c:\\tmp\\apples.txt')
  t.end()
})
