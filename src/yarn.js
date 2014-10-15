/**
 * I am Yarn, Human-friendly string relations.
 * Dependencies : none, but RequireJS is highly recommended. If you don't have requirejs,
 * yarn is attached to window.define.yarn.
 * @author : Shukri Adams <shukri.adams@gmail.com>
 * @link : https://github.com/shukriadams/yarn
 */

// use requireJs or shim define on window
var define = define || function(mod, req, call){if(window){window.define[mod]=call();}};
define('yarn', [], function () {

    "use strict";

    var yarn = {};


    /**
     * Returns a substring after the last occurrence of a given preceding string.
     */
    yarn.returnAfterLast = function (main, sub) {
        // if substring doesn't exist in main string, returns zero length string
        if (main.indexOf(sub) == -1)
            return "";

        // if no text after substring, returns zero length string
        if (main.length - 1 == main.lastIndexOf(sub))
            return "";

        return main.substring(main.lastIndexOf(sub) + sub.length);
    };


    /**
     * Safely combines two parts of a url.
     */
    yarn.urlCombine = function (part1, part2) {
        part1 = part1.replace(/\/+$/gm, '');
        part2 = part2.replace(/^\/+/gm, '');
        return part1 + "/" + part2;
    };


    /**
     * C#-style string.format. Doesn't change String prototype.
     * Use : yarn.format("a{0}c", "b") > "abc"
     * Credits : http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
     */
    yarn.format = function (string) {
        var formatted = string;
        if (arguments.length > 1){
            for (var i = 0; i < arguments.length; i++) {
                if (i == 0)
                    continue;
                var regexp = new RegExp('\\{' + (i - 1) + '\\}', 'gi');
                formatted = formatted.replace(regexp, arguments[i]);
            }
        }
        return formatted;
    };


    /**
     * Returns a substring leadingup to the last occurrence of a given preceding string.
     */
    yarn.returnUptoLast = function (main, sub) {
        // if substring doesn't exist in main string, returns zero length string
        if (main.indexOf(sub) == -1)
            return "";

        // if no text before substring, returns the main string
        if (main.length == sub.length)
            return "";

        // if reaches here, proceed to find desired substring
        return main.substring(0, main.lastIndexOf(sub));
    };


    /**
     * Replaces all instances of substring
     */
	yarn.replaceAll = function (s, replace, wth) {
        while (s.indexOf(replace) != -1)
            s = s.replace(replace, wth);
        return s;
    };


    /**
     * Returns string between start and end tag
     */
    yarn.returnBetween = function (main, startTag, endTag) {
        if (main.indexOf(startTag) == -1 || main.indexOf(endTag) == -1)
            return '';
        else {
            if (main.indexOf(startTag) == -1 || main.indexOf(endTag) == -1)
                return '';
            else {
                var startPosition = main.indexOf(startTag) + startTag.length;
                if (startPosition >= main.length)
                    return '';
                var endPosition = main.indexOf(endTag, startPosition);
                if (endPosition >= main.length)
                    return '';

                return main.substring(startPosition, endPosition);
            }
        }
    };


    /**
     * Returns true if string ends with substring
     */
    yarn.endsWith = function (main, sub) {
        return main.indexOf(sub, main.length - sub.length) !== -1;
    };

    return yarn;

});

