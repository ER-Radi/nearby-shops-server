const constants = {
    app: {
        serverPort: 5000,
        // hostClient: 'localhost:3000',
        hostClient: 'http://localhost:3000',
    },
    token: {
        secret: 'MohamedER-Radi',
        tokenExpires: '14400m',     // '3m'     //10 jours
    }
};

export default constants;