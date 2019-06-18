const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM movie', (err, movies) =>
        {
            if(err)
            {
                res.json(err);
            }
            console.log(movies);
            res.render('home', {
                data: movies
            });
        });
    });
};


module.exports = controller;