module.exports = (app) => {
    const index = require('../controllers/index.server.controller');
    const feedback = require('../controllers/feedback.server.controller');
    const thankyou = require('../controllers/thankyou.server.controller');

    app.get('/', index.render);
    app.post('/', (request, response) => {
        index.render(request, response);
    });
    app.get('/feedback', feedback.render);
    app.post('/feedback', thankyou.render);
}