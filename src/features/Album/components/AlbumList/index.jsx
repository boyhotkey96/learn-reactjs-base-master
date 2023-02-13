import React from 'react';
import Album from '../Album';
import './style.scss';
import Proptypes from 'prop-types';

AlbumList.propTypes = {
  albumList: Proptypes.array.isRequired,
};

function AlbumList({ albumList }) {
  return (
    <ul className="album-list">
      {albumList.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </ul>
  );
}

export default AlbumList;
