import DOMPurify from 'dompurify';

function ProductDescription({ product }) {
  // console.log(product);
  // const product = useOutletContext();

  let clean = DOMPurify.sanitize(product.description);

  return <div contentEditable="false" dangerouslySetInnerHTML={{ __html: clean }}></div>;

  // return <>sfdsfdfsfsdfsfds</>
}

export default ProductDescription;
