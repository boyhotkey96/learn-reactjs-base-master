import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  return (
    <li className="album">
      <img src={album.thumnailUrl} alt="album.name" />
      <p className="album__name">{album.name}</p>
    </li>
  );
}

export default Album;
