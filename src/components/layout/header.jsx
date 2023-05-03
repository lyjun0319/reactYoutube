import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault()
    navigate(`/detail/1`);
  }
  return (
    <header>
      <h1 className={'logo'}><Link to={"/"}>Youtube</Link></h1>
      <div className={"searchWrap"}>
        <form action="">
          <input type="text"/>
          <button onClick={handleSubmit}>검색</button>
        </form>
      </div>
    </header>
  );
};

export default Header;