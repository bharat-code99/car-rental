import { Suspense, lazy, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const CarDetails = lazy(() => import("./pages/CarDetails"));
const Cars = lazy(() => import("./pages/Cars"));
const MyBookings = lazy(() => import("./pages/MyBookings"));
const Layout = lazy(() => import("./pages/owner/Layout"));
const Dashboard = lazy(() => import("./pages/owner/Dashboard"));
const ManageCars = lazy(() => import("./pages/owner/ManageCars"));
const ManageBookings = lazy(() => import("./pages/owner/ManageBookings"));
const AddCar = lazy(() => import("./pages/owner/AddCar"));

export default function App() {
  const [_, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith("/owner");

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car-details/:id" element={<CarDetails />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-car" element={<AddCar />} />
            <Route path="manage-cars" element={<ManageCars />} />
            <Route path="manage-bookings" element={<ManageBookings />} />
          </Route>
        </Routes>
      </Suspense>

      {!isOwnerPath && <Footer />}
    </>
  );
}
