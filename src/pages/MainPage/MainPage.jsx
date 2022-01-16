import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Card } from "../../components/Card/Card";
import { Loader } from "../../components/Loader/Loader";
import { ModalCheck } from "../../components/Modal/ModalCheck/ModalCheck";
import { ModalEdit } from "../../components/Modal/ModalEdit/ModalEdit";
import { getFilms } from "../../store/actions/filmsAction";
import "./MainPage.css";

export const MainPage = () => {
  const dispatch = useDispatch();
  const { films, loading } = useSelector((state) => state.films);
  const { checkFilmModal, editFilmModal, selectedFilm } = useSelector((state) => state.main);

  useEffect(() => {
    dispatch(getFilms());
  }, []);

  const mapFilms = films.map((film, idx) => <Card film={film} key={film.id} />).reverse();

  return (
    <div className="mainpage">
      <div className="container">{loading ? <Loader /> : <div className="mainpage-content">{mapFilms}</div>}</div>
      <ModalCheck active={checkFilmModal}></ModalCheck>
      <ModalEdit active={editFilmModal}></ModalEdit>
    </div>
  );
};
