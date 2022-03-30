//handle errors
const httpStatus = require("http-status-codes");

exports.respondNoResourceFound = (req, res) => {
    let errorCode = httpStatus.StatusCodes.NOT_FOUND;
    res.status(errorCode);
    res.send(`${errorCode} | The page requested does not exist!`);
};

exports.respondInternalError =(error, req, res, next) => {
    let errorCode= httpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occured: ${error.stack}`)
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
};

//log the URL acessed
exports.logRequestPaths =(req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
};
//home
exports.sendReqParam = (req, res) => {
    let home= req.params.home;
    res.render('home', {layout: 'home'})
};

//images/x
exports.respondwithimage= (req, res) => {
    let paramimg = req.params.image;
    res.render("picture",{layout: "picture"});
    //res.render("picture", {name: paramimg});
};

