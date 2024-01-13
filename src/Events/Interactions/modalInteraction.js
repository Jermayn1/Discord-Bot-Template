const { EmbedBuilder, ModalSubmitInteraction, Client } = require("discord.js");
  
module.exports = {
    name: "interactionCreate",
    /**
     * @param {ModalSubmitInteraction} interaction 
     * @param {Client} client 
     * @returns 
     */
        async execute(interaction, client) {
        if (!interaction.isModalSubmit()) return;
    
        const modal = client.modals.get(interaction.customId);

        const response = new EmbedBuilder()
        .setColor(client.config.color.normal)

        if (!modal || modal == undefined) return interaction.reply({
            ephemeral: true,
            embeds: [response.setDescription("🧙  Dieses Modal ist outdated.")]
        });

        if (modal.developer && !client.config.developer[interaction.user.id]) return interaction.reply({
            ephemeral: true,
            embeds: [response.setDescription("👨‍🚀  Dieses Modal ist nur für Entwickler verfügbar.")]
        });

        if (modal.permission && !interaction.member.permissions.has(modal.permission)) return interaction.reply({
            ephemeral: true,
            embeds: [ embed.setDescription( `😵‍💫  Du hast nicht die erforderlichen Brechtigungen, um dieses Modal zu verwenden.`) ]
        });

        modal.execute(interaction, client);
    }
};