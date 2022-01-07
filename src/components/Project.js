import './Project.css'

const Project = ({ title, link }) => {
    return ( 
        <li className='proj' onClick={() => window.open(link)}>
            <h3>{title}</h3>
        </li>
    );
};

export default Project;