const { EmbedBuilder, ChatInputCommandInteraction, Client } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     * @returns 
     */
    async execute(interaction, client) {
        if (!interaction.isAnySelectMenu()) return;
            
        const selectMenu = client.selectMenus.get(interaction.customId);

        const response = new EmbedBuilder()
        .setColor(client.config.color.normal)

        if (!selectMenu || selectMenu == undefined) return interaction.reply({
            ephemeral: true,
            embeds: [response.setDescription("🧙  Dieses Select-Menu ist outdated.")]
        });

        if (selectMenu.developer && !client.config.developer[interaction.user.id]) return interaction.reply({
            ephemeral: true,
            embeds: [response.setDescription("👨‍🚀  Dieses Select-Menu ist nur für Entwickler verfügbar.")]
        });

        if (selectMenu.permission && !interaction.member.permissions.has(selectMenu.permission)) return interaction.reply({
            ephemeral: true,
            embeds: [ embed.setDescription( `😵‍💫  Du hast nicht die erforderlichen Brechtigungen, um dieses Select-Menu zu verwenden.`) ]
        });

        await selectMenu.execute(interaction, client);
    },
};