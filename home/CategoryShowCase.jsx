import React, { useState } from 'react';
import { Link } from "react-router";
import Ratting from '../components/Ratting';

const title = "Our Products";

const ProductData = [
{
imgUrl: 'src/assets/images/walnut.jpg',
cate: 'Dry fruit',
title: 'Walnut',
author: 'assets/images/course/author/01.jpg',
brand: 'Nutrinest',
price: '$199.00',
id: 1,
},
{
imgUrl: 'src/assets/images/mixed.jpg',
cate: 'Mixed',
title: 'Freash and Sweet',
author: 'assets/images/course/author/02.jpg',
brand: 'Nutrinest',
price: '$199.00',
id: 2,
},
{
imgUrl: 'src/assets/images/flax.jpg',
cate: 'Seeds',
title: 'Flax seed',
author: 'src/assets/images/categoryTab/brand/apple.png',
brand: 'Nutrinest',
price: '$199.00',
id: 3,
},
{
imgUrl: 'src/assets/images/dry fruits.jpg',
cate: 'Mixed',
title: 'Fresh and Quality',
author: 'assets/images/course/author/04.jpg',
brand: 'Nutinest',
price: '$199.00',
id: 4,
},
{
imgUrl: 'src/assets/images/apricot.jpg',
cate: 'Dry fruit',
title: 'Apricot',
author: 'assets/images/course/author/05.jpg',
brand: 'Nutrinest',
price: '$199.00',
id: 5,
},
{
imgUrl: 'src/assets/images/sunflower.jpg',
cate: 'Seeds',
title: 'Sunflower Seeds',
author: 'assets/images/course/author/06.jpg',
brand: 'Nutrinest',
price: '$199.00',
id: 6,
},
{
imgUrl: 'src/assets/images/pecans.jpg',
cate: 'single peace',
title: 'Pecans ',
author: 'assets/images/course/author/01.jpg',
brand: 'Nutrinest',
price: '$199.00',
id: 7,
},
{
imgUrl: 'src/assets/images/almond.jpg',
cate: 'Dry fruit',
title: 'Almond',
author: 'assets/images/course/author/02.jpg',
brand: 'Nutrinest',
price: '$199.00',
id: 8,
},
];


const CategoryShowCase = () => {
    const [items, setItems] = useState(ProductData);

    //category baded filtering
    const filterItem = (categItem) => {
    const updateItems = ProductData.filter((curElem) => {
        return curElem.cate === categItem;
    });
    setItems(updateItems)
    };
    return (
    <div className='course-section style-3 padding-tb'>
        {/* shapes */}
        <div className='course-shape one'>
            <img src='/src/assets/images/shape-img/icon/01.png' alt='' />
            </div>
        <div className='course-shape two'>
            <img src='/src/assets/images/shape-img/icon/02.png' alt='' />
            </div>
            {/* main section */}
            <div className='container'>
            {/* section header*/}
            <div className='section-header'>
                <h2 className='title'>{title}</h2>
                <div className='course-filter-group'>
                    <ul className='lab-ul'>
                        <li onClick={()=> setItems(ProductData)}>All</li>
                        <li onClick={()=> filterItem("Dry fruit")}>Dry fruit</li>
                        <li onClick={()=> filterItem("Mixed")}>Mixed</li>
                        <li onClick={()=> filterItem("Seeds")}>Seeds</li>
                        {/* <li onClick={()=> filterItem("Beauty")}>Beauty</li> */}
                    </ul>
                </div>

            </div>
            {/* section body */}
            <div className='section-wrapper'>
                <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1
                course-filter'>
                    {
                        items.map((product) => <div key={product.id} className='col'>
                            <div className='course-item style-4'>
                                <div className='course-inner'>
                                    <div className='course-thumb'>
                                        <img src={product.imgUrl} alt="" />
                                        <div className='course-category'>
                                            <div className='course-cate'>
                                                <a href="#">{product.cate}</a>
                                            </div>
                                            <div className='course-reiew'>
                                                <Ratting/>
                                            </div>

                                        </div>
                                    </div>
                                    {/* content */}
                                    <div className='course-content'>
                                        <Link to={`/shop/$product.id`}><h6>{product.title}</h6></Link>
                                        <div className='course-footer'>
                                            <div className='course-author'>
                                            <Link to ="/" className='ca-name'>{product.brand}</Link>
                                            </div>
                                           <div className='course-price'>
                                                 {product.price}
                                           </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)               }
                </div>
            </div>
            </div>
    </div>
  );
};

export default CategoryShowCase ;