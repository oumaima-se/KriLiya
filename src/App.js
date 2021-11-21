import Annonces from './components/mesAnnonces/mesAnnonces';
import UpdateForm from './components/forms/Updateannonce';
import AddForm from "./components/forms/Ajoutannonce"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useParams} from "react-router-dom";
import Moment from 'react-moment';
import 'moment-timezone';


function App() {
  const params = useParams();
  return (
    <div>      
        <Router>
          <Routes>
            <Route path="/mes-annonces" element={ <Annonces /> } />
            <Route path="/annonce" element={ <AddForm /> } /> 
            <Route path="/annonce/:id" element={ <UpdateForm params={params} />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App;

