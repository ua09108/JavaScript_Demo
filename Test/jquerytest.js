$(function () {
    $(":input[data-ajax-url]").click(function (e) {
        e.preventDefault();
        var current = $(this);
        $.ajax({
            type: "POST",
            url: current.data("url"),
            data: "name=John&location=Boston",
            dataType: "json",
            success: function (response) {
            }
        });

    });



});