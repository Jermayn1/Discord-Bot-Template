const { EmbedBuilder, ModalSubmitInteraction, PermissionFlagsBits, Client } = require("discord.js");

module.exports = {
    id: "testModal",
    developer: true,
    permission: PermissionFlagsBits.Administrator,
    /**
     * @param {ModalSubmitInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
    const output = interaction.fields.getField("test_Modal").value;

    await interaction.reply({
        ephemeral: true,
        embeds: [ new EmbedBuilder()
            .setColor(client.config.color.normal)
            .setDescription(`✅  Dieses Modal funktionert!`)
            .addFields({ name: "Eingabe", value: output })]
        });
    }
}