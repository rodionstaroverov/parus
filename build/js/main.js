$(document).ready(function() {
    $(".header-pay").click(function () {
        $(".pay-form").css("display", "block");
    })
    $(".pay-form-close").click(function () {
        $(".pay-form").css("display", "none");
    })
});