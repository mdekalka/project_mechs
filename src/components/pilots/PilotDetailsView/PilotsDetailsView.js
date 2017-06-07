import React from 'react';

const PilotsDetailsView = ({ name, rank, age, gunnery, piloting, mech }) => {
  return (
    <div className="details-view">
      <div className="details-view-row">
        <div className="details-view-title">Name</div>
        <div className="details-view-value">{name}</div>
      </div>
      <div className="details-view-row">
        <div className="details-view-title">Rank</div>
        <div className="details-view-value">{rank}</div>
      </div>
      <div className="details-view-row">
        <div className="details-view-title">Age</div>
        <div className="details-view-value">{age}</div>
      </div>
      <div className="details-view-row">
        <div className="details-view-title">Gunnery</div>
        <div className="details-view-value">{gunnery}</div>
      </div>
      <div className="details-view-row">
        <div className="details-view-title">Piloting</div>
        <div className="details-view-value">{piloting}</div>
      </div>
      <div className="details-view-row">
        <div className="details-view-title">Mech</div>
        <div className="details-view-value">{mech}</div>
      </div>
    </div>
  )
};

export default PilotsDetailsView;