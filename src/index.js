import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Map from './pages/Map';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
<link
href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
rel="stylesheet"
/>

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "map",
    element: <Map/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
