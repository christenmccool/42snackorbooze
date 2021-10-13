import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";

import './NewItemForm.css';

/* Form to add new snack or drink item to the menu and Snack or Booze database */
const NewItemForm = ({type, addItem}) => {
  const initialFormData = {
    name: "",
    description: "",
    recipe: "",
    serve: ""
  }

  const [formData, setFormData] = useState(initialFormData);

  const history = useHistory();

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addItem(type, formData);
    setFormData(initialFormData);
    history.push(`/${type}`)
  }

  return (
    <div className="NewItemForm">
      <h1>Add a new {type === "snacks" ? "snack" : "drink"} to our menu.</h1>
      <Form className="NewItemForm-form" onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input 
          type="text" 
          name="name" 
          id="name" 
          placeholder="New item name" 
          onChange={handleChange} 
          value={formData.name} 
          required 
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input 
          type="text" 
          name="description" 
          id="description" 
          placeholder="Describe this item for the menu" 
          onChange={handleChange} 
          value={formData.description} 
          required 
        />
      </FormGroup>
      <FormGroup>
        <Label for="recipe">Recipe</Label>
        <Input 
          type="type" 
          name="recipe" 
          id="recipe" 
          placeholder={`Provide the recipe for the ${type === "snacks" ? "kitchen" : "bar"}`} 
          onChange={handleChange} 
          value={formData.recipe} 
          required 
        />
      </FormGroup>
      <FormGroup>
        <Label for="serve">Serving Instructions</Label>
        <Input 
          type="text" 
          name="serve" 
          id="serve" 
          placeholder={`Give serving instructions for our ${type === "snacks" ? "servers" : "bartenders"}`} 
          onChange={handleChange} 
          value={formData.serve} 
          required 
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </div>
  )
}

export default NewItemForm;