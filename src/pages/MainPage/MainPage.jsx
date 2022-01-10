import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Card } from "../../components/Card/Card";
import { Loader } from "../../components/Loader/Loader";
import { getFilms } from "../../store/actions/filmsAction";
import "./MainPage.css";

export const MainPage = () => {
  const dispatch = useDispatch();
  const { films, loading } = useSelector((state) => state.films);

  useEffect(() => {
    dispatch(getFilms());
  }, []);

  const mapFilms = films.map((film) => <Card film={film} key={film.id} />).reverse();

  return (
    <div className="mainpage">
      <div className="container">
        <div className="mainpage-content">{loading ? <Loader /> : <div className="mainpage-content__films">{mapFilms}</div>}</div>
      </div>
    </div>
  );
};
