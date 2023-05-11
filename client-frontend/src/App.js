import {BrowserRouter, Route , Routes} from 'react-router-dom'

import './App.css';
import HomePage from './containers/homepage/HomePage';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import HeadingPrintMe from './components/heading/HeadingPrintMe';
import PrivateComponent from './components/privateComponent/PrivateComponent';
import Dashboard from './components/dashboard/Dashboard';
import WaitingList from './components/waitingLIst/WaitingList';
import Complited from './components/complited/Complited';
import Analysis from './components/alalysis/Analysis';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeadingPrintMe/>
          <Routes>
          <Route element={<PrivateComponent/>} > 
              
            {/* <Route path='/home' element= {<HomePage/>}/> */}
            <Route path='/' element= {<HomePage/>}>
              <Route index element={<Dashboard/>}/>
              <Route path='home' element={<Dashboard/>}/>
              <Route path='waiting' element={<WaitingList/>}/>
              <Route path='complited' element={<Complited/>}/>
              <Route path='analysis' element={<Analysis/>}/>
              <Route path='test' element={<WaitingList/>}/>
              <Route path='setup' element={<WaitingList/>}/>
            </Route>
              
          </Route>
              

              <Route path='/signin' element={<Signin/>}/>
              <Route path='/signup' element={<Signup/>}/>


          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
