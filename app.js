const express = require('express');
const app = express();
const { Client } = require('pg');

const client = new Client({
 connectionString: 'postgres://rhpsnkyngxyvvk:b213cd8991923ab548598ea234b720299133de8c6f2a3eec98057d43a601491f@ec2-34-252-98-12.eu-west-1.compute.amazonaws.com:5432/dcou1t9f2to30b',
 ssl: { rejectUnauthorized: false }
});

client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
      client.query(`INSERT INTO Persons (lastname, firstname)
                    VALUES ('S', 'Annnnn')`,
                (err,res) => {
                    if (err) {
                        console.log(err)
                    }else{
                        console.log(res)
                    }
                }
        )
    }
})