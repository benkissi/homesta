import React from 'react'

import HeroSection from '../../components/hero-component/hero-component'
import Section from '../../components/section-component/section-component'
import Featured from '../../components/featured-components/featured-components'
import Search from '../../components/search-component/serch-component'


const Home = () => {
    return (
        <div>
            <HeroSection />
            <Section fontColor='#252527' backgroundColor='#fff' setHeight='auto'>
                <Search />
            </Section>
            <Section header title="Featured Properties" fontColor='#252527' backgroundColor='#fff' setHeight='auto'>
                <Featured />
            </Section>
        </div>
    )
}

export default Home