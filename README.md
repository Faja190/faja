# F.aja - Portfolio

This is a personal portfolio website built with **React.js**.  
It showcases my contact information, resume, and projects I have worked on.

### Architecture Diagram


```mermaid
flowchart TD
    A[src] --> B[app.jsx]
    A --> C[main.jsx]
    A --> D[Data]
    A --> E[Logic]
    A --> F[Styles]
    A --> G[resources]

    D --> D1[Project Data]

    E --> E1[About]
    E --> E2[Footer]
    E --> E3[...]

    F --> F1[vars.css]
    F --> F2[Project.module.css]
    F --> F3[...]

    G --> G1[ComingSoonCover.png]
    G --> G2[Resume.pdf]
    G --> G3[...]
```

### Project Status
The project is currently **in development**.  
Planned updates include:
- Adding an About me page
- Expanding the project showcase section
- Improving responsive design
