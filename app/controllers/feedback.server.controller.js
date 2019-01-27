exports.render = (request, response) => {
    const email = request.session.email ? request.session.email : '';
    response.render('feedback', { email: email });
}