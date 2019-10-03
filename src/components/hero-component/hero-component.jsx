import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css'

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
                <Styles.SliderContent image='../../img/slide2.jpg'>
                    <Styles.Salutation>
                        <div className="salutation-text">
                            <span>Town House</span>
                            <h1>2 bedroom house</h1>
                            <p>$100,000</p>
                        </div>
                    </Styles.Salutation>
                </Styles.SliderContent>
                <Styles.SliderContent image='../../img/slide3.jpg'>
                    <Styles.Salutation>
                        <div className="salutation-text">
                            <span>Be transformed</span>
                            <h1>Be <span>Renewed</span></h1>
                            <p>I shall be with you even to the end...</p>
                        </div>
                    </Styles.Salutation>
                </Styles.SliderContent>
            </OwlCarousel>

        </Styles.Wrapper>
    )
}

export default HeroSection