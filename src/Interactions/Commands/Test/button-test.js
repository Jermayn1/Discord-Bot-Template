const { SlashCommandBuilder ,ChatInputCommandInteraction, Client, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    developer: true,
    data:  new SlashCommandBuilder()
    .setName("test-button")
    .setDescription("Testet den Button Handler"),
    /**
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction, client) {

        const test = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId("testButton")
            .setLabel("Test Button")
            .setStyle(ButtonStyle.Success)
        )

        interaction.reply({
            content: " ",
            ephemeral: true,
            embeds: [new EmbedBuilder()
            .setDescription("Test Button Handler")
            .setColor(client.config.color.normal)],
            components: [test]
        });
    }
}