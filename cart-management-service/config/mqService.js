const amqp = require('amqplib/callback_api')
const config = require("./env/message-queue")
const type = require('./queues/type')

let ch = null

// connect and create channel

const start = () => {

    amqp.connect(config.url, function (err, conn) {
    
        if (err){
            console.log(err);
            return setTimeout(start, 1000);
        }
    
        conn.createChannel(function (err, channel) {
            console.log("connected amqp");
            
            ch = channel;

            ch.assertQueue(type.CREATE_CUSTOMER, {durable: false});
            ch.consume(type.CREATE_CUSTOMER, (msg) => {
    
                console.log("Message:", msg.content.toString());
    
            });
    
        });
    
    });

}

start()

// on close server
process.on('exit', (code) => {

    ch.close();
    console.log(`Closing rabbitmq channel`);

});