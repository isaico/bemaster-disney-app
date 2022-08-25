import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemFooter } from '../contentDetailsFooter/ItemFooter';
import { VideoPlayer } from './VideoPlayer';
import './detail.css';
export const ItemDetail = ({ item }) => {
    const [activateVideo, setActivateVideo] = useState(false);

    return (
        <div>
            {activateVideo ? (
                <VideoPlayer
                    videoUrl={item.videoUrl}
                    setActivateVideo={setActivateVideo}
                ></VideoPlayer>
            ) : (
                <div className="detail">
                    <img
                        className="detail__header__img"
                        src={item.heroImg}
                        alt={item.altHeroImg}
                    />
                    <div className="detail__header__img-opacity"></div>

                    <div className="detail__content">
                        <Link
                            className="detail__btn-anchor"
                            to={`/home/${item.category}`}
                        >
                            Volver
                        </Link>
                        <div className="detail__header">
                            <div>
                                <div>
                                    <h2 className="text-white detail__header__title">
                                        {item.title.toUpperCase()}
                                    </h2>
                                </div>
                                <button
                                    className="detail__header__btn"
                                    onClick={() => setActivateVideo(true)}
                                >
                                    VER AHORA
                                </button>
                                <p className="text-white detail__header__text">
                                    {item.description}
                                </p>
                            </div>
                        </div>

                        <ItemFooter item={item} />
                    </div>
                </div>
            )}
        </div>
    );
};
