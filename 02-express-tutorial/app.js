const express = require('express');
const app = express();

const peopleRouter = require('./routes/people');
const authRouter = require('./routes/auth');

//  Static folder
app.use(express.static('./methods-public'));
//  Parse Form Data
app.use(express.urlencoded({ extended: false }));
//  Parse JSON
app.use(express.json());

app.use('/api/people', peopleRouter);
app.use('/login', authRouter);

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
