import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from "./components/Profile/MyPosts/Post/Post";
import Dialog from "./components/Dialogs/Dialogs/Dialog";
import Message from "./components/Dialogs/Message/Message";

let postsData=[
    { title:'hello',like:'(2)'},
    { title:'postav like pliz',like:'(5)'}
]

let posts = postsData.map( p => <Post title={p.title} like={p.like}/>)

let dialogData=[
    {id: '1', name:'Dasha'},
    {id: '2', name:'Masha'},
    {id: '3', name:'Polly'},
    {id: '5', name:'Katya'},
    {id: '6', name:'Sergey'}
]

let messageData=[
    {id:'1',text:'privetik'},
    {id:'2',text:'pochemu ignor'},
    {id:'3',text:'ok'}
]

let dialogs =  dialogData.map(d=><Dialog name={d.name} id={d.id}/>)

let messages = messageData.map(m=> <Message text={m.text}/>)


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
