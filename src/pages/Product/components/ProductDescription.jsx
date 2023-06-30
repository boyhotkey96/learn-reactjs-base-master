import DOMPurify from 'dompurify';
import { useOutletContext } from 'react-router-dom';

function ProductDescription() {
  const product = useOutletContext();

  let clean = DOMPurify.sanitize(product.description);

  return <div contentEditable="false" dangerouslySetInnerHTML={{ __html: clean }}></div>;
}

export default ProductDescription;
