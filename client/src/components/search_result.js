import React from 'react';

function handleClick(props) {
  if (props.userGoingQ) {
    props.removeBar(props.id, props.index);
  }
  else {
    props.addBar(props.id, props.index);
  }
}

export default (props) => {
  // props contains id, name, url, rating, image_url, and possibly totalUsers and userGoingQ
  // props contains addBar, removeBar
  
  const totalGoing = (props.totalUsers ? props.totalUsers : 0);
  
  return (
    <li className="list-group-item poll-title">
      <a className="btn btn-default" href={props.url} target="_blank">{props.name}</a>
      <button className={`btn ${props.userGoingQ ? 'btn-success' : 'btn-default'}`} onClick={() => {handleClick(props);}}>{`${totalGoing} going`}</button>
    </li>
  );
};

