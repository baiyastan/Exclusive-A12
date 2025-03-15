import React, {useEffect} from 'react'
import "./Banner.scss"
import Carousel from 'react-bootstrap/Carousel'
import iphone from "../../assets/image/iphone.png"
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../redux/category/categorySlice'

function Banner() {
    const {category, loading, error} = useSelector((state) => state.category)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch])

    console.log(category);
    

    return (
        <div className='banner container'>
            <div className='category'>
                <ul>
                    <li>Woman's Fashion</li>
                </ul>
            </div>
            <div className='carousel'>
                <Carousel>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="First slide" /> */}
                        <img src={iphone} alt="" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Secondslide" /> */}
                        <img src={iphone} alt="" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Third slide" /> */}
                        <img src={iphone} alt="" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Banner
