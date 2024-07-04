import mongoose, { Schema, model, models } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const ProgramSchema = new Schema(
	{
		titulo: { type: String },
		descripcion: { type: String },
		iframePrograma: { type: String },
		imagen: { type: String },
		fecha: { type: String },
	},
	{ timestamps: true },
);
ProgramSchema.plugin(mongoosePaginate);

export const Program = models?.Program || model('Program', ProgramSchema);
