import { ArrowRight, ExternalLink } from 'lucide-react'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'MyShow',
    description: 'A web application that allows users to track their favorite TV shows and movies.',
    image: '/projects/MyShow.jpg',
    tags: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security', 'MongoDB', 'Redis', 'RazorPay'],
    demoLink: "#",
    githubLink: "https://github.com/Ayushkumar290/MyShow",
  },
  {
    id: 2,
    title: 'Patient Management',
    description: 'A robust, microservices-based application designed to manage patient records and billing operations.',
    image: '/projects/pm.jpg',
    tags: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security', 'PostgresSQL', 'Docker', 'REST & gRPC'],
    demoLink: "#",
    githubLink: "https://github.com/Ayushkumar290/patient-managment",
  }
]

export const ProjectsSection = () => {
  return (
    <section id='Projects' className="py-24 px-4 relative">
      <div className='app-container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Featured <span className='text-primary'>Projects</span>
        </h2>

        {/* Added mb-12 for spacing, text-center for alignment, and max-w-3xl to keep it readable */}
        <p className="mb-12 text-center max-w-3xl mx-auto text-foreground/80">
          Here are some of my recent projects that I have worked on. Each project was carefully created with attention to detail and a focus on delivering high-quality results. I am always looking for new challenges and opportunities to learn and grow as a developer.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div key={project.id} className='group bg-card rounded-lg shadow-xs overflow-hidden card-hover'>
              <div className='h-48 overflow-hidden'>
                <img
                  src={project.image} alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
              </div>

              <div className='p-6 flex flex-col h-[calc(100%-12rem)]'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag) => (
                    <span className='px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground' key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className='text-xl font-semibold mb-2'>
                  {project.title}
                </h3>
                
                {/* Rendered the missing project description here */}
                <p className="text-foreground/70 mb-6 text-sm flex-grow">
                  {project.description}
                </p>

                {/* Changed <p> to <div> to prevent invalid DOM nesting */}
                <div className='flex justify-between items-center mt-auto'>
                  <div className='flex space-x-3'>
                    <a href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className='text-foreground/80 hover:text-primary transition-colors duration-300'
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className='text-foreground/80 hover:text-primary transition-colors duration-300'
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <a
            href="https://github.com/Ayushkumar290"
            target="_blank"
            rel="noreferrer"
            className='cosmic-button w-fit flex items-center mx-auto gap-2'
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}