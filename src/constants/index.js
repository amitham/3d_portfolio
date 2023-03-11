import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,   
    nodejs,
    mongodb,
    git,    
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    vuejs,
    dotnet,
    sql,
    aurelia,
    shalini,
    asanka,
    chinthaka,
    krishan,
    masha,
    sameera,
    agrando,
    embla,
    empite,
    virtusa,
    churchhub,
    acta,
    empty,
    path2smile,
    cc,
    good2give,
    tapsy
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Asoociate Tech Lead/Team Lead",
      icon: web,
    },
    {
      title: "Senior Software Engineer",
      icon: mobile,
    },
    {
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "Associate Enginner - Technology",
      icon: creator,
    }    
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "vuejs",
      icon: vuejs     
    }, 
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Aurelia",
      icon: aurelia,
    },
    {
      name: ".Net",
      icon: dotnet,
    },    
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "Git",
      icon: git,
    },    
    {
      name: "Docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Asoociate Tech Lead/Team Lead",
      company_name: "Agrando as - Norway",
      icon: agrando,
      iconBg: "#ffff",
      date: "May 2021 - Present",
      points: [
        "Manage and Lead Sri Lankan team(Developers/QAs/Designers)",
        "Developing and maintaining web applications using Vue.js and .Net related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",        
        "Manage code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company_name: "Agrando as - Norway",
      icon: agrando,
      iconBg: "#ffff",
      date: "May 2018 - May 2021",
      points: [
        "Developing and maintaining web applications using Vue.js and .Net related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Mentor junior team members and thier work",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company_name: "Embla Software Innovation (pvt) Ltd - Sri Lanka",
      icon: embla,
      iconBg: "#ffff",
      date: "Aug 2017 - May 2018",
      points: [
        "Developing and maintaining web applications using Angular.js and .Net related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing/Supporting responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company_name: "Empite (pvt) Ltd - Australia",
      icon: empite,
      iconBg: "#ffff",
      date: "Dec 2016 - Aug 2017",
      points: [
        "Developing and maintaining web applications using Angular.js/JQuery/Node.js and .Net related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Maintain/Manage hosting(AWS/IIS) functionalities",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Empite (pvt) Ltd - Australia",
      icon: empite,
      iconBg: "#ffff",
      date: "Dec 2014 - Nov 2016",
      points: [
        "Developing and maintaining web applications using Angular.js/JQuery/Node.js and .Net related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Work with QA team to make sure that the applications are in good quality",
        "Participating in code reviews and providing constructive feedback to juniors developers.",
      ],
    }    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I am very pleased to recommend Mr. Amitha Perera who is my Team member in Acta project at Agrando.",
      name: "Salini Reddim",
      designation: "Technical Team Lead",
      company: "Agrando as",
      image: shalini,
    },
    {
      testimonial:
        "He is a good team player and great asset to any company and I can highly recommend him any position.",
      name: "Asanka Indunil",
      designation: "Technical Lead",
      company: "Agrando as",
      image: asanka,
    },
    {
      testimonial:
        "He is a amazing person with kind heart and truly good attitude which make him more suitable for software industry",
      name: "Chinthaka Bandara",
      designation: "Software Professional",
      company: "Embla Software Innovation Pvt. Ltd.",
      image: chinthaka,
    },
    {
      testimonial:
        "Amitha is proactive, result oriented, responsible and technically sound employee and he is always ready to put all his energy and time to get the job done",
      name: "Krishan Kulasinghe",
      designation: "Senior Software Enginner",
      company: "Empite Pvt. Ltd.",
      image: krishan,
    },
    {
      testimonial:
        "He is not only good for the coding but also he is having good team management skills. He is a great asset for any company and I wish him good luck. ",
      name: "Masha Dheerasinghe",
      designation: "QA Lead",
      company: "Empite Pvt. Ltd.",
      image: masha,
    },
    {
      testimonial:
        "Some web projects as a senior developer and he was unparalleled in his ability to find extremely interesting and perfect solutions for our products.",
      name: "Sameera Chathuranga",
      designation: "Mobile Development Team Lead",
      company: "Empite Pvt. Ltd.",
      image: sameera,
    },
  ];
  
  const projects = [
    {
      name: "Church Hub",
      description:
        "This application provide all kind of features/functionalities that the users needs from churches. Users can schedule events (appointments, resource planning/allocation etc.. ) through this application.",
      tags: [
        {
          name: "Vue.js with Vuex",
          color: "blue-text-gradient",
        },
        {
          name: ".Net framework with C#",
          color: "green-text-gradient",
        },
        {
          name: "SQL Server and NHibernate",
          color: "pink-text-gradient",
        },
      ],
      image: churchhub,
      source_code_link: "http://churchhubjsse.mylabora.com/context",
    },
    {
      name: "Agrnado Acta",
      description:
        "Managing documents is not an easy task, documents should be in precise order and link to the necessary objects, otherwise it could be very messy and hide from the existing.",
      tags: [
        {
          name: "Aurelia.js",
          color: "blue-text-gradient",
        },
        {
          name: ".Net framework with C#",
          color: "green-text-gradient",
        },
        {
          name: "SQL Server and NHibernate",
          color: "pink-text-gradient",
        },
      ],
      image: acta,
      source_code_link: "https://amitham.github.io/3dportfolio/",
    },
    {
      name: "Embla FT",
      description:
        "Embla FT application is about genealogy. User can keep all kind of information about his family history and can view various kind of graph to see how family tree flows.",
      tags: [
        {
          name: "Angular.js",
          color: "blue-text-gradient",
        },
        {
          name: ".Net framework, MVC",
          color: "green-text-gradient",
        },
        {
          name: "SQL Server and Entity Framework",
          color: "pink-text-gradient",
        },
      ],
      image: empty,
      source_code_link: "https://amitham.github.io/3dportfolio/",
    },
    {
      name: "Embla web shop",
      description:
        "Embla webshop is a separate project goes along with Embla FT which can be used to buy Embla FT version 10 including Version 9 and Membership Activation. ",
      tags: [
        {
          name: "Angular 2+",
          color: "blue-text-gradient",
        },
        {
          name: "Net framework and c#",
          color: "green-text-gradient",
        },
        {
          name: "SQL Server and Entity Framework",
          color: "pink-text-gradient",
        },
      ],
      image: empty,
      source_code_link: "https://amitham.github.io/3dportfolio/",
    },
    {
      name: "Ultra",
      description:
        "Ultra is a web application develop using .Net technologies and SQL for tourism management. This application provide many features for the management as well as the other users.",
      tags: [
        {
          name: "JavaScript, JQuery",
          color: "blue-text-gradient",
        },
        {
          name: "Net framework and c#",
          color: "green-text-gradient",
        },
        {
          name: "SQL Server and Entity Framework",
          color: "pink-text-gradient",
        },
      ],
      image: empty,
      source_code_link: "https://amitham.github.io/3dportfolio/",
    },
    {
      name: "Netcollect",
      description:
        "Net-collect is survey related project that we implemented for the Swinburne university in Australia. Used NodeJs as a main language and MySQL, mongodb, Neo4j for the data bases.",
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Micro Services, Aws Services",
          color: "green-text-gradient",
        },
        {
          name: "Neo4j, MongoDb",
          color: "pink-text-gradient",
        },
      ],
      image: empty,
      source_code_link: "https://amitham.github.io/3dportfolio/",
    },
    {
      name: "Tapsy",
      description:
        "Tapsy is a android and ios mobile project with admin panel which we build for the Australian client. We have used .Net to write web API and the business logic. To maintain the data we have used SQL Server.",
      tags: [
        {
          name: "ASP .Net MVC",
          color: "blue-text-gradient",
        },
        {
          name: ".Net framework and c#",
          color: "green-text-gradient",
        },
        {
          name: "SQL Server and Entity Framework",
          color: "pink-text-gradient",
        },
      ],
      image: tapsy,
      source_code_link: "https://amitham.github.io/3dportfolio/",
    },
    {
      name: "Good2Give",
      description:
        "As an advance donation management program, the specific objectives of developing ‘Give360’ are to facilitate employees in managing their funds, to handle received funds by charities",
      tags: [
        {
          name: "ASP .Net MVC",
          color: "blue-text-gradient",
        },
        {
          name: ".Net framework and c#",
          color: "green-text-gradient",
        },
        {
          name: "SQL Server and Entity Framework",
          color: "pink-text-gradient",
        },
      ],
      image: good2give,
      source_code_link: "https://amitham.github.io/3dportfolio/",
    },
    {
      name: "Care Collaborator",
      description:
        "A platform for Australian Home Care Providers (HCP) to manage their consumers and cases better. It makes life easy for both care workers and HCP managers by its ease of use in managing consumer data",
      tags: [
        {
          name: "ASP .Net MVC",
          color: "blue-text-gradient",
        },
        {
          name: ".Net framework and c#",
          color: "green-text-gradient",
        },
        {
          name: "SQL Server and Entity Framework",
          color: "pink-text-gradient",
        },
      ],
      image: cc,
      source_code_link: "https://amitham.github.io/3dportfolio/",
    },
    {
      name: "Pelican",
      description:
        "Pelican is a crowd driven app which makes local deliveries simple affordable and fast. Developed for Android phones the app allows you to create deliveries and have them delivered within 1 to 6 hours",
      tags: [
        {
          name: "ASP .Net MVC",
          color: "blue-text-gradient",
        },
        {
          name: ".Net framework and c#",
          color: "green-text-gradient",
        },
        {
          name: "SQL Server and Entity Framework",
          color: "pink-text-gradient",
        },
      ],
      image: empty,
      source_code_link: "https://amitham.github.io/3dportfolio/",
    },
    {
      name: "Path2Smile Web Portal",
      description:
        "Path2smile a donation portal developed by Empite, allows users to post about a possible need/s, which needs people’s attention in order to be fulfilled. Developed as a website and for IPhone and Android users as well",
      tags: [
        {
          name: "ASP .Net MVC",
          color: "blue-text-gradient",
        },
        {
          name: ".Net framework and c#",
          color: "green-text-gradient",
        },
        {
          name: "SQL Server and Entity Framework",
          color: "pink-text-gradient",
        },
      ],
      image: path2smile,
      source_code_link: "https://amitham.github.io/3dportfolio/",
    },
    {
      name: "McD RiDM Portal",
      description:
        "Through the system user can send files and messages to the other clients and the admin center (used BizTalk server). RiDM Portal allows privilege users to manage clients, configurations changes...",
      tags: [
        {
          name: "ASP .Net MVC",
          color: "blue-text-gradient",
        },
        {
          name: ".Net framework and c#",
          color: "green-text-gradient",
        },
        {
          name: "SQL Server and Entity Framework",
          color: "pink-text-gradient",
        },
      ],
      image: empty,
      source_code_link: "https://amitham.github.io/3dportfolio/",
    }     
  ];
  
  export { services, technologies, experiences, testimonials, projects };