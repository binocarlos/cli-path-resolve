var tape = require('tape')
var resolve = require('./')

tape('test against a relative path', function(t){
	var resolved = resolve('package.json')

	t.equal(resolved, __dirname + '/package.json')
	t.end()
})
