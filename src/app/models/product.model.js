import mongoose, { Schema, model, models } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const ProductSchema = new Schema(
	{
		category: { type: String },
		descripcion: { type: String },
		nombre: { type: String },
		precio: { type: Number },
		precioViejo: { type: Number },
		promocion: { type: Boolean },
		stock: { type: Number },
		titulo: { type: String },
		url: { type: String },
	},
	{ timestamps: true },
);
ProductSchema.plugin(mongoosePaginate);

export const Product = models?.Product || model('Product', ProductSchema);
