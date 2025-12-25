"use strict";
 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem(arr) {
    return arr[getRandomInt(0, arr.length - 1)];
}

function getRandomLorem() {
    const lorem = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        "Excepteur sint occaecat cupidatat non proident. Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
        "Nullam varius, turpis et commodo pharetra. Etiam tempor, urna eu pellentesque dictum."
    ];
    return getRandomItem(lorem);
}

const names = [
    "Juhi", "Amit", "Sara", "John", "Priya", "David", "Anjali", "Michael", "Riya", "Chris",
    "Neha", "Alex", "Simran", "Sam", "Karan", "Emily", "Raj", "Olivia", "Vikram", "Sophia"
];
const designations = [
    "Manager", "Developer", "Designer", "Consultant", "Analyst", "Engineer", "Director", "Lead", "Coordinator", "Specialist"
];
const companies = [
    "TechCorp", "InnovateX", "DesignHub", "FinSolutions", "MarketMakers", "CloudBase", "DataWorks", "VisionSoft", "NextGen", "PrimeLogic"
];
const companyLogos = [
    "/logos/techcorp.png", "/logos/innovatex.png", "/logos/designhub.png", "/logos/finsolutions.png",
    "/logos/marketmakers.png", "/logos/cloudbase.png", "/logos/dataworks.png", "/logos/visionsoft.png",
    "/logos/nextgen.png", "/logos/primelogic.png"
];
const images = [
    "/profiles/1.png", "/profiles/2.png", "/profiles/3.png", "/profiles/4.png", "/profiles/5.png",
    "/profiles/6.png", "/profiles/7.png", "/profiles/8.png", "/profiles/9.png", "/profiles/10.png"
];

module.exports = {
    up: async (queryInterface, Sequelize) => {
   
        await queryInterface.bulkDelete("testimonials", null, {});

        const testimonials = [];
        for (let i = 0; i < 20; i++) {
            testimonials.push({
                name: getRandomItem(names),
                description: getRandomLorem(),
                image: getRandomItem(images),
                designation: getRandomItem(designations),
                company: getRandomItem(companies),
                company_logo: getRandomItem(companyLogos),
                rating: getRandomInt(3, 5),
                is_active: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }

        await queryInterface.bulkInsert("testimonials", testimonials, {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("testimonials", null, {});
    },
};
