import React from "react";


const DropDown = ({ title, options ,func}) => {
    
  return (
    <div className="select">
      <select onChange={ (e)=>func(e.target.value)} className="px-2 py-1 rounded-lg" defaultValue="0" name="format" id="format" >
        <option value="0" disabled>
          {title}
        </option> 

        {options.map((o, i) => (
          <option className="" key={i} value={o}>{o.toUpperCase()}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
