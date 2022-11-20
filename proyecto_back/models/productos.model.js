const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    referencia:{type: String, required: true, max:10},
    nombre:{type: String, required: true, max:40},
    descripcion:{type: String, required: true, max:200},
    valor:{type: String, required: true, max:15},
    
});

module.exports = mongoose.model("productos",ProductosSchema);