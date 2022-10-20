const { Router } = require("express");
const { param, body } = require("express-validator");
const {
	mangasGet,
	mangaGet,
	mangaDelete,
	mangaPut,
	mangaPost,
	mangaPatch,
	mangaQTYPatch,
	mangaStatePatch,
	// mangaQTYPatch,
} = require("../controllers/mangas.controller");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validarJWT");

const router = Router();

//Trae todos los mangas
router.get("/", mangasGet);

//Crea un manga
router.post(
	"/",
	[
		validarJWT,
		body("titulo", "El titulo es obligatorio").not().isEmpty(),
		body("nivel", "El nivel es obligatorio").not().isEmpty(),
		body("deposito", "El deposito es obligatorio").not().isEmpty(),
		body("pasillo", "El pasillo es obligatorio").not().isEmpty(),
		body("seccion", "La seccion es obligatoria").not().isEmpty(),
		validarCampos,
	],
	mangaPost
);

//Trae un solo manga
router.get(
	"/:id",
	[param("id").not().isEmpty(), param("id").isMongoId(), validarCampos],
	mangaGet
);

//Actualiza un manga
router.put(
	"/:id",
	[
		validarJWT,
		param("id", "El id es obligatorio").not().isEmpty(),
		param("id", "No es un id valido").isMongoId(),
		body("titulo", "El titulo es obligatorio").not().isEmpty(),
		body("nivel", "El nivel es obligatorio").not().isEmpty(),
		body("deposito", "El deposito es obligatorio").not().isEmpty(),
		body("pasillo", "El pasillo es obligatorio").not().isEmpty(),
		body("seccion", "La seccion es obligatoria").not().isEmpty(),
		validarCampos,
	],
	mangaPut
);

//Actualiza el estado del stock de un manga
router.patch(
	"/:id",
	[
		validarJWT,
		param("id", "El id es obligatorio").not().isEmpty(),
		param("id", "No es un id valido").isMongoId(),
		validarCampos,
	],
	mangaPatch
);
//Actualiza el estado del stock de un manga
router.patch(
	"/qty/:id",
	[
		validarJWT,
		param("id", "El id es obligatorio").not().isEmpty(),
		param("id", "No es un id valido").isMongoId(),
		validarCampos,
	],
	mangaQTYPatch
);
//Actualiza el estado de un manga
router.patch(
	"/state/:id",
	[
		validarJWT,
		param("id", "El id es obligatorio").not().isEmpty(),
		param("id", "No es un id valido").isMongoId(),
		validarCampos,
	],
	mangaStatePatch
);

//Elimina un manga
router.delete(
	"/:id",
	[
		validarJWT,
		param("id").not().isEmpty(),
		param("id").isMongoId(),
		validarCampos,
	],
	mangaDelete
);

module.exports = router;
