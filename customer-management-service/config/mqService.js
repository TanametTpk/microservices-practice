const amqp = require('amqplib/callback_api')
const config = require("./env/message-queue")

let ch = null

// connect and create channel
const start = () => {

    amqp.connect(config.url, function (err, conn) {
    
        if (err){
            console.log(err);
            return setTimeout(start, 1000);
        }
    
        conn.createChannel(function (err, channel) {
            
            console.log("connect");
            ch = channel;

        });
    
    });

}

start()

// publish function
const publishToQueue = async (queueName, data) => {

    ch.assertQueue(queueName, {durable: false});
    ch.sendToQueue(queueName, new Buffer(data));

}

// on close server
process.on('exit', (code) => {

    ch.close();
    console.log(`Closing rabbitmq channel`);

});

// export function
module.exports = {
    publishToQueue
}