import react from "react"


const Add =()=>{

    return(
        <>
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Item Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label htmlFor="exampleInputPassword1">Item Price</label>
                <input type="number" className="form-control" id="exampleInputPassword1" />
            </div>
            
            <button type="submit" className="btn btn-primary my-2">Add</button>
        </form>
        
        </>
    )
}

export default Add;