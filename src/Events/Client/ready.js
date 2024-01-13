const { Client } = require("discord.js");
const { loadCommands } = require("../../Structures/Handlers/commandHandler");
const { loadButtons } = require("../../Structures/Handlers/buttonHandler");
const { loadSelectMenus } = require("../../Structures/Handlers/selectMenuHandler");
const { loadModals } = require("../../Structures/Handlers/modalHandler");

module.exports = {
    name: "ready",
    once: true,
    /**
     * @param {Client} client 
     */
    async execute(client) {
        // Bot Status
        client.user.setPresence({
            activities: [{ name: "Husky Dev Bot" }]
        });

        // MongoDB
        const { connect } = require("mongoose");
        await connect(client.config.databaseURL, {})
        .then(() => console.log("Der Client ist nun mit der Datenbank verbunden"));

        //Läd alle anderen Handler
        await loadCommands(client);
        await loadButtons(client);
        await loadSelectMenus(client);
        await loadModals(client);

        console.log(`Client angemeldet als: ${client.user.username}`);
    }
}