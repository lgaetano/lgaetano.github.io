import './Project.css';

const Project = ({ title, link, repo }) => {
    return ( 
        <li className='proj shadow-sm card-body' onClick={() => window.open(link)}>
            <h3 className='card-text'>{title}</h3>
            <button 
                className='btn btn-sm'
                onClick={() => window.open(repo)}>
                <img src='/GitHubLogo.png'alt='GitHub logo' />
            </button>
        </li>
    );
};

export default Project;