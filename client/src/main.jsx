import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import MainLayout from '../layouts/MainLayout.jsx'
import WordProvider from '../providers/WordProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <WordProvider>
  <MainLayout>
    <App />
    </MainLayout>
    </WordProvider>
  </BrowserRouter>,
)
