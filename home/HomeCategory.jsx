import React from 'react';
import {Link} from "react-router-dom";
const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
{
imgUrl: 'src/assets/images/almond.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Almond',
},
{
imgUrl: 'src/assets/images/apricot.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Apricot',
},
{
imgUrl: 'src/assets/images/black raisins.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Black Raisins',
},
{
imgUrl: 'src/assets/images/dry.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Fresh Product',
},
{
imgUrl: 'src/assets/images/mixed.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Mixed',
},
{
imgUrl: 'src/assets/images/dry fruits.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Dry fruit',
},
]

const HomeCategory = () => {
  return (
    <div className='category-section style-4 padding-tb'>
        <div className='container'>
            {/* section header */}
            <div className='section-header text-center'>
              <span className='subtitle'>{subTitle}</span>
              <h2 className='title'>{title}</h2>
            </div>
            {/* section card */}
            <div className='section-wrapper'>
                <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row cols-1'>
                    {
                        categoryList.map((val, i)=> (<div key={i} className='col'>
                            <Link to="/shop" className='category-item'>
                            <div className='category-inner'>
                                <div className='category-thumb'>
                                    <img src={val.imgUrl} alt='' />
                                </div>

                                {/* content */}
                                <div className='category-content'>
                                    <div className='cate-icon'>
                                        <i className={val.iconName}></i>
                                    </div>
                                    <Link to="/shop"><h6>{val.title}</h6></Link>
                                </div>

                            </div>
                            </Link>
                        </div>))
                    }
                </div>
                <div className='text-center mt-5'>
                    <Link to="/shop" className='lab-btn'><span>{btnText}</span></Link>
                </div>

            </div>


        </div>

    </div>
  )
};

export default HomeCategory;