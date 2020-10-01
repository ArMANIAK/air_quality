import React from 'react';
import './Footer.scss';

const Footer = ( {links, logos} ) => {
    const logoImages = logos.map((el, index) => <img className='footer-partners-logo' src={el} alt="partner logo" key={index}/>);
    const navMenu = links.map((el, index) => <a className='footer-middle-navigation-item' href={el.href} key={index}>{el.title}</a>);
    return (
        <section id="footer" className="footer">
            <div className="footer-partners">
                { logoImages }
            </div>
            <div className="footer-middle">
                <nav className="footer-middle-navigation">
                    {navMenu}
                </nav>
                <p className="footer-middle-credits">Сайт был разработан <span className="footer-credits">Михаилом Алёшиным</span> в учебных целях, в рамках образовательной программы IT nation. Дизайн сайта создан <span className="footer-credits">Валерией Бубырь</span>.</p>
            </div>
            <p className="rights">
                2020, Все права защищены
            </p>
            <div className="rights">
                Согласие на обработку персональных данных<br/>
                Политика конфиденциальности
            </div>
        </section>
    );
};

export default Footer;