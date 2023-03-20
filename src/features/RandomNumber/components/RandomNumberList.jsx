import PropTypes from 'prop-types';
import styled from 'styled-components';

RandomNumberList.propTypes = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.number,
};

RandomNumberList.defaultProps = {
  hobbyList: [],
  activeId: null,
};

const Li = styled.li`
  font-size: 22px;
  transition: all 0.25s ease-in-out 0s;
  cursor: pointer;
  &.active {
    color: deeppink;
  }
`;

function RandomNumberList(props) {
  const { hobbyList, activeId, onHobbyClick } = props;

  const handleClick = (id) => {
    if (onHobbyClick) {
      onHobbyClick(id);
    }
  };

  return (
    <ul>
      {hobbyList.map((hobby, index) => (
        <Li key={index} className={hobby.id === activeId ? 'active' : ''} onClick={handleClick.bind(null, hobby.id)}>
          {hobby.title} {hobby.id}
        </Li>
      ))}
    </ul>
  );
}

export default RandomNumberList;
