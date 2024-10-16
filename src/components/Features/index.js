import './index.css'

const Features = () => (
    <div>
        <div className="sm-our-features-container">
            <h1 className="sm-our-features-heading"> Our Features </h1>

            <div className="sm-our-features-cards-container">
                <div className="sm-trade-optimizer-card">
                    <img src="https://res.cloudinary.com/davbz0f7y/image/upload/v1728976156/Matrix%20Labs%20Assignment/bifn7xslmqro7nfyhjjk.png" alt="trade optimizer" className="sm-trade-optimizer-img"/>
                    <h1 className="sm-each-feature-heading"> Trade Optimizer </h1>
                    <p className="sm-each-feature-description"> Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity. </p>
                </div>

                            <div className="sm-market-insight-card">
                                <div className="sm-market-insight-heading-description">
                                    <h1 className="sm-market-insight-heading"> Market Insight </h1>
                                    <p className="sm-market-insight-description"> Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers. </p>
                                </div>
                            </div>

                            <div className="sm-risk-guard-container">
                                <h1 className="sm-risk-guard-heading"> Risk Guard </h1>
                                <p className="sm-risk-guard-description"> Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything. </p>
                                <img src="https://res.cloudinary.com/davbz0f7y/image/upload/v1728987122/Matrix%20Labs%20Assignment/ubjxxoztttigbgda0h6y.png" alt="risk guard"/>
                            </div>

                            <div className="sm-portfolio-sync-container">
                                <div className="sm-portfolio-sync-heading-description">
                                    <h1 className="sm-portfolio-sync-heading"> Portfolio Sync </h1>
                                    <p className="sm-portfolio-sync-description"> Easily manage your portfolio. You'll always know what you own, how it's performing, and where it’s headed. </p>
                                </div>

                                <div className="sm-portfolio-sync-img-container">
                                    <img src="https://res.cloudinary.com/davbz0f7y/image/upload/v1728987634/Matrix%20Labs%20Assignment/yqfjgizan9qiqts3cdqk.png" alt="portfolio sync" className="sm-portfolio-sync-img"/>
                                </div>
                            </div>

                            <div className="sm-opportunity-scout-container">
                                <h1 className="sm-opportunity-scout-heading"> Opportunity Scout </h1>
                                <p className="sm-opportunity-scout-description"> Find exciting new projects, events and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing. </p>
                                <div className="sm-magnifying-glass"></div>
                            </div>

                        </div>
        </div>

        <div className='lg-features-container'>
            <div className='lg-trade-market-risk-feature-heading-container'>
                <div className='lg-trade-optimizer-container'>
                    <img src="https://res.cloudinary.com/davbz0f7y/image/upload/v1728976156/Matrix%20Labs%20Assignment/bifn7xslmqro7nfyhjjk.png" alt="trade optimizer" />
                    <h1 className='sm-each-feature-heading'> Trade Optimizer </h1>
                    <p className="sm-each-feature-description"> Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.  </p>
                </div>

                <div className='lg-market-feature-heading-container'>
                    <div className='lg-market-insight-container'>
                        <h1 className='sm-each-feature-heading'> Market Insight </h1>
                        <p className='sm-each-feature-description'> Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers. </p>
                    </div>

                    <div className='lg-features-heading-container'>
                        <h1 className='lg-our-features-heading'> Our Features </h1>
                    </div>
                </div>

                <div className='lg-risk-guard-container'>
                    <img src="https://res.cloudinary.com/davbz0f7y/image/upload/v1728987122/Matrix%20Labs%20Assignment/ubjxxoztttigbgda0h6y.png" alt="risk guard" />
                    <h1 className='sm-each-feature-heading'> Risk Guard </h1>
                    <p className='sm-each-feature-description'> Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything. </p>
                </div>
            </div>

            <div className='lg-portfolio-opportunity-container'>
                <div className='lg-portfolio-sync-container'>
                    <h1 className='sm-each-feature-heading'> Portfolio Sync </h1>
                    <p className='sm-each-feature-description'> Easily manage your portfolio. You'll always know what you own, how it's performing, and where it’s headed. </p>
                </div>

                <div className='lg-opportunity-main-container'>    
                    <div className='lg-opportunity-container'>
                        <h1 className='sm-each-feature-heading'> Opportunity Scout  </h1> 
                        <p className='sm-each-feature-description'> Find exciting new projects, events and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing. </p>
                    </div>

                    <img src="https://res.cloudinary.com/davbz0f7y/image/upload/v1728988831/Matrix%20Labs%20Assignment/ur07qzled5tas3yb8qai.png" alt="opportunity scout" className='lg-magnifying-glass'/>
                </div>
            </div>
        </div>


    </div>
)

export default Features