import './index.css'

const Takenomics = () => (
    <div>
        <div className="sm-takenomics-main-container">
            <video autoPlay muted loop className="background-video">
                <source src="https://res.cloudinary.com/davbz0f7y/video/upload/f_auto:video,q_auto/v1/Matrix%20Labs%20Assignment/ogkesnirgcld9vflrbs0.mp4" type="video/mp4" />
            </video>
            <div className="sm-takenomics-container">
                <h1 className="sm-takenomics-heading"> Takenomics </h1>
                <img src="https://res.cloudinary.com/davbz0f7y/image/upload/v1728997774/Matrix%20Labs%20Assignment/omguo98dfvggag1e6esj.png" alt="takenomics piechart" />
                <img src="https://res.cloudinary.com/davbz0f7y/image/upload/v1729000253/Matrix%20Labs%20Assignment/gakrhrxify1kz3bmzpn7.png" alt="details" />
            </div>
        </div>

        <div className='lg-takenomics-container'>

        </div>
    </div>
)

export default Takenomics