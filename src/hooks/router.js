import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { FilmPage } from "../pages/FilmPage/FilmPage";
import { Header } from "../components/Header/Header";

export const useRouter = () => {
  const routes = [
    {
      path: "*",
      component: <Navigate replace to="/" />,
    },
    {
      path: "/",
      component: <MainPage />,
    },
    {
      path: "/film/:id",
      component: <FilmPage />,
    },
  ];

  const mapRoutes = routes.map((r) => {
    return <Route key={r.path} path={r.path} element={r.component} />;
  });

  return (
    <>
      <Header />
      <Routes>{mapRoutes}</Routes>
    </>
  );
};
