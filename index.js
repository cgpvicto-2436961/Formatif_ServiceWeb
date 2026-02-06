
// Importer le module express
import express from 'express';
import router from './routes/salutations.route.js';
import fs from 'fs';
import path from 'path';
import morgan from 'morgan';
const app = express();
app.use(express.json());
var accessLogStream = fs.createWriteStream( path.join('./access.log'), { flags: 'a' });
app.use(morgan( ':date[clf] :method :url :status :response-time ms', { stream: accessLogStream }));
const PORT = 3000;
app.get('/', (req, res) => {
    res.send("<h1>Mon premier serveur web sur express !</h1>");
});
app.use("/api/salutations", router)
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});