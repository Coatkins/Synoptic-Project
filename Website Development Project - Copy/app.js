var i = 0;
var images = [];
var time = 3000;

images[0] = 'Images/IMAGE (1).jpg';
images[1] = 'Images/IMAGE (2).jpg';
images[2] = 'Images/IMAGE (3).jpg';
images[3] = 'Images/IMAGE (4).jpg';
images[4] = 'Images/IMAGE (5).jpg';
images[5] = 'Images/IMAGE (6).jpg';
images[6] = 'Images/IMAGE (7).jpg';
images[7] = 'Images/IMAGE (8).jpg';
images[8] = 'Images/IMAGE (9).jpg';
images[9] = 'Images/IMAGE (10).jpg';
images[10] = 'Images/IMAGE (11).jpg';
images[11] = 'Images/IMAGE (12).jpg';
images[12] = 'Images/IMAGE (13).jpg';
images[13] = 'Images/IMAGE (14).jpg';
images[14] = 'Images/IMAGE (15).jpg';
images[15] = 'Images/IMAGE (16).jpg';
images[16] = 'Images/IMAGE (17).jpg';
images[17] = 'Images/IMAGE (18).jpg';
images[18] = 'Images/IMAGE (19).jpg';
images[19] = 'Images/IMAGE (20).jpg';
images[20] = 'Images/IMAGE (21).jpg';
images[21] = 'Images/IMAGE (22).jpg';
images[22] = 'Images/IMAGE (23).jpg';
images[23] = 'Images/IMAGE (24).jpg';
images[24] = 'Images/IMAGE (25).jpg';
images[25] = 'Images/IMAGE (26).jpg';
images[26] = 'Images/IMAGE (27).jpg';
images[27] = 'Images/IMAGE (28).jpg';
images[28] = 'Images/IMAGE (29).jpg';

function changeImg(){
	document.slide.src = images[i];
	
	if (i < images.length - 1){
		i++;
	} else {
		i = 0;
	}
	
	setTimeout("changeImg()", time);
}

window.onload = changeImg;

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClassName(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClassName(x[i], "show");
  }
}

function AddClassName(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClassName(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

var buttons = document.getElementById("buttons");
var filterbuttons = btnContainer.getElementsByClassName("filterbuttons");
for (var i = 0; i < filterbuttons.length; i++) {
  filterbuttons[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}