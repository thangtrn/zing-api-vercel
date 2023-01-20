const zingRouter = require('./zing');

const Routes = (app) => {

    app.get('/', (req, res)=> {
        res.send('<h1 style="color: red; text-align: center;">Server is on !</h1>')
    })

    app.use('/api', zingRouter);

    app.use('*', (req, res)=> {
        res.send('<h1 style="color: red; text-align: center;">Sai đường dẫn rồi! Vui lòng nhập lại >.<</h1>')
    })
}

module.exports = Routes;