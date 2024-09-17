import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import appContext from './appContext';
import Home from './components/Home';


const browserRouter=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/leaderboard',
    element:<App/>
  }
])

const ContextProvider = ({ children }) => {
  const [activeNav, setActiveNav] = useState('home');
  return (
    <appContext.Provider value={{ activeNav, setActiveNav }}>
      {children} 
    </appContext.Provider>
  );
};


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={browserRouter}/>
    </ContextProvider>
  </React.StrictMode>
)

