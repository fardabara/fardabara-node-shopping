

module.exports = function (app) {

    app.get('/', require('../controllers/homeController').index);
    app.get('/user/:id', require('../controllers/userController').userFindById);

};