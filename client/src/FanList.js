import { React, useState } from "react";
import FanCard from "./FanCard";

function FanList({ fans }) {
  const displayFans = fans.map((item) => (
    <FanCard key={item.name} item={item} />
  ));
  return <div id="fanlist">{displayFans}</div>;
}

export default FanList;
