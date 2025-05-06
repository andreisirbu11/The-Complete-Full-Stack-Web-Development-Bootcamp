$("h1").css("color", "red");

$("button").text("Don't Click Me");

$("h1").html("<em>Hey.</em>")

$("h1").click(function () {
    $("h1").css("color", "black");
})

$(document).keydown(function (event) {
    let key = event.key;
    $("h1").text(key);
})

$("h1").before("<button>New</button>")