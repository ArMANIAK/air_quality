import React from 'react';
import './HeroBlock.scss';

const HeroBlock = ( {title, links, logos} ) => {
    const logoImages = logos.map((el, index) => <img className='hero-partners-logo' src={el} alt="partner logo" key={index}/>);
    const navMenu = links.map((el, index) => <a className='hero-navigation-item' href={el.href} key={index}>{el.title}</a>);
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-partners">
                    { logoImages }
                </div>
                <nav className="hero-navigation">
                    {navMenu}
                </nav>
                <h1 className="hero-title">
                    { title }
                </h1>
                <a className="hero-link" href=".">Отследить</a>
            </div>
        </section>
    );
};

export default HeroBlock;