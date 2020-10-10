import React, { useState } from 'react';
import './HeroBlock.scss';

const HeroBlock = ( {title, links, logos, winSize} ) => {
    const logoImages = logos.map((el, index) => <img className='hero-partners-logo' src={el} alt="partner logo" key={index}/>);
    const navMenu = links.map((el, index) => <a className='hero-navigation-item' href={el.href} key={index}>{el.title}</a>);
    const [visibility, setVisibility] = useState(false);
    
    return (
        <section className="hero">
            <div className="container">
                {
                    visibility &&
                    <div className="hero-hamburger">
                    <div className="hero-hamburger-control">
                        <span className="hero-hamburger-control-X" onClick = {() => setVisibility(false)}>&#10005;</span>
                        <span className="hero-hamburger-control-hamIcon" onClick = {() => setVisibility(false)}>&#x2630;</span>
                    </div>
                     
                        <div className="hero-hamburger-navigation">
                            { navMenu }
                        </div>
                        <div className="rights">
                            <p>2020, Все права защищены</p>
                            <a className="rights" href=".">Согласие на обработку персональных данных</a>
                            <a className="rights" href=".">Политика конфиденциальности</a>
                        </div>
                    </div>
                }
                <div className="hero-partners">
                    { logoImages }
                    <span className="hero-hamburger-control-hamIcon" onClick = {() => setVisibility(true)}>&#x2630;</span>
                </div>
                <nav className="hero-navigation">
                    {navMenu}
                </nav>
                <h1 className="hero-title">
                    { title }
                </h1>
                <a className="hero-link" href=".">Отследить</a>
                <a className="hero-button" href="#facts" />                
            </div>
        </section>
    );
};

export default HeroBlock;