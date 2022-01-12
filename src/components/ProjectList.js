import Project from './Project.js';
import './ProjectList.css';

const ProjectList = ({ id, projects }) => {

    const getProjectList = (projects) => {
        return projects.map((project, index) => {
            return <Project 
                    key={index} 
                    title={project.title}
                    link={project.link}
                    />
        });
    };

    return (
        <section className='projectList'>
            <h2>Projects</h2>
            <ul className='flex-grid'>
                {getProjectList(projects)}
            </ul>
        </section>
    )
};

export default ProjectList;