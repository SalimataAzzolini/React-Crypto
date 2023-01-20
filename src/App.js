import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PublicRouter from './pages/public/PublicRouter';
import UserRouter from './pages/users/UserRouter';
import AuthGuard from './_helpers/AuthGuard';

function App() {
  return (
    <div className="">
        <BrowserRouter>
      <Routes>
              {/* On accroche un point d entree on met l'etoile derriere pour dire qu il y a des enfants /*/}
          <Route path="/*" element={<PublicRouter />}/>
          <Route path="/users/*" 
                 element={ 
                       <AuthGuard> 
                            <UserRouter /> 
                       </AuthGuard> 
                }/>      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
