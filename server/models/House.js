import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
  {
    imgUrl: { type: String, required: true },
    beds: { type: Number, required: true },
    baths: { type: Number, required: true },
    price: { type: Number, required: true },
    year: { type: Number, required: true },
    levels: { type: Number},
    description: { type: String}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default House;