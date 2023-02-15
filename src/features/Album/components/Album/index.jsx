import PropTypes from 'prop-types';
import './style.scss';

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
