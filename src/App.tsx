import React from 'react';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://s.starladder.com/uploads/team_logo/d/4/d/3/ce3c2349c7e3a70dac35cf4a28c400b9.png'></img>
            </header>
            <nav className={'nav'}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>Main content</div>
        </div>);
}

export default App;
