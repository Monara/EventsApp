const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
//app.use(express.static('build'));

const getData = (req, res) => {

    const url = `https://open-api.myhelsinki.fi/v1/events/?tags_filter=${req.params.eventType}&distance_filter=${req.params.lat}%2C%20${req.params.lon}%2C${req.params.range}&language_filter=en`;

    axios.get(url)
    .then((response) => res.send(response.data.data))
    .catch((error) => console.log(error)); 
}

app.get('/api/:eventType/:lat/:lon/:range', (req, res) => getData(req, res));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});