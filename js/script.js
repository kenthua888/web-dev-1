function myToggleFunction() {
    var x = document.getElementsByClassName("city");
    for (var i = 0; i < x.length; i++) {
        if (x[i].style.display === "none" || x[i].style.display === "") {
            x[i].style.display = "block"; // Show the elements
        } else {
            x[i].style.display = "none"; // Hide the elements
        }
    }
}