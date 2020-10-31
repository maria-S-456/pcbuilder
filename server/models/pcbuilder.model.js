const mongoose = require('mongoose');

const PcBuilderSchema = new mongoose.Schema({
	name: {type: String, required: [true, "Name is required"]},
	type: {type: String, required:[true, "Type is required"]},

	// GPU	
	brand:{type: String},
    interface:{type: String},
    chipset:{type: String},
    effectiveMemory:{type: String},
    memorySize:{type: String},
    memoryInterface:{type: String},
    memoryType:{type: String},
    url:{type: String, required: [true, "Url is required"]},

    //Motherboard
    mbmodel: {type: String},
    cpuSocketType: {type: String},
    chipset: {type: String},
    numMemSlots: {type: String},
    maxMemory: {type: String},

    //Case
    series: {type: String},
    caseType: {type: String},
    color: {type: String},
    caseMaterial: {type: String},
    powerSupplyMount: {type: String},
    motherboardComp: {type: String},
    sidePanel: {type: String},
    internal3point5: {type:String},
    internal2point5: {type:String},
    dimensions: {type: String},

    //PSU
    psuType: {type:String},
    maxPower: {type: String},
    psuFans: {type: String},
    mainConnector: {type:String},
    pciExpressConnector: {type: String},
    sataPowerConnector: {type: String},
    maxPsuLength: {type: String}
}, {timestamps: true});

const PcBuilder = mongoose.model("PcBuilder", PcBuilderSchema, "pcparts");

module.exports = PcBuilder;