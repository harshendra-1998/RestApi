const express = require('express');
const joi = require('joi');
const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;

const customer = [
  {title: 'Hii', id: 1},
  {title: 'Hwdih', id: 2},
  {title: 'Hwru3i', id: 3},
  {title: 'Hiq3to', id: 4},
]

app.get('/',(req,res)=>{res.send('Hellophuchf uefh')})

app.get('/customer',(req,res)=>{res.send(customer)})

app.get('/customer/:id',(req,res)=>{
  const custo = customer.find(c => c.id === parseInt(req.params.id));

  if(!custo) res.status(404).send('<h1>404 Ho Giyaaa..</h1>')
  res.send(custo)
})

app.put('/customer/:id',(req,res)=>{
  const custo = customer.find(c => c.id === parseInt(req.params.id));
  if(!custo){ res.status(404).send('<h1>404 Ho Giyaaa..</h1>');
  return;}

  custo.title = req.body.title;
  res.send(customer)

})

app.delete('/customer/:id',(req,res)=>{
  const custo = customer.find(c => c.id === parseInt(req.params.id));
  if(!custo){ res.status(404).send('<h1>404 Ho Giyaaa..</h1>');
  return;}

  const indexx = customer.indexOf(custo)
  customer.splice(indexx,1)
  res.send(customer)

})

app.post('/customer',(req,res)=>{

  const custom = {
    title: req.body.title,
    id: customer.length + 1
  }
  customer.push(custom)
  res.send(customer)
})

app.listen(port, ()=> {console.log('listeninf to port'+port+'')})

console.log('Hello, world!')

function validateCustomer(cus){
  const schema = {
    title: joi.string().min(3).required()
  }
  return joi.validate(cus,schema)
}