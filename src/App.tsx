import React, { useState } from 'react';
import { Login } from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Dungeons from './components/Dungeons';
import Dungeon from './components/Dungeon';
import { QuestsView } from './pages/QuestsView';
import { QuestsBookView } from './pages/QuestsBookView';
import { QuestView } from './pages/QuestView';
import { PersonalView } from './pages/lk/PersonalView';
import { MainWrapper } from './components/NavBar/MainWrapper';
import PersonalInfo from './pages/lk/PersonalInfo';
import Gallery from './pages/Gallery';
import Settings from './pages/lk/Settings';
import Skills from './pages/lk/Skills';

function App() {
    const [isAuth, setIsAuth] = useState(true);

    return (
        <>
            {!isAuth ? (
                <Login
                    submit={() => {
                        setIsAuth(true);
                    }}
                />
            ) : (
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MainWrapper
                                submit={() => {
                                    setIsAuth(false);
                                }}
                            />
                        }
                    >
                        <Route path="/lk" element={<PersonalView />}>
                            <Route index element={<PersonalInfo />} />
                            <Route path="dungeon" element={<Dungeons />}>
                                <Route path=":userId" element={<Dungeon />} />
                            </Route>
                            <Route path="skills" element={<Skills />} />
                            <Route path="equipment" element={<Skills />} />
                            <Route path="rank" element={<Skills />} />
                            <Route path="settings" element={<Settings />} />
                        </Route>
                        <Route path="/quests" element={<QuestsView />}>
                            <Route index element={<QuestsBookView />} />
                            <Route path=":questId" element={<QuestView />} />
                        </Route>
                        <Route path="/gallery" element={<Gallery />} />
                    </Route>
                </Routes>
            )}
        </>
    );
}

export default App;
