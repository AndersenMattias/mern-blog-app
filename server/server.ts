import express from 'express'
import path from 'path'
import cors from 'cors'
import 'dotenv/config'
import memoryRoutes from './routes/memory.routes'

import { connect } from './database';


const app = express();

// Settings
app.set('port', process.env.PORT ||5000)




app.use(cors());

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

// middlewares
app.use(express.json());

// Routes
app.use('/api/', memoryRoutes);


(async () => {
    try {
        await connect();
        await app.listen(app.get('port'));
        console.log(`Server on port ${app.get('port')}`);
    } catch (e) {
        console.log(e);
    }
})();