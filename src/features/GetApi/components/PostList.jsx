import PropTypes from 'prop-types';
import styled from 'styled-components';

PostList.propTypes = {
  postList: PropTypes.array.isRequired,
};

const Ul = styled.ul`
  li {
    color: deeppink;
    font-size: 22px;
  }
`;

function PostList(props) {
  const { postList } = props;
  // console.log(postList)

  return (
    <Ul>
      {postList.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </Ul>
  );
}

export default PostList;
