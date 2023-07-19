import React from "react";
import SpikeOfferContainer from "./spikeOfferContainer";
import spikeOffersData from "../data/spikeOfferData";
function SpikeOffers(params) {
  

  return (
    <div className="spike-offers">
      {spikeOffersData.map((data, i) => (
        <SpikeOfferContainer
          img={data.img}
          title={data.title}
          desc={data.desc}
          key={i}
        />
      ))}
    </div>
  );
}

export default SpikeOffers;
