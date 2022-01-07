import './ProjectList.css'

const ProjectList = () => {
    return (
        <section className='projectList'>
            <ul className='flex-grid'>
                <li className='react proj'>Inspiration Board</li>
                <li className='react proj'>Tic-Tac-Toe</li>
                <li className='react proj'>Weather App</li>
                <li className='flask proj'>Retro Video Store</li>
                <li className='react proj'>Capstone TBD</li>
            </ul>
        </section>
    )
};

export default ProjectList;