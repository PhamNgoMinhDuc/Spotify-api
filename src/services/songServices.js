import db from "../models/index";

let getAllListSong = () => {
    return new Promise(async(resolve, reject) => {
        try {
            let ListSongs = await db.listsong.findAll({
                raw: true,
            });
            resolve(ListSongs);
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    getAllListSong: getAllListSong,
};