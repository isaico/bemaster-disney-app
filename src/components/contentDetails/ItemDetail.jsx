import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemFooter } from '../contentDetailsFooter/ItemFooter';
import { VideoPlayer } from './VideoPlayer';

export const ItemDetail = ({ item }) => {
    const [activateVideo, setActivateVideo] = useState(false);

    return (
        <div>
            {activateVideo ? (
                <VideoPlayer
                    videoUrl={item.videoUrl}
                    setActivateVideo ={setActivateVideo}
                ></VideoPlayer>
            ) : (
                <div>
                    <div className="">
                        <img src={item.heroImg} alt={item.altHeroImg} />
                        <div>
                            <Link to={`/home/${item.category}`}>Volver a la categoria</Link>
                            <div className="">{item.title}</div>
                            <div>
                               
                                <button onClick={() => setActivateVideo(true)}>
                                    VER AHORA
                                </button>
                                {item.description}
                            </div>
                        </div>
                        <ItemFooter item={item} />
                    </div>
                </div>
            )}
        </div>
    );
};
