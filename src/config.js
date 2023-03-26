import dotenv from 'dotenv';

dotenv.config();


export default {
  PORT: process.env.PORT,// ||8080,
  URL_BASE: process.env.URL_BASE,
  JWT_SECRET: process.env.JWT_SECRET ,// //"gatito",
  mongodb: {
    cnxStr: process.env.MONGODB_URL ,//||"mongodb+srv://Train:Patagonia2023@cluster0.ilcaprq.mongodb.net/final",
    
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    },
    
    
  },
  
};
console.log("conectado mongo")
