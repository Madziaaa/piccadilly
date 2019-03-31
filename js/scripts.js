$("document").ready(function() {

    $("#tabs-wrapper .tab-button").click(function () {
        const index = $(this).index();
        const tab = $("#tabs-wrapper .tab");

        tab.removeClass("active");
        tab.eq(index).addClass("active");

        $("#tabs-wrapper .tab-button").removeClass("active");
        $("#tabs-wrapper .tab-button").eq(index).addClass("active");
    })
})