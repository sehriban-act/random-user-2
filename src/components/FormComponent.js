import React from 'react'
import { Grid,Form,Segment,Button} from 'semantic-ui-react';


const FormComponent = ({info,setInfo,handleFormSubmit}) => {

  const handleInputChange=(e)=>{
    // const name=e.target.name
    // const value=e.target.value
    const {name,value}=e.target
    setInfo({...info,[name]:value})

  }
  const handleValue = (e) => {
    if (e.target.classList) {
      const newValue = e.target.dataset;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };

    return (
        <div>
        
        </div>
    )
}

export default FormComponent