import React from 'react';

const ListItem = (props) => (
  <div>
    <h1>task</h1>
    <input type="task" name="task" onChange={props.value} />
    <input type="" name="task" /> 
    <button onClick={props.value} >Send</button>
  </div>
)

export default ListItem;