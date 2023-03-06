const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User= require('./models/ReactDataSchema')


app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Kp-webdata', { useNewUrlParser: true});

app.post('/insert', async(req, res) => {

    const KnowMe = req.body.knowMe
    const Name = req.body.yourName
    const ThingLike = req.body.thingLike
    const RecommendMe = req.body.recommendMe
    const SiteLike = req.body.siteLike
    const formData  =  new User(
        {
            know: KnowMe,
            name: Name,
            like: ThingLike,
            recommend: RecommendMe,
            site: SiteLike
        }
    )
    try{
     
        await formData.save();
        res.send("inserted data..")

    } catch(err){
        console.log(err)
    }
  });

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});