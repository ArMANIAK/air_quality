import React, { useState } from 'react';

const PolicyCard = ({image, title, tooltip}) => {

    const [isTooltipVisible, setTooltipVisibility] = useState(false);
    const showTooltip = () => setTooltipVisibility(true);
    const hideTooltip = () => setTooltipVisibility(false);

    return(
        <section className="policy-card" onMouseEnter = { showTooltip } onMouseLeave = { hideTooltip }>
            <img className="policy-card-image" src={image} alt={title} />
            <h4 className={ isTooltipVisible ? "policy-card-title policy-card-title-active" : "policy-card-title" } >{title}</h4>
            {
                isTooltipVisible && <p className="policy-card-tooltip">{tooltip}</p>
            }
        </section>
    )
}

export default PolicyCard;