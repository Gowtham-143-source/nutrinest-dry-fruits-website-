import React, { useState } from 'react'
import PageHeader from '../components/PageHeader';
import Data from "../products.json"
import ProductCards from './ProductCards';
import Pagination from './Pagination';
import currentpage from "./Pagination";
import result from "./SingleProduct";
import Review from "./Review";
// import CartPage from './CartPage';

const showResults = "Showing 01 - 12 of 139 Results"

const Shop = () => {
    const[GridList, setGridList] = useState(true)
    const[products, set] = useState(Data)
    console.log(products);

    //pagination
    const [CurrentPage, setCurrentPage]= useState(1);
    const productsPerPage = 12;

    const indexofLastProduct = currentpage * productsPerPage;
    const indexofFirstProduct = indexofLastProduct - productsPerPage;
    const currentProducts = products.slice(indexofFirstProduct,indexofLastProduct);

    //function to change the current page
    const paginate = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }
  return (
    <div>
        <PageHeader title="Our Shop Page" curPage="Shop"/>
        {/* shop page */}
        <div className='shop-page padding-tb'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8 col-12'>
                        <article>
                            {/*layout and title here*/}
                            <div className='shop-title d-flex flex-wrap justify-content-between'>
                                <p>{showResults}</p>
                                <div className={`product-view-mode ${GridList ? "gridActive": "listActive"}`}>
                                    <a className='grid' onClick={() => setGridList(!GridList)}>
                                        <i className='icofont-ghost'></i>
                                    </a>
                                    <a className='list' onClick={() => setGridList(!GridList)}>
                                        <i className='icofont-listine-dots'></i>
                                    </a>
                                </div>
                            </div>
                            {/*product card*/}
                            <div>
                                <ProductCards GridList={GridList} products={products}/>
                            </div>
                            <Pagination 
                            productsPerPage={productsPerPage}
                            totalProducts = {products.length}
                            paginate={paginate}
                            activePage={CurrentPage}
                            />

                        </article>
                    </div>
                    {/* <div className='col-lg-4 col-12'>
                        right  side
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop