/*write a JavaScript function to get the 
HREF attribute of the link.
1. write a function 
2. write a variable that gets the href element by id
3. display the value of the href attribute when clicking
button.*/

function getAttributes(){
  var a = document.getElementById('link').href;
  alert('the value of the href attribute is:' + a)
}

