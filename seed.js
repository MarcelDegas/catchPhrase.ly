var db = require("./models")


// DATA //
var tempPhrases = [
{word: "HTTP",
definition: "Hypertext tranfer protocol",},
{word: "Schema", 
definition: "the layout for a model"}];


//starter code in here
db.Food.remove({}, function(err, foods) {

	db.Food.create(foods_list, function(err, foods) {
		if(err) return console.log(err);
		console.log(foods_list)
		// process.exit();
	})
});