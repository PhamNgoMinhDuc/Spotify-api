"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("listsongs", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            author: {
                type: Sequelize.STRING,
            },
            url: {
                type: Sequelize.STRING,
            },
            img_song: {
                type: Sequelize.STRING,
            },
            img_author: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("listsongs");
    },
};