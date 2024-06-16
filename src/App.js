import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element : <Body/>
      },
      {
        path: "/About",
        element: <About/>
      },
      {
        path: "/ContactUs",
        element: <ContactUs/>
      },
      {
        //making this path dynamic for every restaurant  /Restaurants/:resId
        path: "/Restaurants/:resId",
        element: <RestaurantMenu/>,
      }
    ],
    errorElement : <Error/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById("head"));
root.render(<RouterProvider router={appRouter} />);
