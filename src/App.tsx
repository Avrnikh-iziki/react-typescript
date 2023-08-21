import {
  Home,
  Login,
  Register,
  Dashbord,
  Cart,
  Product
} from './views/index'

import { loader as Dashbordloader } from "../src/component/dashbord/index"
import { loader as IncomeLoader } from "./component/overview/index"
import { loader as IncomelayoutLoader } from "../src/h-component/IncomeLayoute/index"
import { loader as productLoader } from "../src/component/product/index"
import {
  Layout,
  SubLayout,
  IncomeLayoute
} from './h-component';

import { Overview } from "./component/overview/index"
import { Myorders } from "./component/Myorders/index"
import { MayProduct } from "./component/myProduct/index"

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import { NotFound } from './component/notFound'
import PrivateRoutes from "./utiles/auth"
import { store, persistor } from "../src/store/store"
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const router = createBrowserRouter(createRoutesFromElements(
  <Route
    path="/"
    element={<Layout />}
  >
    <Route
      index
      element={<Home />}
    />
    <Route
      path="login"
      element={<Login />}
    />
    <Route
      path="register"
      element={<Register />}
    />
    <Route
      path="products"
      element={<SubLayout />}
    >
      <Route
        index
        loader={Dashbordloader}
        element={<Dashbord />}
      />
      <Route
        path=":id"
        loader={productLoader}
        element={<Product />}
      />
      <Route
        element={<PrivateRoutes />}
      >
        <Route
          path="cart"
          element={<Cart />}
        />
        <Route
          path="income"
          loader={IncomelayoutLoader}
          element={<IncomeLayoute />}
        >
          <Route
            index
            loader={IncomeLoader}
            element={<Overview />}
          />
          <Route
            path="myorders"
            element={<Myorders />}
          />
          <Route
            path="myproduct"
            element={<MayProduct />}
          />
        </Route>
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))

function App(){
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  )
}

export default App;
