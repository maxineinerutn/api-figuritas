import mongoose from "mongoose";

const FiguritaSchema = new mongoose.Schema({
  pais: { type: String, required: true },
  nombre: { type: String, required: true },
  imagen: { type: String, required: true },
  precio: { type: Number, required: true },
}, { 
    timestamps: false,
  collection: "figuritas"
});

export default mongoose.model("Figurita", FiguritaSchema);
