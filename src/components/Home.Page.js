import '../styles/Home.page.style.css'

export const Home = () => {
    return(
        <div className="main-container">

            <div className='banner'>
                <div className='banner-content'>
                    <div className='banner-heading'>
                        <h1>
                            <div className='firstLine'>
                                Streamline your 
                            </div>
                            <div className='secondLine'>
                                Dev workflow
                            </div>
                        </h1>
                        <p>
                            This client will really change your development workflow. Integrate with the tool you love.
                        </p>
                    </div>
                    <div className='banner-buttons'>
                        <a href='https://github.com/IsaacHarrison28' target='_blank'>
                            <button type='button' id='download-button'>Download</button>
                        </a>
                        <a href='https://github.com/IsaacHarrison28' target='_blank'>
                            <button type='button' id='learn-more-button'>Learn More</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='product-quality-container'>

                <div className='quality-div'>
                    <div className='quality-icon'>
                        <img src={require('../images/people.png')} alt='' />
                    </div>
                    <div className='quality-description'>
                        <h2>Collaboration</h2>
                        <p>
                            Help is a priority, even if it's not directly related to the goals you're trying 
                            to achieve.
                        </p>
                    </div>
                </div>

                <div className='quality-div'>
                    <div className='quality-icon'>
                        <img src={require('../images/padlock.png')} alt='' />
                    </div>
                    <div className='quality-description'>
                        <h2>Security</h2>
                        <p>
                            Manage your work with built-in agile features. We update them regularly.
                        </p>
                    </div>
                </div>

                <div className='quality-div'>
                    <div className='quality-icon'>
                        <img src={require('../images/increasing-stocks-graphic-of-bars.png')} alt='' />
                    </div>
                    <div className='quality-description'>
                        <h2>Analytics</h2>
                        <p>
                            View reports and analysis of your teams's work. It helps to do the work more 
                            efficiently.
                        </p>
                    </div>
                </div>
                
            </div>

            {/* <div className='sneek-pic-container'>
                <div className='sneek-pic-heading'>Heading</div>
                <div className='sneek-pic-images-container'>

                </div>
            </div> */}

            <div className='pricing-overall-container'>
                <div className='pricing-heading-text'>
                    <h2>Our Pricing</h2>
                    <p>
                        We offer favorable conditions for your comfortable and productive work.
                    </p>
                </div>

                <div className='prices-offer-container'>

                    <div className='offer-div'>

                        <div className='offer'>
                            <h2>Free</h2>
                            <p>
                                For individual devs.
                            </p>
                        </div>

                        <hr />

                        <div className='package-offers'>
                            <div className='package-text'>
                                <div className='text'>
                                    <div className='tick'>*</div>
                                    <p>5 GB storage</p>
                                </div>

                                <div className='text'>
                                    <div className='tick'>*</div>
                                    <p>10 GB transfer / month</p>
                                </div>

                                <div className='text'>
                                    <div className='tick'>*</div>
                                    <p>4 users per namespace</p>
                                </div>

                                <div className='text'>
                                    <div className='tick'>*</div>
                                    <p>Local and private repos</p>
                                </div>

                            </div>
                            <div className='package-price'>
                                <h2>$0</h2>
                                <p> / month </p>
                            </div>
                            <div className='purchase-button'>
                                <a href='https://github.com/IsaacHarrison28' target='_blank'>
                                    <button type='button'>Buy Now</button>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className='offer-div'>

                        <div className='offer'>
                            <h2>Premium</h2>
                            <p>
                                For a small team.
                            </p>
                        </div>

                        <hr />

                        <div className='package-offers'>
                            <div className='package-text'>
                                <div className='text'>
                                    <div className='tick'>*</div>
                                    <p>60 GB storage</p>
                                </div>

                                <div className='text'>
                                    <div className='tick'>*</div>
                                    <p>Advanced CI/CD</p>
                                </div>

                                <div className='text'>
                                    <div className='tick'>*</div>
                                    <p>Enterprise agile planning</p>
                                </div>

                                <div className='text'>
                                    <div className='tick'>*</div>
                                    <p>Protected branches</p>
                                </div>

                            </div>
                            <div className='package-price'>
                                <h2>$16</h2>
                                <p> / month </p>
                            </div>
                            <div className='purchase-button'>
                                <a href='https://github.com/IsaacHarrison28' target='_blank'>
                                    <button type='button'>Buy Now</button>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className='offer-div'>

                        <div className='offer'>
                            <h2>Ultimate</h2>
                            <p>
                                For large companies.
                            </p>
                        </div>

                        <hr />

                        <div className='package-offers'>
                            <div className='package-text'>
                                <div className='text'>
                                    <div className='tick'>*</div>
                                    <p>260 GB storage</p>
                                </div>

                                <div className='text'>
                                    <div className='tick'>*</div>
                                    <p>Security dashboards</p>
                                </div>

                                <div className='text'>
                                    <div className='tick'>*</div>
                                    <p>Free guest users</p>
                                </div>

                                <div className='text'>
                                    <div className='tick'>*</div>
                                    <p>container scanning</p>
                                </div>

                            </div>
                            <div className='package-price'>
                                <h2>$99</h2>
                                <p> / month </p>
                            </div>
                            <div className='purchase-button'>
                                <a href='https://github.com/IsaacHarrison28' target='_blank'>
                                    <button type='button'>Buy Now</button>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}