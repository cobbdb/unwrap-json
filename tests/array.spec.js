describe('unwrap-json', function () {
    var unwrap = require('../tool.js');
    describe('for arrays', function () {
        it('removes top level arrays', function () {
            expect(unwrap({
                test: [{
                    inner: 'value'
                }]
            })).toEqual({
                test: {
                    inner: 'value'
                }
            });
        });
    });
});
