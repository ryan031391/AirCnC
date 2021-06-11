import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", ()=>{
    let store;
    if (window.currentUser) {
        const { currentUser } = window
        const { session_token } = currentUser
        const preloadedState = { 
            entities: { users: {[session_token]: currentUser}}, 
            session: { session_token }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
      store = configureStore();
    }
    const rootEl = document.getElementById("root");
    rootEl.style.backgroundImage = window.backgroundUrl;
    

    ReactDOM.render(<Root store={store}/>, rootEl)
})
