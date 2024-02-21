import { Schema, model } from "mongoose";
import { haveSaveError, setUpdateSetting } from "./hooks.js";

const contactSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

contactSchema.post("save", haveSaveError);

contactSchema.pre("findOneAndUpdate", setUpdateSetting);

contactSchema.post("findOneAndUpdate", haveSaveError);

const Contact = model("contact", contactSchema);

export default Contact;
