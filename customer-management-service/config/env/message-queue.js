const domain = process.env.MESSAGE_QUEUE_URL || "localhost"


module.exports = {
    url: "amqp://" + domain
}