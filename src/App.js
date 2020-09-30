import React from 'react';
import HeroBlock from './components/HeroBlock/HeroBlock';
import Footer from './components/Footer/Footer';
import Policies from './components/Policies/Policies';
import MapBlock from './components/MapBlock/MapBlock';
import './App.scss';
import itn_logo from './assets/itn_logo.svg';
import east_logo from './assets/east_logo.svg';
import gc_logo from './assets/gc_logo.svg';
import Facts from './components/Facts/Facts';

function App() {
  const partners = [east_logo, itn_logo, gc_logo];
  const title = 'Качество атмосферного воздуха и здоровье';
  const navLinks = [
    {
      title: 'Основные факты',
      href: '#facts'
    },
    {
      title: 'Индекс качества воздуха',
      href: '#index'
    },
    {
      title: 'Политика по уменьшению загрязнений',
      href: '#policy'
    }
  ];

  const slides = [
    {
      id: '01',
      image: require('./assets/slides/slide01.jpg'),
      description: 'Женщины и дети – главные жертвы загрязнения воздуха'
    },
    {
      id: '02',
      image: require('./assets/slides/slide02.jpg'),
      description: 'Защитники окружающей среды подвергаются преследованиям'
    },
    {
      id: '03',
      image: require('./assets/slides/slide03.jpg'),
      description: 'Загрязнение воздуха – нарушение прав человека'
    },
    {
      id: '04',
      image: require('./assets/slides/slide04.jpg'),
      description: '4,2 миллиона случаев преждевременной смерти людей из-за загрязнения атмосферного воздуха'
    },
    {
      id: '05',
      image: require('./assets/slides/slide05.jpg'),
      description: 'Согласно оценкам, суммарный объем затрат в связи с загрязнением воздуха превышает 5 трлн долл. в год.'
    },
  ];

  const cards = [
    {
      id: 1,
      image: require('./assets/policies/policy01.jpg'),
      title: 'Промышленность',
      tooltip: 'Чистые технологии, способствующие уменьшению выбросов из промышленных дымовых труб; улучшенная утилизация городских и сельскохозяйственных отходов, включая каптаж (улавливание) метана, выделяемого в местах утилизации отходов, в качестве варианта, альтернативного сжиганию (для использования в качестве биогаза)',
    },
    {
      id: 2,
      image: require('./assets/policies/policy02.jpg'),
      title: 'Транспорт',
      tooltip: 'Переход к чистым способам выработки энергии; уделение приоритетного внимания скоростному городскому транспорту, пешеходным и велосипедным сетям в городах, а также железнодорожным междугородным грузовым и пассажирским перевозкам; переход к использованию более чистых большегрузных дизельных транспортных средств и автомобилей с низким уровнем выбросов, а также более чистых видов топлива, включая топливо со сниженной концентрацией серы',
    },
    {
      id: 3,
      image: require('./assets/policies/policy03.jpg'),
      title: 'Городское планирование',
      tooltip: 'Улучшение энергетической эффективности зданий и обеспечение более зеленых и компактных и тем самым более энергоэффективных городов',
    },
    {
      id: 4,
      image: require('./assets/policies/policy04.jpg'),
      title: 'Энергия',
      tooltip: 'Обеспечение доступа к недорогостоящим источникам энергии в быту для приготовления пищи, отопления и освещения',
    },
    {
      id: 5,
      image: require('./assets/policies/policy05.jpg'),
      title: 'Энергетика',
      tooltip: 'Более широкое использование видов топлива с низким уровнем выбросов и возобновляемых источников энергии, не основанных на сжигании (таких как энергия солнца, ветра или гидроэнергия); комбинированная выработка тепла и энергии; и распределенная выработка энергии (например, энергетические минисистемы и размещаемые на крыше установки для выработки энергии из солнечной энергии)',
    },
    {
      id: 6,
      image: require('./assets/policies/policy06.jpg'),
      title: 'Утилизация отходов',
      tooltip: 'стратегии уменьшения отходов, сортировки отходов, рециклирования, повторного использования или переработки отходов; а также улучшенные методы биологической утилизации отходов, такие как анаэробная переработка отходов для производства биогаза, являются практически осуществимыми, недорогими альтернативными вариантами открытому сжиганию твердых отходов',
    }
  ];
  
  return (
    <>
      <HeroBlock title = { title }
                  logos = { partners }
                  links = { navLinks } />
      <Facts title = { 'Основные факты' }
              slides = { slides } />
      <MapBlock title = { 'Индекс качества воздуха в режиме реального времени' }
                capture = { 'Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.' } />
      <Policies title = { 'Политика по уменьшению загрязнений' }
                subtitle = { 'Есть много примеров успешной политики по уменьшению загрязнения воздуха в таких секторах, как транспорт, городское планирование, энергетика и промышленность:' }
                cards = { cards } />
      <Footer logos = { partners }
              links = { navLinks } />
    </>
  );
}

export default App;