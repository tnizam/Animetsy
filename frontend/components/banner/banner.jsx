import React from 'react';
import { Link } from 'react-router-dom';


    const Banner = () => {

        return (
            <div className="top-banner">
                <br />
                <div className="banner-container">
                    <h2 className="font-style">Find things you'll love. Support independent sellers. Only on Animetsy.</h2>
                    <br />
                    <div className="anime-row">
                        <div className="image-text">
                            <img src={window.aniurl} className="anime-category" />
                            <h3 className="anime-name">Haikyu</h3>
                        </div>
                        <div className="image-text">
                            <img src={window.aniurl2} className="anime-category" />
                            <h3 className="anime-name">HunterXHunter</h3>
                        </div>
                        <div className="image-text">
                            <img src={window.aniurl3} className="anime-category" />
                            <h3 className="anime-name">My Hero Academia</h3>
                        </div>
                        <div className="image-text">
                            <img src={window.aniurl4} className="anime-category" />
                            <h3 className="anime-name">Naruto</h3>
                        </div>
                        <div className="image-text">
                            <img src={window.aniurl5} className="anime-category" />
                            <h3 className="anime-name">Tokyo Ghoul</h3>
                        </div>
                        <div className="image-text">
                            <img src={window.aniurl6} className="anime-category" />
                            <h3 className="anime-name">One Piece</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default Banner;