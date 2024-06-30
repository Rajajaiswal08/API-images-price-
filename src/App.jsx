import Person from "./Person";
import Products from "./beta/Product"

function App() {
  // const [count, setCount] = useState(0)
  const display = Products.map(
    (Prod) => {
     return <Person img={Prod.thumbnail} name={Prod.title} rating={Prod.rating}/>

     
    }
  );
  console.log(display);

  return(
    <div className='container-md'>
              <div className="row border " >
                 {
                   display
                 }
               
               </div>
    
    </div>
  

  )
}

export default App;
