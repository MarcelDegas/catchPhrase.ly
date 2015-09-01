var express = require("express"),
bodyParser = require("body-parser"),
path = require("path")
var app = express();
var views = path.join(process.cwd(), "views/");
app.use(bodyParser.urlencoded({extended: true}));
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"))

////////////////////////////////////////////////
// routes

app.get("/", function (req, res) {
	res.sendFile(views + "index.html");
})


app.get("/phrases", function (req, res) {
	res.send(tempPhrases);
})

app.post("/phrases", function (req, res) {
	var newWord = req.body.word;// correct? 
	var newDef = req.body.definition;
	var newEntry = {
		word: newWord,
		definition: newDef
		};
	tempPhrases.push(newEntry);
	res.redirect("/");
})

///////////////////////////////////////////////////////
// from bite_me_mongo_express

// app.post("/foods", function (req, res){
//   var newFood = req.body;
//   db.Food.create(newFood, function (err, foods) {
//     if (err) {
//       console.log("Bad thing!");
//       return res.sendStatus(400);
//     }
//     res.send(foods)
//   })
// });

////////////////////////////////////////////////
// server
app.listen(3000, function () {
	console.log("Server is running!")
})


////////////////////////////////////////////////
// temp data

var tempPhrases = [
{word: "HTTP",
definition: "Hypertext tranfer protocol",},
{word: "Schema", 
definition: "the layout for a model"}];









