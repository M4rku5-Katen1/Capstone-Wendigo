// Declaring Array
var itemsArray = [""];
// Turning array into string so it can be worked with local storage
JSON.stringify(itemsArray);

// Function that puts the id of the button that you clicked on the shopping page inside the array
function addToCart(itemNumber) {
  // alert(itemNumber);
  localStorage.setItem(itemNumber, JSON.stringify(itemsArray));
  // alert(JSON.stringify(itemsArray));
}
// When checkout page is loaded Generate page function is ran
if (window.location.href.match('checkout.html') != null) {
  generatePage();
}

// Function that gets the strings out of the arrays and displays the corresponding item div 
function generatePage() {
  // alert("linked");
  for ( var i = 0, len = localStorage.length; i < len; ++i ) {
    // alert( localStorage.getItem( localStorage.key( i ) ) );
  };
  document.getElementById("result").innerHTML = items;
  if (items.style.display === 'none') {
      items.style.display = 'block';
  } else {
      items.style.display = 'none';
  }
}
