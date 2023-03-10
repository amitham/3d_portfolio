import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} 
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div options={{ max: 45, scale: 1, speed: 450}} 
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <img src={icon} alt={title} className="w-16 h-16 object-contain" />
              <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
      </motion.div>      
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leadin-[30px]">
        "Keen to learn new technologies" 

        Experience : 10+ Years

        Core Technical skills:
        • C# .NET
        • JavaScript, JQuery, Angular.js, Angular 2+, Aurelia.js, Vue.js, React.js, Node.js, TypeScript
        • ASP.NET MVC, ASP.NET Web Forms
        • REST API
        • LINQ, LINQ to SQL, Entity Framework, NHibernate
        • HTML 5, CSS3, Bootstrap, Vuetify, Ant Design
        • SQL Server, MongoDB
        • Amazon Web Services

        Dev tools & Devops tools:
        Git, Tortoise Svn, TFS, BitBucket, GitHub, Gitblit, Teamcity, Octopus, Jenkins server, Docker, Jira, Trello, Visual Studio, Visual Studio Code, SQL Server Management Studio, MongoDB Compass, RoboMongo, Postman, Wamp Server, RabbitMQ

        Key Result Areas:
        Enterprise Application Development, Full Stack .Net & Web Development, Component based programming, Design/Architectural Patterns & Object oriented analysis and design, Dev Ops, Scrum Methodology
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")