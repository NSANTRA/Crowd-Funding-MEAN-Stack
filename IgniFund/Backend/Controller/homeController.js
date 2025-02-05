const startcampaignget = (req, res) => {
    res.render("StartCampaign", { message: null });
}

const donateget = (req, res) => {
    res.render("Donate", { message: null });
}

const browseget = (req, res) => {
    res.render("Browse", { message: null });
}

module.exports = { startcampaignget, donateget, browseget };