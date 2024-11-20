import React from 'react'
const Card  =(props)=>{
return(
    <div className='card' style={{borderWidth:1 ,color:'black',border:'1px solid black', padding:'20px',borderRadius:'8px',marginTop:'10px'}}>
<h2>{props.product}</h2>
<p>{props.productPrice}</p>
<p>{props.decription}</p>
    </div>
)
}
export default Card