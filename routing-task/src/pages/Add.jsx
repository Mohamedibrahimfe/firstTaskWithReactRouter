import { useState } from "react"
const Add =(props)=>{
const [form, setForm] = useState(
    {id:"",name:"",price:0,quantity:0,isSelected:false}
)



    return(
        <>
        <form>
            <div className="form-group">
                <label htmlFor="Name">Item Name</label>
                <input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} type="text" className="form-control" id="Name" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label htmlFor="price">Item Price</label>
                <input value={form.price} onChange={(e) => setForm({...form, price: e.target.value})} type="number" className="form-control" id="price" />
            </div>
            <button onSubmit={() => props.addDish(form)} type="submit" className="btn btn-primary my-2">Add</button>
        </form>
        
        </>
    )
}

export default Add;