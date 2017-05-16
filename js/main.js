var result;
var captions = {};

// Create an object for captions and list items:
captions.caption = $('#list img').map(function() {
  return $(this).attr('alt');
});
captions.list = $('#list li');
console.log(captions);

//While typing....
$('#search-box').on('keyup', function() {
  var search = $(this).val();
  search = search.toLowerCase();
  console.log(search);  //Testing that 'var search' works
//Create a for loop:
  for (var i = 0; i < captions.caption.length; i += 1) {
      result = captions.caption[i].toLowerCase().indexOf(search);
      console.log(result);
//Create an if/if else loop:
      if (result > 1 || result === 0) {
        $(captions.list[i]).show();
      }

      else {
        $(captions.list[i]).hide();
        }
    }
});
