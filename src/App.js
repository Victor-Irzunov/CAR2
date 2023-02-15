import React, { createContext, useState, useEffect } from 'react'
import './App.css'
// import Footer from './components/footer/Footer'
import MainPage from './pages/main-block/MainPage'
import { Header } from './components/header/Header'
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css';
import locale from 'antd/es/locale/ru_RU'
// import PricePage from './pages/PricePage'
// import FotoCarService from './pages/FotoCarService'
// import VoprosOtvet from './pages/VoprosOtvet'
import { OtzyvySection2 } from './components/otzyvySection/OtzyvySection2'
import { FooterSection } from './components/footerSection/FooterSection'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/errorPage/ErrorPage'

export const Context = createContext()


function App() {
  const [isIphone, setIsIphone] = useState(false)

  useEffect(() => {
    if (navigator.userAgent.toLowerCase().match(/(ipad|iphone)/)) {
      setIsIphone(true)
    }
  }, [])


  return (
    <ConfigProvider
      locale={locale}
      theme={{
        token: {
          colorPrimary: '#ff001d',
        },
      }}
    >
      <Context.Provider value={{
        data: isIphone,
      }}>
        <BrowserRouter>
          <div className="app">
            <Header />
            <main>
              <Routes>
              <Route path='/' element={<MainPage />} />
                {/* <Route path='/otzyvy' element={<OtzyvySection2 />} /> */}
                <Route path='*' element={<ErrorPage />} />
              </Routes>
            </main>
            <FooterSection />
          </div>
        </BrowserRouter>
      </Context.Provider>
    </ConfigProvider>
  )
}

export default App
