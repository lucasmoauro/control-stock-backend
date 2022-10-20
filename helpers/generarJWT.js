const jwt = require("jsonwebtoken");

const generarJWT = (token) => {
	return new Promise((resolve, reject) => {
		jwt.sign(
			{ uid: token },
			process.env.SECRETORPRIVATEKEY,
			{
				expiresIn: "30m",
			},
			(err, token) => {
				if (err) {
					console.log(err, "err");
					reject("No se pudo generar el token");
				} else {
					resolve(token);
				}
			}
		);
	});
};

module.exports = {
	generarJWT,
};
