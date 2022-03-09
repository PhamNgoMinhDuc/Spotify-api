"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Users", [{
            name: "duc",
            author: "mduc",
            url: "https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3",
            img_song: "https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576",
            img_author: "https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("listsong", null, {});
    },
};