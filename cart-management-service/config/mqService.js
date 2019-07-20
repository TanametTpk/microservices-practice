const amqp = require('amqplib/callback_api')
const config = require("./env/message-queue")
const type = require('./queues/type')

let ch = null

// connect and create channel
amqp.connect(config.url, function (err, conn) {

    conn.createChannel(function (err, channel) {

        ch = channel;
        ch.consume(type.CREATE_CUSTOMER, (msg) => {

            console.log("Message:", msg.content.toString());

        });

    });

});

// on close server
process.on('exit', (code) => {

    ch.close();
    console.log(`Closing rabbitmq channel`);

});