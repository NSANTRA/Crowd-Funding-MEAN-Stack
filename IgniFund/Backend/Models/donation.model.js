const mongo = require('mongoose')

const donationSchema = mongo.Schema({
    donationId:{
        // We should implement autoincrement for this one 
        type:Number, 
        require:true,
    },
    campaignId:{
        type:String,
        require: true,
    },
    userId:{
        type:String,
        require:true,
    },
    amountDonated:{
        type:Number,
        require:true,
    },
    paymentVia:{
        // Iska default Value lena padega Probably. not sure tho (note: This is different from payment method)
        type:String,
        require:true,
    }
})

module.exports = mongo.model('Donation', donationSchema)