"use strict";

const { LoremIpsum } = require("lorem-ipsum");
const { QueryTypes } = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("Faqs", null, {});

        const lorem = new LoremIpsum({
            sentencesPerParagraph: {
                max: 4,
                min: 2,
            },
            wordsPerSentence: {
                max: 10,
                min: 4,
            },
        });

        // Fetch countries from DB
        const countries = await queryInterface.sequelize.query(
            `SELECT id, name FROM countries`,
            { type: QueryTypes.SELECT }
        );

        // Define FAQ types here
        const faqTypes = [
            "user_home",
            'agent_home',
            "about_us",
            "contact_us",
            "country_detail",
            "us_visa_mock_interview",
            "transparency_hub",
            "ds_160",
            "schengen_appointment_checker",
            "schengen_cover_letter",
            "schengen_invitation_letter",
            "uae_visa_status_online",
            "vietnam_visa_status_checker",
            "visa_eligibility_quiz",
            "visa_glossary",
            "visa_glossary_adjustment_of_status",
            "visa_photo_maker",
        ];

        // Add country-specific faqTypes
        const countryFaqTypes = countries.map(c => ({
            type: `country_${c.id}`,
            countryName: c.name
        }));

        const faqs = [];

        faqTypes.forEach((type) => {
            for (let i = 0; i < 10; i++) {
                faqs.push({
                    question: lorem.generateSentences(1),
                    answer: lorem.generateParagraphs(1),
                    type: type,
                    is_active: true,
                    is_deleted: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                });
            }
        });

        // Add FAQs for each country
        countryFaqTypes.forEach(({ type, countryName }) => {
            for (let i = 0; i < 10; i++) {
                faqs.push({
                    question: `FAQ for ${countryName}: ${lorem.generateSentences(1)}`,
                    answer: lorem.generateParagraphs(1),
                    type: type,
                    is_active: true,
                    is_deleted: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                });
            }
        });

        await queryInterface.bulkInsert("Faqs", faqs, {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("Faqs", null, {});
    },
};
