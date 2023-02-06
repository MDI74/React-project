import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersСontainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper _container">
                <Header/>
                <Navigation/>
                <main className="main">
                    <Routes>
                        <Route path="profile/*" element={<Profile/>}/>
                        <Route path="dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="users" element={<UsersContainer/>}/>
                        <Route path="news" element={<News/>}/>
                        <Route path="music" element={<Music/>}/>
                        <Route path="settings" element={<Settings/>}/>
                    </Routes>
                </main>
                {/*<Footer/>*/}
            </div>
        </BrowserRouter>
    )
}

export default App;
