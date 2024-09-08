import './Book.css'
export default function Book({book}){
const {name,price}=book;
return (
<div className='book'>
<h3>Books Name: {name} </h3>
<h3>Books price: {price}</h3>
</div>
)



}