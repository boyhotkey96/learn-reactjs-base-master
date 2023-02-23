import queryString from 'query-string';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from './components/Pagination';
import PostList from './components/PostList';

const H2 = styled.h2`
  color: deeppink;
  font-size: 32px;
`;

function GetApi() {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({});
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 18,
    _totalRows: 21,
    // _search: ...,
  });

  useEffect(() => {
    const getApi = async () => {
      try {
        const paramsString = queryString.stringify(filters);
        const url = `https://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const res = await fetch(url);
        const resJSON = await res.json();
        console.log(resJSON);

        const { data, pagination } = resJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch api post list', error);
      }
    };
    getApi();
  }, [filters]);

  const handlePageChange = (newPage) => {
    console.log('>>> New Page: ', newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  };

  return (
    <div>
      <H2>Get Api</H2>
      <PostList postList={postList} />
      <Pagination pagination={pagination} onPagechange={handlePageChange} />
    </div>
  );
}

export default GetApi;
