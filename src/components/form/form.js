import React from "react";

 function Form (props) {
    return (
      <div className="form-input">
        

          <input className="input-field"
            type="text"
            value={props.query}
            onChange={props.handleUrl}
          />
          <div className="method-choice">
          <select onChange={props.onMethodHandler}>
            <option value="get">GET</option>
            <option value="post">POST</option>
            <option value="put">PUT</option>
            <option value="delete">DELETE</option>
          </select>
          <div className="body-entry">
         <label>BODY :</label>
         <textarea 
         value={props.body}
         onChange={props.onBodyChange}
         ></textarea>
          </div>
          <div className="header-entry">
         <label>HEADER</label>
         <textarea 
         value={props.headers}
         onChange={props.onHeaderChange}
         >

         </textarea>
          </div>

          <button className="button"
          onClick={props.submitHandler}>
            Submit</button>
        </div>
      </div>
    );
  }

  export default Form;