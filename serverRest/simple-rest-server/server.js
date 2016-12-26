const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.static('public'))
app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('REST API listening on port 3000!')
})

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// This is my data (one day it will come from database)
// let items = [
//     {id: 8,title: 'Mastering SCSS', price: 78, description: 'bla bla'},
//     {id: 9,title: 'Mastering $', price: 8, description: 'jq bla bla'}
// ];

var eventsDataObj = require('./EventsRecommended.js');

let events = eventsDataObj.events;
// console.log(events);

let item = [
  { id: 1, name: 'Carmos', price: 98982, isSelected: false },
  { id: 2, name: 'Carting', price: 1232, isSelected: false },
  { id: 3, name: 'Carmupo', price: 4232, isSelected: false },
  { id: 4, name: 'Carmuk', price: 387, isSelected: false }
];

let emails = [
  { id: 1, subject: 'hi from codingAcademy', from: 'Yaron', body: '111', isRead: false },
  { id: 2, subject: 'hello', from: 'Neta', body: '222', isRead: false },
  { id: 3, subject: 'CodingAcademy Rulzz', from: 'Dor', body: '333', isRead: false },
  { id: 4, subject: 'CodingAcademy Ruls test test test test test test test test test test test ', from: 'Puki', body: '444', isRead: false }
]

function findNextId(dataSetName) {
  var maxId = 0;
  dataSetName.forEach(item => {
    if (item.id > maxId) maxId = item.id;
  });
  return maxId + 1;
}

// *** REST API ***
// ** EMAILS **/
// LIST
app.get('/emails', (req, res) => {
    // setTimeout(()=>res.json(items), 2000);
  res.json(emails); 
})

// READ
app.get('/emails/:id', (req, res) => {
  const id = +req.params.id;
  const email = emails.find(currItem => currItem.id === id);
  res.json(email)
})

// DELETE
app.delete('/emails/:id', (req, res) => {
  const id = +req.params.id;
  emails = emails.filter(currItem => currItem.id !== id);
  res.json({ msg: 'Deleted' });
})

// CREATE
app.post('/emails', (req, res) => {
  const email = req.body;
  email.id = findNextId(emails);
  emails.push(email);
  res.json({ msg: 'Item was added!' });
})

// UPDATE
app.put('/email', (req, res) => {
  const email = req.body;
  emails = emails.map(currItem => (currItem.id === email.id) ? email : currItem);
  res.json({ msg: 'Item was updates!' });
})










// ** EVENTS **/
// LIST
app.get('/events', (req, res) => {
    // setTimeout(()=>res.json(items), 2000);
  res.json(events); 
})

// READ
app.get('/event/:id', (req, res) => {
  const id = +req.params.id;
  const event = events.find(currItem => currItem.id == id);
  // console.log(event);
  res.json(event)
})

// DELETE
app.delete('/event/:id', (req, res) => {
  const id = +req.params.id;
  events = events.filter(currItem => currItem.id !== id);
  res.json({ msg: 'Deleted' });
})

// CREATE
app.post('/events', (req, res) => {
  const event = req.body;
  event.id = findNextId(events);
  events.push(event);
  res.json({ msg: 'Item was added!' });
})

// UPDATE
app.put('/event', (req, res) => {
  const event = req.body;
  events = events.map(currItem => (currItem.id == event.id) ? event : currItem);
  res.json({ msg: 'Item was updates!' });
})

