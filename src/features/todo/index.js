import {useState} from "react";
import TodoItem from "./components/TodoItem";
import {mapItems} from "./utils";


const initialState = {
  name: '',
  surname: '',
  salary: '',
}

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(initialState)

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form?.id) {
      /**
       * VARIANT 1
       */
      // const modifiedItems = mapItems(items).map((item, index) => {
      //   if (item.id === form.id) {
      //     item = {
      //       name: form.name,
      //       surname: form.surname,
      //       salary: form.salary,
      //     }
      //   }
      //   return item
      // })
      // setItems(modifiedItems)

      /**
       * VARIANT 2
       */
      const result = mapItems(items).reduce((acc, currentValue) => {
        if (currentValue.id === form.id) {
          currentValue = {
            name: form.name,
            surname: form.surname,
            salary: form.salary,
          }
        }
        acc.push(currentValue)
        return acc
      }, [])

      setItems(result)
    } else {
      setItems(prevState => [...prevState, form])
    }
    handleReset()
  }

  const handleChange = ({target: {name, value}}) => {
    setForm({...form, [name]: value})
  }

  const handleEdit = (data) => {
    setForm(data)
  }

  const handleRemove = (data) => {
    setItems(mapItems(items).filter(item => item.id !== data.id))
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
          <label>Name</label>
          <input value={form.name} name={'name'} onChange={handleChange}/>
        </fieldset>
        <fieldset>
          <label>Surname</label>
          <input value={form.surname} name={'surname'} onChange={handleChange}/>
        </fieldset>
        <fieldset>
          <label>salary</label>
          <input value={form.salary} name={'salary'} onChange={handleChange}/>
        </fieldset>
        <button type={'submit'}>{form?.id ? 'Edit' : 'Add'}</button>
        <button type={'button'} onClick={handleReset}>Clear</button>
      </form>

      {mapItems(items).map(item => <TodoItem key={item.id} data={item} onEdit={handleEdit} onDelete={handleRemove}/>)}
    </div>
  );
};

export default TodoList;