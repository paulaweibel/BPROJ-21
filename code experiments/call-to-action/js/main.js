// document.querySelector("#input1").addEventListener('input')



function sendComment() {
    if (document.getElementById("input1").value == "" || document.getElementById("input2").value == "") {
        console.log("something is empty")
    } else {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "<div class=comment><img class=comment-bubble src=img/objects-icons/speechbubble-big.png><div class=comment-text><b>" + document.getElementById("input2").value + "</b><p>"+ document.getElementById("input1").value + "</p></div></div>";

        // füge das neu erstellte Element und seinen Inhalt ins DOM ein
        var currentDiv = document.getElementById("first-comment");
        document.body.insertBefore(newDiv, currentDiv);

        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
    }
}