var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

clear.addEventListener("click", function () {
   localStorage.clear();
   location.reload();
});

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
   for (var i = 0; o < allScores.length; i++) {
      var createList = document.createElement("list")
      createList.textContent = allScores[i].initials + " " + allScores[i].score;
      highScore.appendChild(createList);
   }
}

goBack.addEventListener("click", function (){
   window.location.replace("./index.html");
})