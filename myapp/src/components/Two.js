import { useSelector } from "react-redux";
import { useState } from 'react'

const Two = () => {
    const [product, setproduct] = useState('')
    const state = useSelector(state => state.categories)

    const handleSubmit = () => {
        console.log(product)
    }
    return (
        <div>
            <input onChange={(e) => { setproduct(e.target.value) }}
                type="text" />
            <button onClick={handleSubmit} >Add</button>
        </div>
    );
}

export default Two;