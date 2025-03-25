import React from 'react'
import './List.scss'
import delete1 from '../../assets/svg/delete.svg'
import eye from '../../assets/svg/eye.svg'
function List() {
    return (
        <div className='list'>
            <div className="list-box">
                <div className="list-count">
                    <p>Wishlist (4)</p>
                    <button>Move All To Bag</button>
                </div>
                <div className="list-product">
                    <div className="cart">
                        <div className="cart-top">
                            <div className="cart-discount">
                                <p>-35</p>
                                <div className="cart-delete">
                                    <img src={delete1} alt="" />
                                </div>
                            </div>

                            <div className="cart-img">
                                <img src="" alt="" />
                            </div>
                            <div className="add-cart">
                                <img src="" alt="" />
                                <p>Add To Cart</p>
                            </div>
                        </div>

                        <div className="cart-bottom">
                            <p>Gucci duffle bag</p>
                            <div className="text">
                                <p>$960</p>
                                <h5>$1160</h5>
                            </div>
                        </div>
                    </div>

                    <div className="cart">
                        <div className="cart-top">
                            <div className="cart-discount">
                                <p>-35</p>
                                <div className="cart-delete">
                                    <img src={delete1} alt="" />
                                </div>
                            </div>

                            <div className="cart-img">
                                <img src="" alt="" />
                            </div>
                            <div className="add-cart">
                                <img src="" alt="" />
                                <p>Add To Cart</p>
                            </div>
                        </div>

                        <div className="cart-bottom">
                            <p>Gucci duffle bag</p>
                            <div className="text">
                                <p>$960</p>
                                <h5>$1160</h5>

                            </div>
                        </div>
                    </div>


                </div>



            </div>





            <div className="list-box">


                <div className="list-count">
                    <div className="class">
                        <div className="div"></div>
                        <p> Just For You</p>

                    </div>

                    <button>See All</button>
                </div>
                <div className="list-product">
                    <div className="cart">
                        <div className="cart-top">
                            <div className="cart-discount">

                                <p>-35</p>
                                <div className="cart-delete">
                                    <img src={eye} alt="" />
                                </div>
                            </div>

                            <div className="cart-img">
                                <img src="" alt="" />
                            </div>
                            <div className="add-cart">
                                <img src="" alt="" />
                                <p>Add To Cart</p>
                            </div>
                        </div>

                        <div className="cart-bottom">
                            <p>Gucci duffle bag</p>
                            <div className="text">
                                <p>$960</p>
                                <h5>$1160</h5></div>
                            <div className="star">
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <p>(65)</p>
                            </div>

                        </div>
                    </div>
                    <div className="cart">
                        <div className="cart-top">
                            <div className="cart-discount">
                                <p>-35</p>
                                <div className="cart-delete">
                                    <img src={eye} alt="" />
                                </div>
                            </div>

                            <div className="cart-img">
                                <img src={gucci} alt="" />
                            </div>
                            <div className="add-cart">
                                <img src={carzina} alt="" />
                                <p>Add To Cart</p>
                            </div>
                        </div>

                        <div className="cart-bottom">
                            <p>Gucci duffle bag</p>
                            <div className="text">
                                <p>$960</p>
                                <h5>$1160</h5></div>
                            <div className="star">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <p>(65)</p>
                            </div>
                        </div>
                    </div>


                </div>



            </div>
        </div>
    )
}

export default List