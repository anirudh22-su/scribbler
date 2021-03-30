
var trashFunctions = function(numberOfPosts) {

    for (var i = 0; i < numberOfPosts; i++) {
        var modal = document.getElementsByClassName('trashModal')[i];

        var div = document.getElementsByClassName("postTrash")[i];

        var close = document.getElementsByClassName("trashModal-button-no")[i];

        div.onclick = function() {
            modal.style.display = "block";
        }

        close.onclick = function() {
            modal.style.display = "none";
        }
    }
}

trashFunctions(5)

function navigateToPost() {
    location.href = "post.html";
}