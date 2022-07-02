import React, { useState } from 'react';
import { Login } from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import SidebarWithHeader from './App2';
import Dungeons from './components/Dungeons';
import Dungeon from './components/Dungeon';
import { QuestsView } from './pages/QuestsView';
import { QuestsBookView } from './pages/QuestsBookView';
import { QuestView } from './pages/QuestView';
import { Box } from '@chakra-ui/react';
import { PersonalView } from './pages/PersonalView';

function App() {
    const [isAuth, setIsAuth] = useState(false);

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
                            <SidebarWithHeader
                                submit={() => {
                                    setIsAuth(false);
                                }}
                            />
                        }
                    >
                        <Route path="/dungeon/" element={<Dungeons />}>
                            <Route path=":userId" element={<Dungeon />} />
                        </Route>
                        <Route path="/quests" element={<QuestsView />}>
                            <Route index element={<QuestsBookView />} />
                            <Route path=":questId" element={<QuestView />} />
                        </Route>
                        <Route path="/skills" element={<Box>SKILLS</Box>} />
                        <Route path="/lk" element={<PersonalView />} />
                        <Route path="/gallery" element={<Box>Галерея футажей</Box>} />
                        <Route path="*" element={<Box>404</Box>} />
                    </Route>
                </Routes>
            )}
        </>
    );
}

export default App;
