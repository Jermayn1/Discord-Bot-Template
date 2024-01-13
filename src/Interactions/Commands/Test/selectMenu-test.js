const { SlashCommandBuilder ,ChatInputCommandInteraction, Client, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");

module.exports = {
    developer: true,
    data:  new SlashCommandBuilder()
    .setName("test-select-menu")
    .setDescription("Testet den Select-Menu Handler"),
    /**
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction, client) {

        const test = new ActionRowBuilder()
        .addComponents(
            new StringSelectMenuBuilder()
            .setCustomId('testSelectMenu')
            .setPlaceholder("Dein Platzhalter!")
            .addOptions({
                label: "Das ist in Label",
                description: "Das ist eine Beschreibung",
                value: "first_option"
            }, {
                label: "Das ist auch ein Label",
                description: "Das ist auch eine Beschreibung",
                value: "second_option"
            }, {
                label: "Das ist ein drittes Label",
                description: "Das ist eine dritte Beschreibung",
                value: "third_option"
            })
        )

        interaction.reply({
            ephemeral: true,
            embeds: [new EmbedBuilder()
            .setDescription("Test Select-Menu Handler")
            .setColor(client.config.color.normal)],
            components: [test]
        });
    }
}