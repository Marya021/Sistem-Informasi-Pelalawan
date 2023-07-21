import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import EditUser from "./pages/EditUser";
import EditProduct from "./pages/EditProduct";
import AddProduct from "./pages/AddProduct";
import './index.css';
import DataStunten from "./pages/DataStunten";
import LoginPage from "./pages/LoginPages";
import RegistrasiPage from "./pages/RegistrasiPages";
import DashboardCard from "./components/DashboardCard";
import AddUser from "./pages/AddUser";
import PageWarga from "./pages/PageWarga";
import ProfilPage from "./pages/ProfilPage";


function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="/" element={<DashboardCard />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/registrasi" element={<RegistrasiPage />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/products" element={<AddProduct />} />
        <Route path="/warga" element={<PageWarga />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/stunten" element={<DataStunten />} />
        <Route path="/stunten/import" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
