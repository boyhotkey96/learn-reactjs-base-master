import PropTypes from 'prop-types';
import styled from 'styled-components';

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPagechange: PropTypes.func,
};

Pagination.defaultProps = {
  onPagechange: null,
};

const Button = styled.button`
  padding: 4px 8px;
  font-weight: bold;
  cursor: pointer;
`;

function Pagination(props) {
  const { pagination, onPagechange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const firstPage = 1;
  const lastPage = Math.ceil(_totalRows / _limit);

  const handlePrevClick = (_page) => {
    if (!onPagechange) return;
    onPagechange(_page - 1);
  };

  const handleNextClick = (_page) => {
    if (!onPagechange) return;
    onPagechange(_page + 1);
  };

  return (
    <div>
      <Button disabled={_page === firstPage} onClick={handlePrevClick.bind(null, _page)}>
        Prev
      </Button>
      <Button disabled={_page === lastPage} onClick={handleNextClick.bind(null, _page)}>
        Next
      </Button>
    </div>
  );
}

export default Pagination;
