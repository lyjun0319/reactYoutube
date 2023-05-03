import React from 'react';
import {dateFormet} from "../../libs/js/common";
import {useNavigate} from "react-router-dom";
const Card = ({data}) => {
  const navigate = useNavigate();
  const handelClick =(id) => {
    navigate(`/detail/${id}`);
  }
  return data.map((items) =>{
    const {id,snippet} = items;
    const { title, thumbnails, channelTitle, publishedAt} = snippet;

    return (
      <li className={'youtube-list'} key={id}>
        <div className="list-thumbnail" onClick={()=>handelClick(id)}>
          <img src={thumbnails.standard.url} alt=""/>
        </div>
        <div className={"list-info"}>
          <h2 className={"list-title"} onClick={()=>handelClick(id)}>{title}</h2>
          <p className={"channel-id"}>{channelTitle}</p>
          <p className={"write-day"}>{dateFormet(publishedAt)}</p>
        </div>
      </li>
    )
  })
};


export default Card;