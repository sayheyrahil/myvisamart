"use strict";

const { QueryTypes } = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        // Fetch all countries with id and name
        const countries = await queryInterface.sequelize.query(
            `SELECT id, name FROM countries`,
            { type: QueryTypes.SELECT }
        );

        for (const country of countries) {
            await queryInterface.bulkUpdate(
                "countries",
                {
                    image: `/uploads/countries/image/${country.name.toLowerCase().replace(/ /g, "_")}.jpg`,
                    flag: `/uploads/countries/flag/${country.name.toLowerCase().replace(/ /g, "_")}.jpg`,
                    avatar: `/uploads/countries/avatar/${country.name.toLowerCase().replace(/ /g, "_")}.jpg`,
                    video: `/uploads/countries/video/${country.name.toLowerCase().replace(/ /g, "_")}.jpg`,
                    updatedAt: new Date(),
                },
                { id: country.id }
            );
        }
    },

    down: async (queryInterface, Sequelize) => {
        // Optionally revert the changes (set fields to NULL or previous values if tracked)
        await queryInterface.bulkUpdate(
            "countries",
            {
                image: null,
                icon: null,
                subtitle: null,
                rating: null,
                updatedAt: new Date(),
            },
            {}
        );
    },
};
