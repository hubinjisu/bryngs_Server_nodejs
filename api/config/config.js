module.exports = {
    server: {
        host: 'localhost',
        port: process.env.PORT || 9090
    },
    database: {
        // host: 'localhost',
        // port: 27017,
        // db: 'bryngs',
        // url: 'mongodb://127.0.0.1:27017/bryngs'
        url: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bryngs'
    },
    key: {
        privateKey: '37LvDSm4XvjYOh9Y',
        tokenExpiry: 1 * 30 * 1000 * 60 //1 hour
    },
    email: {
        username: "hubinjisu@gmail.com",
        password: "hu191224",
        verifyEmailUrl: "verifyLink",
        resetEmailUrl: "reset"
    }
};
