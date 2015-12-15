define(["jquery"], function ($) {

    var inc = function (number, max) {
        if (max === undefined) {
            max = 10;
        }

        number++;

        return (number > max) ? max : number;
    };

    var dec = function (number, min) {
        if (min === undefined) {
            min = 0;
        }

        number--;

        return (number < min) ? min : number;
    };

    $(function () {

        var counters = $("article aside .counter");

        counters.each(function () {

            var counter = $(this);

            counter.siblings(".up").click(function () {
                counter.text(inc(counter.text()));
            });

            counter.siblings(".down").click(function () {
                counter.text(dec(counter.text()));
            });
        });

    });
});