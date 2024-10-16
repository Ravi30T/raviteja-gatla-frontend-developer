import Features from '../Features'
import About from '../About'
import Takenomics from '../Takenomics'
import Roadmap from '../Roadmap'
import Footer from '../Footer'
import './index.css'

const Home = () => {
    return (
        <div>
            <div className="sm-device">
                <div className="sm-main-container">
                    <h1 className="main-tagline"> When Innovation Meets </h1>
                    <h1 className="innovation-btn"> Innovation </h1>
                    
                    <p className="main-paragraph"> Empowering Trading Through Advanced Technology </p>

                    <button className="open-dapp-btn"> Open dApp </button>
                </div>

                <Features />

                <About />

                <Takenomics />

                <Roadmap />

                <Footer />

            </div>

            <div className='lg-device'>
                <div className='lg-device-main-container'>
                    <div className='lg-home-container'>
                        <div className='lg-main-heading-container'>
                            <h1 className='lg-main-heading1'> When Innovation </h1>
                            <h1 className='lg-main-heading2'> Meets <span className='lg-investment-tag'> Investment </span> </h1>
                        </div>

                        <p className='lg-main-paragraph'> Empowering Trading Through Advanced Technology </p>

                        <button className='lg-open-dapp-btn'> Open dApp </button>
                    </div>
                </div>

               <div className='lg-features-container'>
                    <Features />
               </div>

               <div className='lg-about-container'> 
                    <About />
               </div>

               <div>
                    <Takenomics />
               </div>

               <div>
                    <Roadmap />
               </div>

               <div>
                    <Footer />  
               </div>
                
            </div>

            

        </div>
    )
}

export default Home