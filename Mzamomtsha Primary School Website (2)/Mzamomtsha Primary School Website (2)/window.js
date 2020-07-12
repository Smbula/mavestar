
var myWindow;
// opening a new window 
function openWin() {
 myWindow = window.open( myWindow, width=400, height=200);

}
// function to close current window
function closeWin() {
if (myWindow) {
myWindow.close();
}
}
// checking if the window has been closed.
function checkWin() {
  if (myWindow) {
     document.getElementById("msg").innerHTML = " 'myWindow' has never been opened!";
           } else if (myWindow.closed) {
                 document.getElementById("msg").innerHTML = "'myWindow' has been closed!";
} else {
   document.getElementById("msg").innerHTML = "'myWindow' has not been closed!";
}
}

