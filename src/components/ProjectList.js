import Project from './Project.js';
import './stylesheets/ProjectList.css';

const ProjectList = ({ id, projects }) => {

    const getProjectList = (projects) => {
        return projects.map((project, index) => {
            return <Project 
                        key={index} 
                        title={project.title}
                        link={project.link}
                        repo={project.repo}
                    />
        });
    };

    return (
        <section className='projectList'>
            <h1>Projects</h1>
            <ul className='flex-grid'>
                {getProjectList(projects)}
            </ul>
        </section>
    )
};

export default ProjectList;