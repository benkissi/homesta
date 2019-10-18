import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css'

import Button from '../button-component/button-component'

import * as Styles from './hero-styles'


import './hero-styles.scss'

const HeroSection = () => {
    const options = {
        items: 1,
        nav: true,
        rewind: true,
        autoplay: true,
        autoHeight: false
    }

    const events = {
        onDragged: () => console.log('dragged'),
        onChanged: () => console.log('changed')
    };
    return (
        <Styles.Wrapper>
            <OwlCarousel options={options} events={events} >
                <Styles.SliderContent image='../../img/slide1.jpg'>
                    <Styles.Salutation>
                        <div className="salutation-text">
                            <span>Town House</span>
                            <h1>4 bedroom house</h1>
                            <p>$100,000</p>
                            <Button text="Check it out" />
                        </div>
                    </Styles.Salutation>
                </Styles.SliderContent>
                <Styles.SliderContent image='../../img/slide2.jpg'>
                    <Styles.Salutation>
                        <div className="salutation-text">
                            <span>Country Side Residence</span>
                            <h1>8 bedroom</h1>
                            <p>$250,000</p>
                            <Button text="Check it out" />
                        </div>
                    </Styles.Salutation>
                </Styles.SliderContent>
            </OwlCarousel>

        </Styles.Wrapper>
    )
}

export default HeroSection