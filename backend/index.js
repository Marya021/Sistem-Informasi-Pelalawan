import express from "express";
import cors from 'cors';
import session from "express-session";
import FileUpload from "express-fileupload";
import dotenv from 'dotenv';
import SequelizeStore from 'connect-session-sequelize'
import db from "./config/database.js";
import UserRoute from './routes/UserRoute.js';
import AuthRoute from './routes/AuthRoute.js';
import ProductRoute from './routes/ProductRoute.js';
import StuntenRoute from './routes/StuntenRoute.js';
import MiskinRoute from './routes/MiskinRoute.js';
import UserConfRoute from "./routes/UserConfRoute.js";
import KecamatanRoute from "./routes/KecamatanRoute.js";
import DesaKelurahanRoute from "./routes/DesaKelurahanRoute.js";

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

// (async()=>{
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false, 
    saveUninitialized: true, 
    store: store,
    cookie: {
        secure: 'auto'
    }
}))

app.use(cors({
    credentials: true, 
    origin: 'http://localhost:3000'
}))
app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);
app.use(StuntenRoute);
app.use(MiskinRoute);
app.use(UserConfRoute);
app.use(KecamatanRoute);
app.use(DesaKelurahanRoute);
// store.sync();

app.listen(process.env.APP_PORT, ()=> {
    console.log('Server up and running...');
});
