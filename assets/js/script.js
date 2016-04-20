$(document).ready(function() {

  $('li>a[id$="myButtons"]').click(function(event) {
    event.preventDefault();
    var href = $(this).attr('href');
    alert("Are you sure you want to add a button" + href)
  });

  //Adding a Bead and String

  $('#addBead').click(function() { //toFix: beads overlap, adds to most recently added bead div. shift relationally
    var destination = "";
    var num_beads = 0
    if (num_beads == 0) {
      destination = document.getElementById("myContainer");
    }
    else {
      name = "bead" + String(num_beads);
      destination = document.getElementById(name);
    }
    var bead = document.createElement("DIV");
    num_beads++;
    bead.className = "bead";
    bead.id = "bead" + String(num_beads);
    destination.appendChild(bead);

    var stringDestination = "";
    var offset = $(".bead").offset().left;
    console.log(offset);
    var numStrings = 0;
    if (offset <= 60) {
      name = "necklaceString" + String(numStrings);
      stringDestination = document.getElementById(name);
      //stringDestination = document.getElementById("myContainer");
      numStrings++;
    }
    var necklaceString = document.createElement("DIV");
    stringDestination.appendChild(necklaceString);

  });
});
