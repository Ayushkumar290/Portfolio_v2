import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'
import resumepdf from "../assets/Ayush_Resume.pdf"

export const AboutSection = () => {
  return (
    <section id='About' className='py-24 px-4 relative'>

      <div className='app-container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center '>
          About <span className='text-primary'> Me</span>
        </h2>

        <div
          className='grid grrid-cols-1 md:grid-cols-2 gap-12 items-center'
        >
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>Passionate full Stack Developer</h3>

            <p className='text-muted-foreground'>
                I'm a Java Full Stack Developer passionate about building scalable, secure,
                 and high-performance web applications. I enjoy transforming complex ideas 
                 into intuitive digital solutions by combining robust backend engineering with modern, 
                 responsive frontend experiences. 
            </p>

            <p className='text-muted-foreground'>
                My expertise includes Java, Spring Boot, React, Microservices, PostgreSQL, Docker, Kafka, Redis, and gRPC. 
                I believe in writing clean, maintainable code and continuously learning new technologies to build production-ready 
                applications that solve real-world problems.
            </p>

            <div className='flex felx-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#Contact" className='cosmic-button'>
                {" "}
                Get In Touch
              </a>

              <a href={resumepdf} 
                target='_blank'
              className='px-6 py-2 rounded-full border 
              border-primary text-primary hover:bg-primary/10 transition-colors duration-300 '

               >
                Resume
              </a>

            </div>
          </div>

          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className="h-6 w-6  text-primary" />
                </div>
                  <div className='text-left'>
                    <h4 className='font-semibold text-lg'>Java Full Stack Development</h4>
                    <p className ="text-muted-foreground">

                      Creating Scalable application with 
                      modern frameworks.
                    </p>
                  
                  </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className=" h-6 w-6  text-primary" />
                </div>
                <div className='text-left'>
                    <h4 className='font-semibold text-lg'>SEO & Data </h4>
                    <p className ="text-muted-foreground">
                      Designing efficient database schemas, optimizing SQL queries.
                      
                    </p>
                  
                  </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className=" h-6 w-6  text-primary" />
                </div>
                <div className='text-left'>
                    <h4 className='font-semibold text-lg'>Backend Engineering</h4>
                    <p className ="text-muted-foreground">

                      Developing scalable backend systems using Java, Spring Boot, Microservices,
                      PostgreSQL, Redis, Kafka, Docker, and gRPC while delivering secure APIs,
                      optimized performance, and production-ready solutions.
                    </p>

                  </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
