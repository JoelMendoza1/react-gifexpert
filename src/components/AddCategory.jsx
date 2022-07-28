import React , {useState}from 'react'
//import PropTypes from 'prop-types'
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange=(e)=>{
        setInputValue(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const valueInput=inputValue.trim();
        if(valueInput.length<=1) return;
        onNewCategory(valueInput)
        //setCategories(cats =>[...cats, inputValue])
        setInputValue('')
        
        
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type='text'
            placeholder='Buscar Gifs'
            value={inputValue}
            onChange={handleInputChange}
        />
    </form>
  )
}

/*AddCategory.PropTypes={
    setCategories: PropTypes.func.isRequired
}*/
