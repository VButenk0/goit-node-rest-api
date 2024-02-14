import { Schema, model } from "mongoose";
import { haveSaveError, setUpdateSetting } from "./hooks";

const contactSchema = new Schema(
  {
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
