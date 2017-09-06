var animalsArray = ["cat", "dog", "mouse", "monkey", "bird"]

function buttons() {
    $(".buttons").empty();
    for (var i = 0; i < animalArray.length; i++) {
        var b = $("<button>");
        b.attr("data-name",
            animalArray[i]);
        b.addClass("animalAdd");
        b.text(animalArray[i]);
        $(".buttons").append(b);
    }
};

buttons();

$(".animalsAdd").on("click", function () {
    event.preventDefault();
    var movie = $(".search").val().trim();
    animalsArray.push(movie);
    buttons();
})

function postGifs() {
    var animalgif = $(this).attr("data-name")
    var key = "fde6c58ab10c4620bb10425b10b2032c"
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalgif + "&api_key=" + key + "&limit=10&rating=PG-13";
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function (response) {
        $(".animalgifs").empty();
        console.log(response)
        for (var i = 0; i < response.data.length; i++) {
            var animateGif = response.data[i].images.original.url;
            var gifImage = $("<img>").attr("src", animateGif);
            var stillGif = response.data[i].images.original_still.url;
            var ratings = response.data[i].rating;
            $(".animalgifs").append("<br>", "Rating = ", ratings, "<br>", gifImage, )

        }
    })
}

$(document).on("click", ".animalAdd", postGifs)

/*$(function() {
console.log('state', $(this).data('state'));
let $this = $(this),
    currentState = $this.data('state');
stillState = $this.data('still');
animateState = $this.data('animate');

var state = $(this).attr("data-state");
var stateStill = $(this).attr("data-still");
var stateAnimate = $(this).attr("data-animate");
console.log(state);

})*/