import logo from './logo.svg';
import './App.css';
import Printme from './componants/Sara';
import Galery from './lesson2/componants/galery';
import Pizza from './lesson3/componants/ServerCall';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './lesson4/componants/HomePage';
import NavBar from './lesson4/componants/NavBar';
import './lesson4/i18n.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './lesson5/componants/inputTask.js';
import Presentation from './lesson5/componants/PresentationTasks.js';
import { Provider } from 'react-redux';
import store from './lesson5/Redux/store.js';
import NavBarTask from './lesson5/componants/NavBar.js';
import Chat from './lesson6/componants/chat.js';
import WithLog from './lesson7/componants/withLog.js';
import Sara from './lesson7/componants/sara.js';

function App() {
  const SaraWithLog=WithLog(Sara);
  return (


        <>
        <Provider store={store}>
        <div>
         <h1> Redux Tasks App</h1>

         <Chat></Chat>
         {/* <SaraWithLog></SaraWithLog> */}
         <Sara></Sara>
        </div>

        </Provider>
        </>    

    
  );
}

export default App;
