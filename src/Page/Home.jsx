import React, { useEffect, useState } from "react";
import Person from "../component/Person";
import DisplayBox from "../component/DisplayBox";
import { useParams } from "react-router-dom";

function Home() {
    const [products, setProduct] = useState([]);
    const [limit, setLimit] = useState(30);

    const getlimit = () => {
        setLimit(prevLimit => prevLimit + 20);
    }

    const { slug } = useParams();

    const getproduct = async () => {
        console.log(slug);
        let response;

        if (slug == null) {
            response = await fetch(`https://dummyjson.com/products?limit=${limit}`);
        } else {
            response = await fetch(`https://dummyjson.com/products/category/${slug}`);
        }

        const data = await response.json();
        setProduct(data.products);
    }

    useEffect(() => {
        getproduct();
    }, [slug, limit]);

    const display = products.map((Prod) => {
        return <Person img={Prod.thumbnail} name={Prod.title} rating={Prod.rating} />;
    });

    console.log(display);

    return (
        <div className='container-md '>
            <div className="row border">
                <div className="col-4">
                    <DisplayBox currentSlug={slug} />
                </div>

                <div className="col-8">
                    <div className="row gap-3">
                        {display}
                    </div>

                    {limit < 120 && (
                        <div className="d-flex justify-content-center mt-5">
                            <div onClick={getlimit} className="btn btn-primary p-3">See more</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;
