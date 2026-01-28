# F.aja - Portfolio

This is a personal portfolio website built with **React.js**.  
It showcases my contact information, resume, and projects I have worked on.

#### UX Design
I designed what i wanted the UX to be like on figma and then made changes to reflect that. The figma link show cases my design process (i'm really proud of my animation frames).
[Portfolio design on Figma](<https://www.figma.com/design/3U9mwoSxpHVC2w35kRYcWv/faja?node-id=0-1&p=f&t=YUDpe7aAPO6kJlCP-0>)

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
