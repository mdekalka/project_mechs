import React from 'react';

import './PilotsDetailsView.css';

const PilotsDetailsView = ({ name, rank, age, gunnery, piloting, mech }) => {
  return (
    <div className="details-view">
      <div className="details-view-row title">
        <div className="details-view-value">{name}</div>
        <div className="details-view-title">[Name]</div>
      </div>
      <div className="details-view-row title">
        <div className="details-view-value">{rank}</div>
        <div className="details-view-title">[Rank]</div>
      </div>
      <div className="details-view-row title">
        <div className="details-view-value">{age}</div>
        <div className="details-view-title">[Age]</div>
      </div>
      <div className="details-view-row title">
        <div className="details-view-value">{gunnery}</div>
        <div className="details-view-title">[Gunnery]</div>
      </div>
      <div className="details-view-row title">
        <div className="details-view-value">{piloting}</div>
        <div className="details-view-title">[Piloting]</div>
      </div>
      <div className="details-view-row title">
        <div className="details-view-value">{mech}</div>
        <div className="details-view-title">[Mech]</div>
      </div>
    </div>
  )
};

export default PilotsDetailsView;