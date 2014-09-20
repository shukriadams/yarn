(function() {

    require.config({
        paths: {
            'yarn' : '../../src/yarn'
        },
        shim: {
            'yarn': {
                exports: 'yarn'
            }
        }
    });

    require(['yarn'], function(yarn){
        var result = yarn.returnAfterLast("1234", "3");
        console.log(result === "4" ? "pass" : "fail");
    });

})();