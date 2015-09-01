
function renderFoods(foods) {
  template = _.template($("#foods-template").html());
  // input foods into template and append to parent
  foodItems = foods.map(function(food) {
    return template(food);
  });
  // clear content (for repeated use)
  $("#food-ul").html("");
  // append foods to ul
  $("#food-ul").append(foodItems);
}

/////////////////////////////////////////////////////////
// underscore templating

function renderPhrases(phrases) {
	template = _.template($("#foods-template").html());

}
function getPhrases () {
	$.get("/phrases", function (response_data) {
		practice = response_data[1].word
		$("div").append('<p>' + practice + '</p>');
	});
}

//next: finish how to make this get and post data from the client side.

$(document).ready(function () {
	getPhrases();
	$function () {
		var phraseTemplate = _template($("#phrases-template").html());
	}
})
