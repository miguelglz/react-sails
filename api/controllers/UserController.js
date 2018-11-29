/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  	create: function(req, res) {
  		sails.log("In Create");
	    if(req.method == "POST"){
            sails.log("Post");
            var name = req.param("name");
            var phone = req.param("phone");
            var picture = req.file("picture");
            sails.log(picture);

            var insert = `INSERT INTO users(name, phone) VALUES("${name}", ${phone})`;
            sails.log(insert);
            User.query(insert, function(err, record) {
                if(err) {
                    sails.log(err);
                    return err;
                } else {
                    return res.json(record);
                }
            });

        }

	},

	get: function(req, res) {
		User.query('SELECT * FROM users ORDER BY id DESC', [], function(err, users) {
			if (err) { return res.serverError(err); }

			// sails.log(users.rows);

			return res.json(users.rows);

		});
	}
};

