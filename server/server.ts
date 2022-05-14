import express from 'express';
import path from 'path';
import cors from 'cors';
import 'dotenv/config';
import postRoutes from './routes/post';
import userRoutes from './routes/user';

import { connect } from './database';

const app = express();

// Settings
app.set('port', process.env.PORT || 5000);

app.use(cors());

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/', postRoutes);
app.use('/api/', userRoutes);

(async () => {
  try {
    await connect();
    await app.listen(app.get('port'));
    console.log(`Server on port ${app.get('port')}`);
  } catch (e) {
    console.log(e);
  }
})();
