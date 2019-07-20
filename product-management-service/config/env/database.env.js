module.exports = {

  hostname: process.env.DB_HOST_PORT_27017_TCP_ADDR || "localhost",

  port: process.env.DB_HOST_PORT_27017_TCP_PORT || "27017",

  database_name: process.env.DB_NAME || "test",

  username: process.env.DB_USER || "",

  password: process.env.DB_PASSWORD || "",

}
