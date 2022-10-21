import { Routes, Route } from 'react-router-dom';

/*
Imports for Pages
*/
import Home from './Pages/Home/Home';
import Main from './Main';

// Exercises
import Buildsearchfilterinreact from './Pages/Buildsearchfilterinreact/Buildsearchfilterinreact';
import Simplecounterexercise from './Pages/Simplecounterexercise/Simplecounterexercise';
import Displayalistinreact from './Pages/Displayalistinreact/Displayalistinreact';
import Buildaccordioninreact from './Pages/Buildaccordioninreact/Buildaccordioninreact';
import Imagesliderusingreactjs from './Pages/Imagesliderusingreactjs/Imagesliderusingreactjs';
import Createachecklistinreact from './Pages/Createachecklistinreact/Createachecklistinreact';
import Printdatafromrestapi from './Pages/Printdatafromrestapi/Printdatafromrestapi';
import Simpleloginforminreact from './Pages/Simpleloginforminreact/Simpleloginforminreact';
import Multipagenavigationusingreactrouter from './Pages/Multipagenavigationusingreactrouter/Multipagenavigationusingreactrouter';

function Navigation() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/buildsearchfilterinreact" element={<Buildsearchfilterinreact />} />
            <Route path="/simplecounterexercise" element={<Simplecounterexercise />} />
            <Route path="/displayalistinreact" element={<Displayalistinreact />} />
            <Route path="/buildaccordioninreact" element={<Buildaccordioninreact />} />
            <Route path="/imagesliderusingreactjs" element={<Imagesliderusingreactjs />} />
            <Route path="/createachecklistinreact" element={<Createachecklistinreact />} />
            <Route path="/printdatafromrestapi" element={<Printdatafromrestapi />} />
            <Route path="/simpleloginforminreact" element={<Simpleloginforminreact />} />
            <Route path="/multipagenavigationusingreactrouter" element={<Multipagenavigationusingreactrouter />} />
            <Route path="*" element={<Main />} />
        </Routes>
    );
}

export default Navigation;