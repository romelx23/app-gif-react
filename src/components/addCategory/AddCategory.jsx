import React,{useState}  from 'react'
import PropTypes from 'prop-types';
import './AddCategory.css';
const AddCategory = ({setCategories}) => {
    const [inputvalue, setinputvalue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setinputvalue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputvalue.trim().length>2){
            setCategories((re)=>[inputvalue,...re]);
            setinputvalue('')
        }
        // console.log('submit hecho');
    }
    return (
        <>
          <form onSubmit={handleSubmit}>
            <input 
            value={inputvalue}
            className="form-control"
            type="text"
            onChange={handleInputChange}/>  
          </form>
        </>
    )
}

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}
export default AddCategory;
