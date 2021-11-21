const express = require('express');
const cors = require('cors');
const router = require('./src/routes');

const app = express();

const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

// grouping router endpoint
app.use('/api/v1/', router);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
