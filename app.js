var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var products =[
 {name: 'table', description: 'this is a table for eating and drowing ', image:'images/table.jpg', id:1},
 {name: 'tabl2', description: 'this is a table for eating and drowing ', image:'images/table.jpg', id:2},
 {name: 'tabl3', description: 'this is a table for eating and drowing ', image:'images/table.jpg', id:3}
];
var orders = [];


app.use(express.static(path.join(__dirname)));

app.get('/view4',function (req, res){
	res.send({
    prod:products,
    order:orders
  });
});

app.post('/view3', function(req, res){
  orders.push({
    name:req.body.name,
    id:req.body.id
  });
});
app.post('/view2', function(req, res) {
  orders = req.body.name;
})

app.post('/view4', function (req, res){
  products.push({
    name:req.body.name,
    image:req.body.image,
    description:req.body.description,
    id:products.length-1
  });

});



app.listen(8000, function () {
	console.log('listening on 8000 port');
});
