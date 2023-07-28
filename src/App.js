import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PrimaryLayout } from "components/Layout";
import HomePage from "containers/Home";
import NotFoundPage from "containers/404Page";
import DetailPage from "containers/Detail";
import InfoPage from "containers/InfoPage";
import Filmpage from "containers/Filmpage";
import Pricing from "containers/Pricing";
import Payment from "containers/Payment";
import UserProfile from 'containers/UserProfile';
import { MoviesPage } from "containers/Movie";
import AboutUs from "containers/AboutUs";
import Login from "containers/Login";
import SignUp from "containers/SignUp";



function App() {

  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
      </Route>
      <Route path="/watch" element={<InfoPage />} />
      <Route path="/detail" element={<Filmpage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>

  );
}

export default App;