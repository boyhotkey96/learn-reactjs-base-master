import PropTypes from 'prop-types';

CategoriesList.propTypes = {
  categories: PropTypes.array,
};

function CategoriesList({ categories }) {
  return (
    <ul>
      {categories.map((categorie) => (
        <li key={categorie.id}>{categorie.name}</li>
      ))}
    </ul>
  );
}

export default CategoriesList;
