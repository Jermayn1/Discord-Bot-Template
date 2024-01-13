const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    async execute(interaction, client) {
        if (!interaction.isButton()) return;

        const button = client.buttons.get(interaction.customId);

        const response = new EmbedBuilder()
        .setColor(client.config.color.normal)

        if (!button || button == undefined) return interaction.reply({
            ephemeral: true,
            embeds: [response.setDescription("🧙  Dieser Button ist outdated.")]
        });

        if (button.developer && !client.config.developer[interaction.user.id]) return interaction.reply({
            ephemeral: true,
            embeds: [response.setDescription("👨‍🚀  Dieser Button ist nur für Entwickler verfügbar.")]
        });

        if (button.permission && !interaction.member.permissions.has(button.permission)) return interaction.reply({
            ephemeral: true,
            embeds: [ embed.setDescription(`😵‍💫  Du hast nicht die erforderlichen Brechtigungen, um diesen Button zu verwenden.`) ]
        });

        button.execute(interaction, client);
    }
}