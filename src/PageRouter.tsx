import React from "react";
import App from "./App";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import RecipesPage from "./Pages/RecipesPage";
import PageNotFound from "./Pages/PageNotFound";
import UserDetails from "./Pages/UserDetails";
import ShoppingList from "./Pages/ShoppingList";
import OurStory from "./Pages/OurStory";
import Home from "./Pages/Home";
import FoodSearch from "./Pages/FoodSearch";

const PageRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/LandingPage" replace />} />
        <Route
          path="/LandingPage"
          element={
            <>
              <NavBar>
                <App />
              </NavBar>
              <Footer />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <NavBar>
                <Home />
              </NavBar>
              <Footer />
            </>
          }
        />
        <Route
          path="/popular-recipes"
          element={
            <>
              <NavBar>
                <RecipesPage />
              </NavBar>
              <Footer />
            </>
          }
        />
        <Route
          path="/health-details"
          element={
            <>
              <NavBar>
                <UserDetails />
              </NavBar>
              <Footer />
            </>
          }
        />
        <Route
          path="/food-search"
          element={
            <>
              <NavBar>
                <FoodSearch />
              </NavBar>
              <Footer />
            </>
          }
        />
        <Route
          path="/shopping-list"
          element={
            <>
              <NavBar>
                <ShoppingList />
              </NavBar>
              <Footer />
            </>
          }
        />
        <Route
          path="/our-story"
          element={
            <>
              <NavBar>
                <OurStory />
              </NavBar>
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <NavBar>
                <PageNotFound />
              </NavBar>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default PageRouter;
