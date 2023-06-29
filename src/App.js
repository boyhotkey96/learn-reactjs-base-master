import Header from 'components/Header';
import AddTodo from 'features/AddTodo';
import AlbumFeature from 'features/Album';
import Categories from 'features/Categories';
import ClockFeature from 'features/Clock';
import ColorBox from 'features/ColorBox';
import Counter from 'features/Counter';
import GetApi from 'features/GetApi';
import MagicColor from 'features/MagicColor';
import Products from 'features/Products';
import RandomNumber from 'features/RandomNumber';
import TodoFeatures from 'features/Todo';
import Product from 'pages/Product';
import DetailPage from 'pages/Product/DetailPage';
import ListPage from 'pages/Product/ListPage';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Header />
      {/* <h1>React Hooks</h1>
      <ul>
        <li>
          <Link to="/album">Album</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
        <li>
          <Link to="/color-box">Color Box</Link>
        </li>
        <li>
          <Link to="/add-todo">Add todo</Link>
        </li>
        <li>
          <Link to="/get-api">Get Api</Link>
        </li>
        <li>
          <Link to="/clock">Clock</Link>
        </li>
        <li>
          <Link to="/magic-color">Magic Color</Link>
        </li>
        <li>
          <Link to="/products">Get Product</Link>
        </li>
        <li>
          <Link to="/categories">Get Categories</Link>
        </li>
        <li>
          <Link to="/random-number">Random Number using Redux</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul> */}

      <Routes>
        <Route path="/" />
        <Route path="/album" element={<AlbumFeature />} />
        <Route path="/todo" element={<TodoFeatures />} />
        <Route path="/color-box" element={<ColorBox />} />
        <Route path="/add-todo" element={<AddTodo />} />
        <Route path="/get-api" element={<GetApi />} />
        <Route path="/clock" element={<ClockFeature />} />
        <Route path="/magic-color" element={<MagicColor />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/random-number" element={<RandomNumber />} />
        <Route path="/counter" element={<Counter />} />

        <Route path="/product" element={<Product />}>
          <Route index element={<ListPage />} />
          {/* <Route path="/product/:productId" element={<DetailPage />} /> */}
          <Route path="/product/:productId" element={<DetailPage />}>
            <Route index element={<span>Description</span>} />
            <Route path="infomation" element={<span>Infomation</span>} />
            <Route path="review" element={<span>Review</span>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
