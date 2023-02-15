import AlbumList from "./components/AlbumList";
import Proptypes from 'prop-types'

AlbumList.propTypes = {
  // albumList: Proptypes.array.isRequired,
}

function AlbumFeature() {
  const albumList = [
    {
      id: 1,
      name: 'Đặc sắc nhất',
      thumnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2023/02/10/0/b/a/d/1676006065233_300.jpg',
    },
    {
      id: 2,
      name: 'Tân binh nhạc việt',
      thumnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2022/12/26/4/5/9/7/1672049502997_300.jpg',
    },
    {
      id: 3,
      name: 'Top 20 nhạc trẻ',
      thumnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2023/02/06/6/c/c/c/1675672957917_300.jpg',
    },
  ];

  return (
    <>
      <h2>Có thể bạn sẽ thích đấy</h2>
      <AlbumList albumList={albumList} />
    </>
  );
}

export default AlbumFeature;
