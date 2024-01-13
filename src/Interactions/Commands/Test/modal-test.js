const { SlashCommandBuilder ,ChatInputCommandInteraction, Client, TextInputBuilder, TextInputStyle, ActionRowBuilder, ModalBuilder } = require("discord.js");

module.exports = {
    developer: true,
    data:  new SlashCommandBuilder()
    .setName("test-modal")
    .setDescription("Testet den Modal Handler"),
    /**
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const inputField = new TextInputBuilder()
        .setCustomId("test_Modal")
        .setLabel("Test Modal Handler")
        .setPlaceholder("Test Modal Eingabe")
        .setMaxLength(250)
        .setMinLength(1)
        .setStyle(TextInputStyle.Paragraph);

        const testModalInput = new ActionRowBuilder()
        .addComponents(inputField);

        const modal = new ModalBuilder()
        .setCustomId("testModal")
        .setTitle("Test Modal Handler")
        .addComponents(testModalInput);

        await interaction.showModal(modal);
    }
}