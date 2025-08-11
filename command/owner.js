// command/sendkontak.js
const handler = async (m, plug) => {
    const { sock } = plug;
    const { owner } = plug.config;

    const phoneNumber = owner;2349039409985
    const contactName = "Fauzialifatah";

    const vcard = 'BEGIN:VCARD\n' +
        'VERSION:3.0\n' +
        `FN:${contactName}\n` +
        `TEL;type=CELL;waid=${phoneNumber}:${phoneNumber}\n` +
        'END:VCARD';

    await sock.sendMessage(m.key.remoteJid, {
        contacts: {
            displayName: contactName,
            contacts: [{ vcard }]
        }
    });
};

handler.help = ['Kell'];
handler.tags = ['general'];
handler.command = ["kontak"];


export default handler;
