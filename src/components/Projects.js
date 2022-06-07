import React from "react"
import "../css/Projects.css"
import Tool from "./Tool.js"
import Project from "./Project.js"
import toolsData from "../Data/tools"
import projectsData from "../Data/projects"


export default function Projects() {

    const toolsElements = toolsData.map(tool => {
        return <Tool 
                    key={tool.name}
                    {...tool}
                />
    })

    const projectElements = projectsData.map(project => {
        return <Project 
                    key={project.name}
                    {...project}
                />
    })



    return (
        <div className="projects--div">
            <div>
                <h3>Mis herramientas</h3>
                <div className="tools--container">
                   {toolsElements}
                </div>

            </div>
            <div >
                <h3>Algunos de mis proyectos</h3>
                <div className="projects--container">
                    {projectElements}
                </div>    
            </div>
        </div>
    )
}