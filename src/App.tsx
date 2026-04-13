import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import ProductList from './pages/Products'
import ProductDetail from './components/ProductDetail'
import './App.css'

function App() {

  return (
     <>
      <Header />  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App
