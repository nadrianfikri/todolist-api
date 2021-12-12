const express = require('express');
const cors = require('cors');
const router = require('./src/routes');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// grouping router endpoint
app.use('/api/v1/', router);
app.use('/', 'Hello Todo Api');

app.listen(port, () => console.log(`Server listening on port ${port}`));
