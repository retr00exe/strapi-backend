module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("YOUR_ADMIN_JWT_SECRET"),
    },
  },
});
