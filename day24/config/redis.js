const redis = require('redis') ;

const redisClient = redis.createClient({
     username: 'default',
    password: 'WUzaNbscMEQ7vv4mEoGvf2cCFZQZ9adT',
    socket: {
        host: 'shimmery-extra-amazing-50584.db.redis.io',
        port: 13678
    }
});



module.exports = redisClient ;