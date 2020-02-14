const mongoose = require("mongoose");

const {
    Schema,
    model
} = mongoose;

const bpiSchema = new Schema({
    bpi: {
        type: Number
    },
    disclaimer: {
        type: String
    }
}, {
    timestamps: true
});

const Bpi = model("Bpi", bpiSchema);
module.exports = Bpi;