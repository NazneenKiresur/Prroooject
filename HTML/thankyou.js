const myTimeout = setTimeout(openForm, 5000);

function openForm() {
  document.getElementById("wrapper").style.display = "block";
  clearTimeout(myTimeout);
}

function closeForm() {
  document.getElementById("wrapper").style.display = "none";
}

function yes() {
  document.getElementById("wrapper").style.display = "none";
  document.getElementById("wrapper1").style.display = "block";
}

function closeForm1() {
  document.getElementById("wrapper1").style.display = "none";
}

function no() {
  document.getElementById("wrapper").style.display = "none";
  document.getElementById("wrapper1").style.display = "none";
  document.getElementById("wrapper2").style.display = "block";
}

function closeForm2() {
  document.getElementById("wrapper2").style.display = "none";
}

function linking1() {
  window.location.href = "./lastpage.html"
}

document.getElementById("yes").addEventListener("click", linking1);
document.getElementById("no").addEventListener("click", linking1);
