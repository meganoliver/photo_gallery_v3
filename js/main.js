/* To do:
  1. Read what's typed into the searchbox (lowercase).
  2. Compare that to the "data-title" attributes.
  3. If they match, show the img, else take picture away.
  4. If no match, alert that there are no matches.
*/

var result;
var search;
var captions = [];


$('#search-box').on('keyup', function() {
  var search = $(this).val();
  search = search.toLowerCase();
  console.log(search);  //Testing that 'var search' works
});
//Put all img & captions in an array

captions.caption = $('#list img').map(function() {
  return $(this).attr('alt');
});

captions.list = $('#list li');

console.log(captions);


//Take input & put into var (lowercase)
$('#search-box').on('keyup', function() {
  for (var i = 0; i < captions.caption.length; i += 1) {
      result = captions.caption[i].toLowerCase().indexOf(search);
      console.log(result);
    }
});



// Loop through the array

/*

if () {
  $(captions.list[i]).show();
}  else {
  $(captions.list[i]).hide();
  }
}
*/
