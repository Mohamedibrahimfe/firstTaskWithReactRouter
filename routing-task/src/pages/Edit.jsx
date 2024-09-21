import axios from "axios"
import { useEffect, useState } from "react"
const Edit = (props) => {
    const [form, setForm] = useState(
        
    )
    const getData=(id) => {
        axios
          .get(`http://localhost:3001/dishs/${id}`)
          .then((res) => {
            setForm(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }
    useEffect(() => {
        getData(props.match.params.id)
    })
    const handleSubmitAdd = async(e)=>{
        e.preventDefault();
        const obj = {
            id: Date.now(),
            ...form,
            quantity: 0,
            isSelected: false
        }
       await axios.post("http://localhost:3001/dishs", obj);
    //    props.history.replace("/admin")
    }
    return ( <>
        <form>
            <div className="form-group">
                <h1>Edit Item : </h1>
                <label htmlFor="Name">Item Name</label>
                <input  onChange={(e) => setForm({...form, name: e.target.value})} type="text" className="form-control" id="Name" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label htmlFor="price">Item Price</label>
                <input value={form.price} onChange={(e) => setForm({...form, price: e.target.value})} type="number" className="form-control" id="price" />
            </div>
            <button onSubmit={handleSubmitAdd} type="submit" className="btn btn-primary my-2">Add</button>
        </form>
        
    </> );
}
 
export default Edit;