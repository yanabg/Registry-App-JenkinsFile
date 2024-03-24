const assert = require('assert');
const fetch = require('node-fetch');

//adding a comment jsut to test the Ci in Jenkins
//2nd comment
suite('About page', function() {
  test('Page title', async function() {
    let res = await fetch("http://localhost:8888/about");
    let body = await res.text();
    assert.ok(body.includes("<title>About</title>"));
    assert.ok(body.includes("<h1>About</h1>"));
  });
});
