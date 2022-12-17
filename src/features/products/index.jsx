import Product from "./components/Product";
import {useRef, useState} from "react";
import {useGetProductsQuery} from "./api";
import ProductDetails from "./components/ProductDetails";
import ProductForm from "./components/ProductForm";

const Products = () => {
  const timeout = useRef(null);
  const [params, setParams] = useState({
    limit: 10,
    skip: 0,
    q: ''
  })
  const [input, setInput] = useState('');

  const {
    data = {products: [], total: 0},
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error
  } = useGetProductsQuery(params)


  const handleChangeSearch = ({target: {name, value}}) => {
    setInput(value);
    clearTimeout(timeout.current);
    if (!(value.length > input?.length && value?.includes(input) && data?.total <= params.limit)) {
      timeout.current = setTimeout(() => {
        setParams({...params, [name]: value});
        timeout.current = null;
      }, 300)
    }
  }


  const handlePagination = ({target: {name}}) => {
    if (name === 'right') {
      setParams(prevState => ({...prevState, skip: prevState.skip + prevState.limit}))
    } else {
      setParams(prevState => ({
        ...prevState,
        skip: prevState.skip - prevState.limit < 0 ? 0 : prevState.skip - prevState.limit
      }))
    }
  }

  return (
    <div>
      <h2>POSTS</h2>
      <input name={'q'} value={input} onChange={handleChangeSearch}/>
      {isLoading && <p>loading</p>}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {!data.products.length && isSuccess && <p>No ITEMS</p>}
        {data.products.map(item => <Product key={item.id} data={item}/>)}
      </div>
      <div>
        <button style={{marginRight: '10px'}} name={'left'} onClick={handlePagination} disabled={!params.skip}>LEFT
        </button>
        <button name={'right'} onClick={handlePagination} disabled={data.total < params.skip}>RIGHT</button>
      </div>

      <ProductDetails/>
      <ProductForm/>
    </div>
  );
};

export default Products;