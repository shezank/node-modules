const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const port = 5000;

app.get('/', (req, res ) =>{
    res.send('nodemon change, Auto Change, againg change, third time change, hello My Second Node, Please Change my Node');
});

const users = [
    {id: 0, name: 'Khan', email: 'Khan@gmail.com'},
    {id: 1, name: 'Shezan', email: 'shezan@gmail.com'},
    {id: 2, name: 'Sabnur', email: 'sabnur@gmail.com'},
    {id: 3, name: 'Hasib', email: 'Hasib@gmail.com'},
    {id: 4, name: 'Emaran', email: 'emran@gmail.com'},
]

app.get('/users', (req, res) =>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);

    }
    else{
        res.send(users);
    }
    
});

app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hiting The post', req.body);
    // res.send('inside post');
    res.json(newUser);
})

app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
});

app.get('/shoping', (req, res)=>{
    res.send('Choise Your Catagory');
})

app.get('/shoping/electronic/phone', (req, res)=>{
    res.send('I got my phone');
})

app.listen(port, ()=> {
    console.log('lisining Port', port);
});