import React from "react";
import docCardData from "../../../data/docListData";
import DocCard from "./doc_card";

function DocCardsList(params) {
 
  return (
    <>
      {docCardData.map((data, i) => (
        <DocCard
          to={data.to}
          doc_icon={data.doc_icon}
          title={data.title}
          desc={data.desc}
          key={i}
        />
      ))}
    </>
  );
}
export default DocCardsList;
