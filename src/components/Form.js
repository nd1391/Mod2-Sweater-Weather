import { useState } from 'react';


export default function Form (props) {

    const [formData, setFormData] = useState({
        searchLoc: ""
    })
    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        //prevent page from refreshing on form submission
        event.preventDefault();
    
        props.locsearch(formData.searchLoc);
      };



    return (
        <>
        <div className="form">
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleChange}
              value={formData.searchLoc}
              name="searchLoc"
            />
            <input type="submit" value="Submit Location" />
          </form>


            {/* <input type="text">Zip Code/City</input>
            <input type="submit" value="Search" /> */}
        </div>
        </>
    )
}