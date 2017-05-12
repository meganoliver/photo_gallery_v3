/* To do:
  1. Read what's typed into the searchbox (lowercase).
  2. Compare that to the "data-title" attributes.
  3. If they match, show the img, else take picture away.
  4. If no match, alert that there are no matches.
*/

var search
var captions = []


//Take input & put into var (lowercase)
$('#search-box').on('keyup', function() {
  var search = $(this).val();
  search = search.toLowerCase();
  console.log(search); //Testing that it works
});

//Put all img & captions in an array

var captions = $("img").toArray();
console.log(captions); //Testing that it works

//Loop through the array

for (var i = 0; i < captions.length; i += 1) {
  if (search === captions) {
    $("captions").show()
  }
  else {
    $("captions").hide()
  }
}
