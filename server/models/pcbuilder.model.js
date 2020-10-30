const mongoose = require('mongoose');

const PcBuilderSchema = new mongoose.Schema({
	name: {type: String, required: [true, "Name is required"], minlength: [3,"Type must be at least 3 characters long"]},
	description: {type: String, required: [true, "Description is required"], minlength:[3,"Type must be at least 3 characters long"]}
}, {timestamps: true});


const PcBuilder = mongoose.model("PcBuilder", PcBuilderSchema);

module.exports = PcBuilder;