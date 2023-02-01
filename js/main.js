$(document).ready(function() {

    $(".bars").click(function(){
        $(".bars").toggleClass("active")
        $(".nav-list-block").toggleClass("active")
        $("body").toggleClass("hiden")
    })
})
