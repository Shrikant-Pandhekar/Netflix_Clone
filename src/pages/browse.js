import React from "react";
import BrowseContainer from "../container/browse";
import { useContent } from "../hooks";
import selectionFilter from "../utlils/selectionMap";

function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides} />;
}

export default Browse;
