import React, { useState } from 'react';
const reviewtitle = "Add a Review";

let ReviewList = [ { imgUrl: "/src/assets/images/instructor/01.jpg", imgAlt: "Client thumb", name: "Ganelon Boileau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, 
    { imgUrl: "/src/assets/images/instructor/02.jpg", imgAlt: "Client thumb", name: "Morgana Cailot", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, 
         ];



const Review = () => {
    const[reviewShow, setReview] = useState(true);

  return (
    <>
    <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DesActive"}`}>
        <li className='desc' onClick={() => setReviewShow(!reviewShow)}>Description</li>
        <li className='rev' onClick={() => setReviewShow(!reviewShow)}>reviews</li>
        </ul>
        {/* desc & review content */}
        <div className={`eview-content ${reviewShow ? "review-content-show": "description-show"}`}>
            <div className='review-showing'>
                <ul className='content lab-ul'>
                    {
                        ReviewList.map((review, i)=> (
                            <li key={i}>
                                <div className='post-thumb'>
                                    <img src={review.imgUrl} alt="" />
                                </div>
                                <div className='post-content'>
                                    <div className='entry-meta'>
                                        <div className='post-on'>
                                            <a href='#'>{review.name}</a>
                                            <p>{review.data}</p>
                                        </div>
                                    </div>
                                    <div className='entry-content'>
                                        <p>{review.desc}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                {/* add review field */}
                <div className='client-review'>
                    <div className='review-form'>
                        <div className='review-title'>
                            <h5>{reviewtitle}</h5>
                        </div>
                        <form action="action" className='row'>
                            <div className='col-md-4 col-12'>
                                <input type='text' name='name' id='name' placeholder='Full Name *'/>
                            </div>
                            <div className='col-md-4 col-12'>
                                <input type='email' name='email' id='name' placeholder='Your Email *'/>
                            </div>
                            <div className='col-md-4 col-12'>
                                <div className='rating'>
                                    <span>Your Rating</span>
                                    {/* <Ratting/> */}
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
  )
}

export default Review