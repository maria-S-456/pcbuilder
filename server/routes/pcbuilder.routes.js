const pcbuilder = require("./../controllers/pcbuilder.controller");
//const cpu = require("./../controllers/pcbuilder.controller");

module.exports = (app) => {
	app.get("/api/pcbuilder", pcbuilder.getAll);
	app.get("/api/pcbuilder/:id", pcbuilder.getOne);
	app.post("/api/pcbuilder", pcbuilder.create);
	//app.post("/api/cpu", cpu.createCpu);
	app.put("/api/pcbuilder/:id", pcbuilder.update);
	app.delete("/api/pcbuilder/:id", pcbuilder.delete);
};