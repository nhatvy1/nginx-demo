export default () => ({
  PORT: parseInt(process.env.PORT) || 5000,
  DATABASE: {
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    NAME: process.env.DB_NAME,
    PASSWORD: process.env.DB_PASSWORD,
    SYNC: process.env.DB_SYNC
  },
  LOG: {
    ENV: process.env.LOG,
    FILE_LOG_NAME_INFO: process.env.FILE_LOG_NAME_INFO,
    FILE_LOG_NAME_ERR: process.env.FILE_LOG_NAME_ERR,
    MAX_SIZE_FILE_LOG_INFO: process.env.MAX_SIZE_FILE_LOG_INFO
  }
})
