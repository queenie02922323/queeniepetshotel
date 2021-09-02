module.exports = {
    env: {
        DB_LOCAL_URI: 'mongodb://localhost:27017/pets&services',
        DB_URI: 'mongodb+srv://queenie:kobe@A230292@cluster0.3cbl6.mongodb.net/pets&services?retryWrites=true&w=majority',

        STRIPE_API_KEY: 'pk_live_51JRASsEiBQGNFtS0vHnAIQYHEk6AV0SNnsV8ZEvJYGlaVpX0zDwF2iMv6trnZ2fdjCSFrXMDZvM3aCftTowLXv3C00SoiyLNLK',
        STRIPE_SECRET_KEY: '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',

        STRIPE_WEBHOOK_SECRET: '',

        CLOUDINARY_CLOUD_NAME: 'dgumdbtqz',
        CLOUDINARY_API_KEY: '398677912311424',
        CLOUDINARY_API_SECRET: 'm0GSA2dEatsRzznyEF1LxwJryqw',

        SMTP_HOST: "",
        SMTP_PORT: "",
        SMTP_USER: "",
        SMTP_PASSWORD: "",
        SMTP_FROM_EMAIL: "",
        SMTP_FROM_NAME: "",

        NEXTAUTH_URL: 'https://queeniepetshotel.vercel.app',
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
}