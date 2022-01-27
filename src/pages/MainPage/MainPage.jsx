import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Card } from "../../components/Card/Card";
import { useParams, useSearchParams } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { ModalCheck } from "../../components/Modal/ModalCheck/ModalCheck";
import { ModalEdit } from "../../components/Modal/ModalEdit/ModalEdit";
import { filteredFilmsByName, getFilms } from "../../store/actions/filmsAction";
import "./MainPage.css";

export const MainPage = () => {
  const dispatch = useDispatch();
  const { films, filteredFilms, loading } = useSelector((state) => state.films);
  const { checkFilmModal, editFilmModal } = useSelector((state) => state.main);
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(getFilms());
  }, []);

  useEffect(() => {
    dispatch(filteredFilmsByName(search));
  }, [search]);

  useEffect(() => {
    const $search = searchParams.get("search");
    if ($search) {
      dispatch(filteredFilmsByName($search));
      setSearch($search);
    }
  }, [films, searchParams]);

  const changeHandler = (e) => {
    const { value } = e.target;
    setSearch(value.trim());
    if (value.trim()) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
    dispatch(filteredFilmsByName(search));
  };

  const mapFilmsByCondition = () => {
    if (filteredFilms.length) {
      return <div className="mainpage-content__films">{mapFilteredFilms}</div>;
    }

    if (!filteredFilms.length && searchParams.get("search")) {
      return <div className="mainpage-content__nosearch">По запросу "{search}" ничего не найдено.</div>;
    }

    return <div className="mainpage-content__films">{mapFilms}</div>;
  };

  const mapFilms = films.map((film) => <Card film={film} key={film.id} />).reverse();
  const mapFilteredFilms = filteredFilms.map((film) => <Card film={film} key={film.id} />).reverse();

  return (
    <div className="mainpage">
      <div className="container">
        <div className="mainpage-content">
          <div className="mainpage-content__search">
            <input type="text" placeholder="Поиск" value={search} onChange={changeHandler} id="search" className="search-input" />
          </div>
          {loading ? <Loader /> : mapFilmsByCondition()}
        </div>
      </div>
      <ModalCheck active={checkFilmModal}></ModalCheck>
      <ModalEdit active={editFilmModal}></ModalEdit>
    </div>
  );
};
