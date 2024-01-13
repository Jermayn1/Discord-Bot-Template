const { EmbedBuilder, PermissionFlagsBits, ChatInputCommandInteraction, Client } = require("discord.js");

module.exports = {
    id: "testSelectMenu",
    developer: true,
    permission: PermissionFlagsBits.Administrator,
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction, client) {
        const values = interaction.values;

        console.log(values);

        const Response = new EmbedBuilder()
        .setColor(client.config.color.normal)
        .setTitle("Select Menu Handler Test!")

        switch (values[0]) {
            case 'first_option': interaction.reply({ embeds: [Response.setDescription("✅  Erfolgreich die erste Option ausgewählt!")], ephemeral: true });
            break;
        
            case 'second_option': interaction.reply({ embeds: [Response.setDescription("✅  Erfolgreich die zweite Option ausgewählt!")], ephemeral: true });
            break;
        
            case 'third_option': interaction.reply({ embeds: [Response.setDescription("✅  Erfolgreich die dritte Option ausgewählt!")], ephemeral: true });
            break;
        }
    }
}
