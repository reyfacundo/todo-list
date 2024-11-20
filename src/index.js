import "./styles.css";


import { Populate } from "./modules/populate";
import eventListeners from "./modules/listeners";

import { Storage } from "./modules/storage";



const projects = Storage.getProjects();


// calls the populate method to display all projects, and all To-Dos, from the first saved project, when the page first loads
Populate.populate(projects, projects[0]);


eventListeners();

