import db from "../models/index";

let getAllSong = () => {
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

let createNewSong = async(data) => {
    return new Promise(async(resolve, reject) => {
        try {
            await db.listsong.create({
                name: data.name,
                author: data.author,
                url: data.url,
                img_song: data.imgSong,
                img_author: data.imgAuthor,
            });

            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

let getUserInforById = (idSong) => {
    return new Promise(async(resolve, reject) => {
        try {
            let song = await db.listsong.findOne({
                where: { id: idSong },
                raw: true,
            });

            if (song) {
                resolve(song);
            } else {
                resolve({});
            }
            resolve(song);
        } catch (e) {
            reject(e);
        }
    });
};

let updateUserData = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let Song = await db.listsong.findOne({
                where: { id: data.id },
            });

            if (Song) {
                /*                 Song.name = data.name;
                                                Song.author = data.author;
                                                Song.url = data.url;
                                                Song.img_song = data.imgSong;
                                                Song.img_author = data.imgAuthor; */

                await db.listsong.update({
                    name: data.name,
                    author: data.author,
                    url: data.url,
                    img_song: data.imgSong,
                    img_author: data.imgAuthor,
                }, { where: { id: data.id } });

                let allUser = await db.listsong.findAll({
                    raw: true,
                });
                resolve(allUser);
            } else {
                resolve();
            }
        } catch (e) {
            reject(e);
        }
    });
};

let deleteUserId = (songId) => {
    return new Promise(async(resolve, reject) => {
        try {
            let song = await db.listsong.findOne({
                where: { id: songId },
            });

            if (song) {
                await db.listsong.destroy({
                    where: { id: songId },
                });

                let allUser = await db.listsong.findAll({
                    raw: true,
                });
                resolve(allUser);
            } else {
                resolve();
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createNewSong: createNewSong,
    getAllSong: getAllSong,
    getUserInforById: getUserInforById,
    updateUserData: updateUserData,
    deleteUserId: deleteUserId,
};