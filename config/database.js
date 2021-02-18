module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env("YOUR_DATABASE_HOST"),
        srv: true,
        port: 27017,
        database: env("YOUR_DATABASE_NAME"),
        username: env("YOUR_DATABASE_USERNAME"),
        password: env("YOUR_DATABASE_PASSWORD"),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});
