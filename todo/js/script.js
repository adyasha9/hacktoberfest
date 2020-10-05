/*jshint esversion: 6 */
var item = document.getElementById('list');
var input = document.getElementById('data-new-list-input');


var today = new Date();
document.getElementById("date").innerHTML = today.toDateString();

function addToDo(coffe){
  const things = '<li class="things"><p>${to}</p></li> ';
  const position = "beforeend";
  item.insertAdjacentHTML(position,things);

}

addToDo("lp");
