import {useEffect, useState} from "react";
import {useCreateProductMutation} from "../api";

const initialState = {
  title: "",
  price: 0
}
const ProductForm = () => {
  const [form, setForm] = useState(initialState);
  const [trigger, {data, isSuccess}] = useCreateProductMutation();

  console.log(data);
  const handleSubmit = (event) => {
    event.preventDefault();
    trigger(form)
    handleReset()
  }

  useEffect(()=> {
    if (isSuccess){
      alert(JSON.stringify(data))
    }
  }, [isSuccess])

  const handleChange = ({target: {name, value}}) => {
    setForm({...form, [name]: value})
  }

  const handleReset = () => {
    setForm(initialState)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{
        maxWidth: '200px'
      }}>
        <fieldset>
          <label>TITLE</label>
          <input value={form.title} name={'title'} onChange={handleChange}/>
        </fieldset>
        <fieldset>
          <label>Price</label>
          <input value={form.price} name={'price'} onChange={handleChange}/>
        </fieldset>
        <button type={'submit'}>Add</button>
        <button type={'button'} onClick={handleReset}>Clear</button>
      </form>
    </div>
  );
};

export default ProductForm;