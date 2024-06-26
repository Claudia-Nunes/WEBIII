import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Nome é obrigatório"],
    },
  },
  {
    toJSON: {
      transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

const Model = mongoose.model("Category", CategorySchema, "categories");

export default Model;
