var express = require("express");
var app = express();
var multer  = require('multer');
var upload = multer({dest: 'uploads/'});
app.use(express.static(__dirname + "/view"));
app.get("/", function(req, res) {
	res.sendFile("index.html");
});
app.post("/upload", upload.single("file"), function(req, res, next) {
	if(req.file) {
		res.json({size: req.file.size});
	} else {
		res.send({err: "File not found."});
	}
});
app.listen(process.env.PORT || 3000);