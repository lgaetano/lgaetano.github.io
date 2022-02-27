import portfolioPic from '../portfolioPic.jpg';
import './stylesheets/Landing.css';

const Landing = () => {

    return (
        <section className="landing-page portfolio-pic-spin">
            <img 
            src={portfolioPic} 
            className="portfolio-pic" 
            alt="smiling computer programmer with short hair and glasses looks
                toward the camera." />

            <h1 id='name'>Lia Gaetano (she/her)</h1>
            <h1>Full-stack developer<br />Seattle, WA</h1>
        </section>
    )
};

export default Landing;
