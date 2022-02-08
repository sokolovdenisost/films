import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { E404 } from "../../components/404/404";
import { Loader } from "../../components/Loader/Loader";
import { getFilmById } from "../../store/actions/filmsAction";
import { getYoutubeVideoId } from "../../utils/url";
import "./FilmPage.css";

export const FilmPage = () => {
  const { film, loading } = useSelector((state) => state.films);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getFilmById(id));
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!Object.keys(film).length && !loading) {
    return <E404 />;
  }

  return (
    <div className="filmpage">
      <div className="container">
        <div className="filmpage-left">
          <img src={film.img} alt="" className="filmpage-left__img" />
          <div className="filmpage-left__trailer">
            <iframe title="trailer" src={getYoutubeVideoId(film.trailer)} allowFullScreen>
              Ваш браузер не поддерживает плавающие фреймы!
            </iframe>
          </div>
        </div>
        <div className="filmpage-right">
          <ul className="filmpage-list">
            <li className="filmpage-item">
              <div className="filmpage-item-title">Название</div>
              <div className="filmpage-item-subtitle">{film.name}</div>
            </li>
            <li className="filmpage-item">
              <div className="filmpage-item-title">Год</div>
              <div className="filmpage-item-subtitle">{film.year}</div>
            </li>
            <li className="filmpage-item">
              <div className="filmpage-item-title">Страна</div>
              <div className="filmpage-item-subtitle">{film.country}</div>
            </li>
            <li className="filmpage-item">
              <div className="filmpage-item-title">Жанр</div>
              <div className="filmpage-item-subtitle">{film.genre}</div>
            </li>
            <li className="filmpage-item">
              <div className="filmpage-item-title">Режиссер</div>
              <div className="filmpage-item-subtitle">{film.director}</div>
            </li>
            <li className="filmpage-item">
              <div className="filmpage-item-title">Бюджет</div>
              <div className="filmpage-item-subtitle">{film.budget}</div>
            </li>
            <li className="filmpage-item">
              <div className="filmpage-item-title">Описание</div>
              <div className="filmpage-item-subtitle">{film.description}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
