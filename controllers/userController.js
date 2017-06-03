exports.userFindById = function (req, res) {
    console.log("User Page");
    res.render('home/user', {title: 'User Page', user_id : req.params.id});
};