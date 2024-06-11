import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement : <Error/>,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/ContactUs",
    element: <ContactUs/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("head"));
root.render(<RouterProvider router={appRouter} />);
