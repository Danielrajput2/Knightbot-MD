async function aliveCommand(sock, chatId) {
    try {
        const message = `*KING B2K Bot ✓ is Active Babe!*\n\n` +
                       `*Version:* 1.0.0\n` +
                       `*Status:* Online\n` +
                       `*Mode:* Public\n\n` +
                       `*Features:*\n` +
                       `• Group Management\n` +
                       `• Antilink Protection\n` +
                       `• Fun Commands\n` +
                       `• And more!\n\n` +
                       `Type *.menu* for full command list`;

        await sock.sendMessage(chatId, {
            text: message,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: false,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363161513685998@newsletter',
                    newsletterName: 'KING B2K MD BOT ✓',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'KING B2K Bot ✓ is alive and running!' });
    }
}

module.exports = aliveCommand;
