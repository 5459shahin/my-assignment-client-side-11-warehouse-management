import React from 'react';
import loadingImg from "../images/loader.gif";
import './Loading.css'

const Loading = () => {
    return (
        <div className="loading">
      <img src={loadingImg} alt="" />
    </div>
    );
};

export default Loading;