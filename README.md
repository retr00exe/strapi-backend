## Strapi Application

Having struggle of connecting MongoDB Atlas and Cloudinary with Strapi? Say no more! You can copy all of my configuration setting in this repo, enjoy it 🍻

To connect with your MongoDB cluster you can change the configuration setting in `config/functions/database.js` with your own username, password, hostname and database. If you want integrate your CMS with third party image provider (in this case I use cloudinary because it's free) you can change the configuration setting in `extensions/upload/config/settings.json` with your own API key and API secret, don't forget to set your JWT secret too in `extensions/user-permissions/config/jwt.js`.

This simple diagram shows how my backend connected and communicate with frontend (in this case Next.js) using GraphQL. With this tech stack you can host your own fullstack project for totally **FREE**!
![Simple Infra](https://res.cloudinary.com/retr00exe/image/upload/v1613649235/blog_arch_lhojiw.png)

**P.S.** : To learn more details about customization and third party integration in Strapi CMS you can visit its official documentation in this [link](https://strapi.io/documentation/developer-docs/latest/concepts/configurations.html).
