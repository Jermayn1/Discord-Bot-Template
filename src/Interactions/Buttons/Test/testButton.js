const { EmbedBuilder, PermissionFlagsBits, ChatInputCommandInteraction, Client } = require("discord.js");

module.exports = {
    id: "testButton",
    developer: true,
    permission: PermissionFlagsBits.Administrator,
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction, client) {
        interaction.reply({
            embeds: [ new EmbedBuilder().setDescription(`✅  Der Button Handler funktionert!`).setColor(client.config.color.normal) ],
            ephemeral: true
        });
    }
}
