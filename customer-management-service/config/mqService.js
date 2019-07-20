const amqp = require('amqplib/callback_api')
const config = require("./env/message-queue")

let ch = null

// connect and create channel
amqp.connect(config.url, function (err, conn) {

    conn.createChannel(function (err, channel) {
       ch = channel;
    });

});

// publish function
const publishToQueue = async (queueName, data) => {

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