import React from 'react';
import PolicyCard from './PolicyCard';
import './Policies.scss';

const Policies = ({title, subtitle, cards}) => {
    const policyCards = cards.map(el => 
        <PolicyCard key = {el.id}
                    image = {el.image}
                    title = {el.title}
                    tooltip = {el.tooltip}>
                        <p>{title}</p>
        </PolicyCard>
    );

    return(
        <section className="policies" id="policy">
            <h2 className="policies-title">{title}</h2>
            <h4 className="policies-subtitle">{subtitle}</h4>
            <div className='policies-cards'>{policyCards}</div>
        </section>
    )
}

export default Policies;