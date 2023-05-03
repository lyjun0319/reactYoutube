import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import Card from "../components/layout/card";

const Detail = () => {
  const {detailId} = useParams();
  const { isLoading, error, data:relatedList, isFetching } = useQuery({
    queryKey: ["relatedList"],
    queryFn: () =>
      axios
        .get("/data/related.json")
        .then((res) => res.data),
  });

  if(isLoading) return false;

  console.log(relatedList)
  return (
    <div className={"detail-contents"}>
      <section>
        <iframe src={`http://www.youtube.com/embed/${detailId}`} />
      </section>
      <section className="related-list">
        <ul>
          {
            relatedList.items.map((items, key)=> {
              return <li key={items.id.videoId}>

              </li>
            })
          }
        </ul>
      </section>
    </div>
  );
};

export default Detail;