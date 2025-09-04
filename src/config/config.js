module.exports = {
  prefix: process.env.PREFIX || '!',
  embedColor: '#004b95', // Vilnius Airways Color
  footer: 'Made by Vilnius Airways',
  statusMessages: {
    online: 'DM me to create a ticket!',
    idle: 'Watching for new tickets'
  },
  cooldowns: {
    commands: 3, // cooldown in seconds for normal commands
    newTicket: 60, // cooldown in seconds for creating a new ticket
    ticketMessage: 2, // cooldown in seconds between messages in an existing ticket
    staffResponse: 1 // cooldown in seconds for staff responses
  },
  ticketSettings: {
    closeConfirmation: true, // require confirmation before closing a ticket
    transcripts: true, // save ticket transcripts
    logsEnabled: true, // enable logging in a designated channel
    maxOpenTickets: 3, // maximum number of open tickets per user
    autoClose: {
      enabled: true, // automatically close inactive tickets
      inactiveHours: 72 // close tickets inactive for this many hours
    }
  },
  credits: {
    name: 'Izzy | Coders Planet',
    website: 'https://discord.gg/codersplanet'
  }
}; 
