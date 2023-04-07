export const Home = () => {
    return(
        <div className="main-container">

            <div className='banner'>
                <div className='banner-content'>
                    <heading>
                        <h1>Streamline your Dev workflow</h1>
                        <p>
                            This client will really change your development workflow. Integrate with the tool you love.
                        </p>
                    </heading>
                    <div className='banner-buttons'>
                        <button type='button' id='download-button'>Download</button>
                        <button type='button' id='learn-more-button'>Learn More</button>
                    </div>
                </div>
            </div>

            <div className='product-quality-container'>

                <div className='quality-div'>
                    <div className='quality-icon'>
                        {/* This should contain an icon */}
                    </div>
                    <div className='quality-description'>
                        <h2>Heading</h2>
                        <p>
                            Description Text of the quality
                        </p>
                    </div>
                </div>

                <div className='quality-div'>
                    <div className='quality-icon'>
                        {/* This should contain an icon */}
                    </div>
                    <div className='quality-description'>
                        <h2>Heading</h2>
                        <p>
                            Description Text of the quality
                        </p>
                    </div>
                </div>

                <div className='quality-div'>
                    <div className='quality-icon'>
                        {/* This should contain an icon */}
                    </div>
                    <div className='quality-description'>
                        <h2>Heading</h2>
                        <p>
                            Description Text of the quality
                        </p>
                    </div>
                </div>
                
            </div>

            <div className='sneek-pic-container'>
                <div className='sneek-pic-heading'>Heading</div>
                <div className='sneek-pic-images-container'>

                </div>
            </div>

            <div className='pricing-overall-container'>
                <div className='pricing-heading-text'>
                    <h2>Heading</h2>
                    <p>
                    Description text
                    </p>
                </div>

                <div className='prices-offer-container'>
                    <div className='offer-div'>

                        <div className='offer'>
                            <h2>Offer</h2>
                            <p>
                            Offered to who
                            </p>
                        </div>

                        <div className='package-offers'>
                            <div className='package-text'></div>
                            <div className='package-price'></div>
                            <div className='purchase-button'>
                                <button type='button'>Buy Now</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}