exports.index = function (req, res) {
    console.log("Index Page");
    res.render('home/index', {title: 'Home Page'});
};

