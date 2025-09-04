// src/commands/admin/forceclose.js

const { SlashCommandBuilder } = require('discord.js');
const Ticket = require('../../schemas/Ticket');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('forceclose')
    .setDescription('Force close a user\'s open ticket')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user whose ticket to close')
        .setRequired(true)),
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const guild = interaction.guild;

    // Check if the user has an open ticket
    const ticket = await Ticket.findOne({ userId: user.id, guildId: guild.id, closed: false });

    if (!ticket) {
      return interaction.reply({ content: 'This user does not have an open ticket.', ephemeral: true });
    }

    // Delete the ticket record
    await Ticket.deleteOne({ _id: ticket._id });

    // Inform the administrator
    return interaction.reply({ content: `Successfully closed the open ticket for ${user.tag}.`, ephemeral: true });
  },
};
