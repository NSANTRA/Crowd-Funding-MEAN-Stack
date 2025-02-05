const mongo = require('mongoose')

const campaignSchema = new mongo.Schema({
    campaignId:{
        type:String,
        require: true,
    },
    userId:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
        // we should set max length for this. neel your thoughts?
    },
    targetAmount:{
        type:Number,
        require:true,
    },
    collectedAmount:{
        type:Number,
        require:true,
    },
    est:{
        type: Date,
        default: Date.now,
    },
    endDate:{
        type:Date,
        require:true,
    }
})

module.exports = mongo.model('Campaign', campaignSchema)