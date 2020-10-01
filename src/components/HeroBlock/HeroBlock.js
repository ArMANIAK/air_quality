import React, { useState } from 'react';
import './HeroBlock.scss';
import { useScreenSize } from '../../helpers/Resize';

const HeroBlock = ( {title, links, logos} ) => {
    const logoImages = logos.map((el, index) => <img className='hero-partners-logo' src={el} alt="partner logo" key={index}/>);
    const navMenu = links.map((el, index) => <a className='hero-navigation-item' href={el.href} key={index}>{el.title}</a>);
    const [visibility, setVisibility] = useState(false);
    const winSize = useScreenSize();
    
    return (
        <section className="hero">
            <div className="hero-hamburger">{ navMenu }</div>
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
            <a className="hero-button" href="#facts" />
        </section>
    );
};

export default HeroBlock;