describe('unwrap-json', function () {
    var unwrap = require('../tool.js');
    describe('for leaf-values', function () {
        it('does nothing for non-objects', function () {
            expect(unwrap(123)).toEqual(123);
            expect(unwrap(true)).toEqual(true);
            expect(unwrap('string')).toEqual('string');
            expect(unwrap()).toEqual(undefined);
        });
        it('ignores root array', function () {
            expect(unwrap([
                1, {}, false
            ])).toEqual([
                1, {}, false
            ]);
        });
    });
});
