import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/Home/Home";
import ListaProdutos from "./pages/ListaProdutos/ListaProdutos";
import DetProduto from "./pages/detProduto/DetProduto";
import AdmProdutos from "./pages/AdmProdutos/AdmProdutos";
import Login from "./pages/login/Login";
import Footer from "./components/footer/footer";


export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path= "/produtos" element={<ListaProdutos/>}/>
                <Route path="/detalheProduto" element={<DetProduto/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="/AdmProdutos" element={<AdmProdutos/>}/>
                <Route path="*"
                 element={
                 <img className="container-notfound"src="https://cdn.svgator.com/images/2024/04/animated-cockatoo-error-page.gif" alt="Imagem de não encontrado"/>
                 }/>
            </Routes>
            <Footer />
        </>
    )
}