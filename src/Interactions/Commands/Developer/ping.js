const { SlashCommandBuilder ,ChatInputCommandInteraction, Client, EmbedBuilder } = require("discord.js");

module.exports = {
    data:  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong!"),
    /**
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction, client) {
        interaction.reply({
            content: " ",
            ephemeral: true,
            embeds: [new EmbedBuilder()
            .setDescription("🏓 Pong!")
            .setColor(client.config.color.normal),
        ]});
    }
}