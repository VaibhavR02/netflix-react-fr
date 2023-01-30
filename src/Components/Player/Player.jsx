import React from 'react';
import './player.scss';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import video from '../../video.mp4';
export default function Player() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={video} loop controls unmuted />
      </div>
    </div>
  );
}
