import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const setTitle = (currentSlug, data) => {
  const found = data.find(d => d.slug === currentSlug);
  if (found) {
    document.title = found?.name + " Listing";
  } else {
    document.title = "Products Listing";
  }
}




function DisplayBox(props) {
    const [category, setCategory] = useState([]);

    useEffect (
      ()=>{
        setTitle (props.currentSlug,category);
      },[props.currentSlug,category]
    )

    const getcategory=async()=>{

        const response =await fetch('https://dummyjson.com/products/categories');
        const data = await response.json();
        setCategory(data)

    }
    useEffect(
        ()=>{
             getcategory();
        },[category]
    )

    

  return (
    
    <ul className="list-group">
           <li className={`list-group-item ${props.currentSlug == null && 'bg-primary text-white'}`}>  
           <Link className="nav-link" to={`/`}> All </Link>
           </li>
    {
        category.map((cat, index) => {

            return (
                <li key={index} className={`${cat.slug === props.currentSlug ? 'bg-primary text-white' : ''} list-group-item`}>
               <Link key={index} className="nav-link" to={`/${cat.slug}`}>{cat.name}</Link>
               </li>

            )
        }
      )
        
        
   }
 
    </ul>

  )
}

export default DisplayBox