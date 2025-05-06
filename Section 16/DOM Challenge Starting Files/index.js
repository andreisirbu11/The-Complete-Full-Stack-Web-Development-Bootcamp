var unorderedList = document.querySelector("ul");
var thirdElement = unorderedList.lastElementChild;
thirdElement.innerHTML = "Andrei";

var listItems = document.getElementsByTagName("li");
listItems[2].style.color = "green";

console.log(listItems);

var listLink = document.querySelector(".list a");
listLink.style.color = "red";

document.querySelector("button").style.backgroundColor = "yellow";
document.querySelector("h1").classList.add("huge");

document.querySelector("h1").innerHTML = "Hello <span>World</span>";
