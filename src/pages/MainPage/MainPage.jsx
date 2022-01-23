import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Card } from "../../components/Card/Card";
import { Input } from "../../components/Input/Input";
import { Loader } from "../../components/Loader/Loader";
import { ModalCheck } from "../../components/Modal/ModalCheck/ModalCheck";
import { ModalEdit } from "../../components/Modal/ModalEdit/ModalEdit";
import { filteredFilmsByName, getFilms } from "../../store/actions/filmsAction";
import { changeInput } from "../../utils/change";
import "./MainPage.css";

export const MainPage = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState({});
  const { films, filteredFilms, loading } = useSelector((state) => state.films);
  const { checkFilmModal, editFilmModal, selectedFilm } = useSelector((state) => state.main);

  useEffect(() => {
    dispatch(getFilms());
  }, []);

  function changeHandler(e) {
    const { value } = e.target;
    changeInput(e, search, setSearch);
    dispatch(filteredFilmsByName(value.trim()));
  }

  function mapFilmsByCondition() {
    if (filteredFilms.length) {
      return <div className="mainpage-content__films">{mapFilteredFilms}</div>;
    }

    if (!filteredFilms.length && search.search) {
      return <div className="mainpage-content__nosearch">По запросу "{search.search}" ничего не найдено.</div>;
    }

    return <div className="mainpage-content__films">{mapFilms}</div>;
  }

  const mapFilms = films.map((film, idx) => <Card film={film} key={film.id} />).reverse();
  const mapFilteredFilms = filteredFilms.map((film, idx) => <Card film={film} key={film.id} />).reverse();

  return (
    <div className="mainpage">
      <div className="container">
        <div className="mainpage-content">
          <div className="mainpage-content__search">
            <input type="text" placeholder="Поиск" onChange={changeHandler} id="search" className="search-input" />
          </div>
          {loading ? <Loader /> : mapFilmsByCondition()}
        </div>
      </div>
      <ModalCheck active={checkFilmModal}></ModalCheck>
      <ModalEdit active={editFilmModal}></ModalEdit>
    </div>
  );
};
