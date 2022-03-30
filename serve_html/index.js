const express= require("express"),
    app = express()
    homeController = require("./controllers/HomeController");
    layouts = require("express-ejs-layouts")
    path = require("path")

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.static("views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(layouts);
app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());
app.use(homeController.logRequestPaths);

app.get("/home", homeController.sendReqParam);
app.get("/images/:image", homeController.respondwithimage);

app.post("/"), (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Sucessful!")
};

app.use(homeController.respondNoResourceFound);
app.use(homeController.respondInternalError);
app.listen( app.get("port"), () => {
    console.log(`The server has started at http://localhost:${app.get("port")}`);
});
