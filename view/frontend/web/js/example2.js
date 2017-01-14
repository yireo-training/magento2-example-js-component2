define([
    "jquery"
], function ($) {

    "use strict";

    return function (config, element) {
        var text = config.text;
        var message = '[ExampleJsComponent2] Message = ' + text;
        $(element).html(message);
        console.log(message);
    };
});