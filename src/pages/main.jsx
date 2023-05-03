import React from 'react';
import "../libs/scss/style.scss"
import Card from "../components/layout/card";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const Main = () => {

  const { isLoading, error, data:youtubeData, isFetching } = useQuery({
    queryKey: ["youtubeList"],
    queryFn: () =>
      axios
        .get("/data/list.json")
        .then((res) => res.data),
  });

  if(isLoading) return false;

  return (
    <div className={"main-contents"}>
      <ul className={"list-wrap"}>
        <Card data={youtubeData.items} />
      </ul>
    </div>
  );
};

export default Main;