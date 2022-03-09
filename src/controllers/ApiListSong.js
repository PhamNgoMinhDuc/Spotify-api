import userServices from "../services/songServices";

let handleGetListSong = async(req, res) => {
    let listsong = await userServices.getAllListSong();

    return res.status(200).json({
        errCode: 0,
        errmessage: "0k",
        listsong,
    });
};

module.exports = {
    handleGetListSong: handleGetListSong,
};