import mongoose, { Schema } from 'mongoose'

const ProductSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, trim: true },
    discountPrice: { type: Number },
    countInStock: { type: Number, required: true, default: 0 },
    sku: { type: String },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    sizes: { type: [String], required: true },
    colors: { type: [String], required: true },
    collection: { type: String, required: true },
    material: { type: String },
    gender: { type: String, enum: ['Men', 'Women', 'Unisex'] },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        altText: { type: String },
      },
    ],
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    tags: [String],

    metaTitle: {
      type: String,
    },
    metaDescription: {
      type: String,
    },
    metaKeywords: {
      type: String,
    },
    dimensions: {
      length: Number,
      width: Number,
      height: Number,
    },
    weight: Number,
  },
  { timestamps: true }
)

export default mongoose.model('Product', ProductSchema)
