import React, { Component } from 'react';
import MyCarousel from './carousel';
class Home extends Component {
    render() {
        let heading="Believe in yourself";
        let subheading="You are braver than you think,more talented than you know, and capable of more than you imagine";
        
        return (
            <div >
            <section className='hero'>
            <h1 className="title">{heading}</h1>
             <p className='subtitle  tc'>{subheading}</p>
             <br/>
            </section>
                <div className="Conatiner">
                    <MyCarousel/> 
                 </div>
            </div>

        );
    }
    
}

export default Home
