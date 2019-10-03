import styled from 'styled-components'

export const Salutation = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    z-index: 3;
    align-items: center;

     h1 {
        font-size: 50px;
    }

    h1 span{
        position: relative;
    }

    h1 span:after {
        content: "";
        position: absolute;
        height: 16px;
        width: 100%;
        bottom: 0;
        left: 0;
        z-index: -1;
        background: #8490ff;
    }

    p {
        font-size: 25px;
    }
`

export const Image = styled.img`
    width: 50%;
    transition: 1s;

    &:hover {
        cursor: pointer;
        width: 52%;
    }
`

export const SliderContent = styled.div`
    display: flex !important;
    position: relative;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    /* justify-content: center; */
    align-items: center;
`

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 70vh;
    background: #1f1f20;
    align-items: center;
    color: white;
    position: relative;

    .owl-carousel {
        position: relative;
        height: 100%;

        div:not(.owl-nav):not(.owl-dots):not(.salutation-text){
		    height: 100%;
	    }
    }

    .owl-nav {
		position: absolute;
		top: 50%;
		left: 0;
		right: 0;

        div {
            position: absolute;
            top: 0;
            bottom: 0;
            display: inline-block;
            margin: 0;
            width: 50px;
            height: 20px !important;
            line-height: 25px;
            text-align: center;
            font-size: .9em;
            border-radius: 3px;
            color: #FFF;
            background: #000;
            opacity: .6;
            text-transform: capitalize;
        }

        .owl-prev {
            left: 5px;
        }
			
        .owl-next {
            right: 5px;
        }
		
	}

    .owl-dots {
        position: absolute;
		top: 94%;
		left: 0;
		right: 0;
    }   
    
    .salutation-text {
        /* position: relative; */
        display: flex; /* Hidden by default */
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: fixed; /* Stay in place */
        z-index: 4; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(31,31,32,0.5); /* Black w/ opacity */
    }

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`