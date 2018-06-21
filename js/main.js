//listner got form submit
document.getElementById('myForm').addEventListener('submit', savebookmark);

function savebookmark(e){
  console.log("hi00");
  e.preventDefault();
}