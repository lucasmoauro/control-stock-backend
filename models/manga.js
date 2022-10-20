const { Schema, model } = require("mongoose");

const MangaSchema = Schema({
	nivel: {
		type: String,
		required: [true, "El nivel es obligatorio"],
	},
	pasillo: {
		type: String,
		required: [true, "El pasillo es obligatorio"],
	},
	titulo: {
		type: String,
		required: [true, "El titulo es obligatorio"],
	},
	deposito: {
		type: String,
		required: [true, "El deposito es obligatorio"],
	},
	seccion: {
		type: String,
		required: [true, "La seccion es obligatoria"],
	},
	categoria: {
		type: String,
		default: "manga",
	},
	stock: {
		type: Boolean,
		required: [true, "El stock es obligatorio"],
		default: true,
	},
	cantidad: {
		type: String,
		default: "0",
	},
	estado: {
		type: String,
		default: "En curso",
	},
});

MangaSchema.methods.toJSON = function () {
	const { __v, _id, ...manga } = this.toObject();
	manga.id = _id;

	return manga;
};

module.exports = model("Manga", MangaSchema);
