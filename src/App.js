import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";
import Footer from "./components/Footer/Footer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper _container">
                <Header/>
                <Navigation state={props.state.navigation}/>
                <main className="main ">
                    <Routes>
                        <Route path="profile/*" element={<Profile store={props.store}/>}/>
                        <Route path="dialogs/*" element={<Dialogs store={props.store}/>}/>
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
