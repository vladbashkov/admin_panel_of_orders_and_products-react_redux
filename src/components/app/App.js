import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';

const TopMenu = lazy(() => import('../topMenu/TopMenu'));
const NavMenu = lazy(() => import('../navMenu/NavMenu'));
const OrdersList = lazy(() => import('../ordersList/OrdersList'));
const ProductsList = lazy(() => import('../productsList/ProductsList'));

const App = () => {
  return (
    <Router>
      <Suspense>
        <div className="App">
          <header className="App-header">
            <TopMenu />
          </header>
          <main className="App-main d-flex">
            <NavMenu />
            <div className="App-content p-5 w-100">
              <TransitionGroup component="div">
                <Routes >
                      <Route exact path="/admin_panel_of_orders_and_products-react_redux/Orders" element={ <OrdersList /> } />
                      <Route exact path="/admin_panel_of_orders_and_products-react_redux/Products" element={ <ProductsList /> } />
                </Routes>
              </TransitionGroup>
            </div>
          </main>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
