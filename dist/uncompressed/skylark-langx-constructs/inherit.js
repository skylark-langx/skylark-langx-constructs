define([
	"./constructs"
],function(constructs){

    function inherit(ctor, base) {
        var f = function() {};
        f.prototype = base.prototype;

        ctor.prototype = new f();
    }

    return constructs.inherit = inherit
});