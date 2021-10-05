import {createContext, useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/cart/Cart'
import NavBarr from  './components/navBar/NavBar.jsx';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import CartContextProvider from './components/context/cartContext';
import CartFinishScreen from './components/cart/CartFinishScreen';

export const ContextApp = createContext();



function App() {

  const [state, setState] = useState()

  function setearState(item) {
      setState(item)
  }


  return (
    <CartContextProvider>
      <ContextApp.Provider value={ {state, setearState} } >
            <BrowserRouter>
                  <div>
                        <NavBarr/>
                        <Switch>

                            <Route exact path='/'>
                              <ItemListContainer greeting='Hola, bienvenido/a a nuestra tienda!'/>
                            </Route>

                            <Route path='/categoria/:idCategoria' component={ItemListContainer}/>

                            <Route exact path='/item/:id' component= {ItemDetailContainer}/>

                            <Route exact path='/cart' component={Cart}/>

                            <Route exact patch='/CartFinishScreen' component={CartFinishScreen}/>

                        </Switch>
                  </div>
            </BrowserRouter>
            </ContextApp.Provider>
    </CartContextProvider>
  );
}

export default App;
