import {useLazyGetProductQuery} from "../api";

const Product = ({data}) => {
  const [trigger] = useLazyGetProductQuery()

  const handleSelect = () => {
    trigger(data.id)
  }

  return (
    <div style={{
      width: '300px',
      border: '1px solid black',
      margin: '10px'
    }} onClick={handleSelect}>
      <img src={data?.thumbnail} width={'100%'} height={'100px'}/>
      <p style={{marginBottom: '10px', fontWeight: 'bold'}}>{data?.title}</p>
      <p style={{marginBottom: '10px'}}>{data?.price}</p>
      <p style={{marginBottom: '10px', fontSize: '12px'}}>{data?.user}</p>
    </div>
  );
};

export default Product;