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

            const randomFee = () => Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

            await queryInterface.bulkUpdate(
                "countries",
                {
                    // image: `/uploads/countries/image/${country.name.toLowerCase().replace(/ /g, "_")}.jpg`,
                    // flag: `/uploads/countries/flag/${country.name.toLowerCase().replace(/ /g, "_")}.png`,
                    // round_image: `/uploads/countries/roundImage/${country.name.toLowerCase().replace(/ /g, "_")}.jpg`,
                    // avatar: `/uploads/countries/avatar/${country.name.toLowerCase().replace(/ /g, "_")}.jpg`,
                    // video: `/uploads/countries/video/${country.name.toLowerCase().replace(/ /g, "_")}.mp4`,
                    visa_fee_now: randomFee(),
                    service_fee_now: randomFee(),
                    visa_fee_later: randomFee(),
                    service_fee_later: randomFee(),
                    get_a_guaranteed_visa_on : Math.floor(Math.random() * (100 - 1 + 1)) + 1,
                    chances_of_approval_for_this: Math.round(Math.random()),
                    chances_of_approval_for_other: Math.round(Math.random()),
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
