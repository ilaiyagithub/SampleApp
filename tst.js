var test = require('tape');

test('basic arithmetic', function (t) {
    t.plan(3);

    t.equal(2 + 3, 5);
    t.equal(7 * 8 + 9, 65);
    t.notEqual(5,6,'5 and 6 are not equal','extra');
});

test('My Test', t => {
    t.plan(1);
    t.equal(2 + 3, 5);
});