import {useSelector} from "react-redux";

const ProductDetails = () => {
  const {product} = useSelector(state => state.product)

  return (
    <div>
      {product && JSON.stringify(product)}
    </div>
  );
};

export default ProductDetails;