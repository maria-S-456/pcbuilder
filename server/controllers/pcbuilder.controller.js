const PcBuilder = require("./../models/pcbuilder.model");

module.exports = {
	getAll:(req, res) => {
		PcBuilder.find()
		.then(parts => res.json(parts))
		.catch((err) => res.json(err));
	},
	getOne:(req, res) => {
		PcBuilder.findById(req.params.id) 
		.then((part) => res.json(part))
		.catch((err) => res.json(err));
	},
	create:(req, res) => {
		console.log(req.body);
		PcBuilder.create(req.body)
		.then((part) => res.json(part))
		.catch((err) => res.json(err));
	},
	update: (req, res) => {
		PcBuilder.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators:true})
		.then((part) => res.json(part))
		.catch((err) => res.json(err));
	},
	delete: (req, res) => {
		PcBuilder.findByIdAndRemove(req.params.id)
		.then((message) => res.json(message))
		.catch((err) => res(err));
	}
}