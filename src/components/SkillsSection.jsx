import React, { useState } from 'react'

const skills = [
    // Programming Languages
    { name: "Java", category: "Language" },
    { name: "C++", category: "Language" },
    { name: "Python", category: "Language" },
    { name: "JavaScript", category: "Language" },

    // Frontend
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "React.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },

    // Backend
    { name: "Java", category: "Backend" },
    { name: "Spring Boot", category: "Backend" },
    { name: "Spring Security", category: "Backend" },
    { name: "Spring Data JPA", category: "Backend" },
    { name: "Hibernate", category: "Backend" },
    { name: "REST APIs", category: "Backend" },
    { name: "Microservices", category: "Backend" },
    { name: "gRPC", category: "Backend" },
    { name: "JWT", category: "Backend" },

    // Databases
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "Redis", category: "Database" },

    // DevOps & Tools
    { name: "Docker", category: "Tools" },
    { name: "Apache Kafka", category: "Tools" },
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "Postman", category: "Tools" },
    { name: "Maven", category: "Tools" },
    { name: "IntelliJ IDEA", category: "Tools" },
    { name: "VS Code", category: "Tools" },

    // CS Fundamentals
    { name: "Data Structures & Algorithms", category: "CS Fundamentals" },
    { name: "Object-Oriented Programming", category: "CS Fundamentals" },
    { name: "DBMS", category: "CS Fundamentals" },
    { name: "Operating Systems", category: "CS Fundamentals" },
    { name: "Computer Networks", category: "CS Fundamentals" },
    { name: "Cloud Computing", category: "CS Fundamentals" },
];

const categories = ["all", "Language", "Frontend", "Backend", "Database", "Tools", "CS Fundamentals"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    // Filter skills based on the active category
    const filteredSkills = skills.filter(skill => 
        activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section 
            id='skills' 
            className='py-24 px-4 relative bg-secondary/30'
        > 
            <div className='app-container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    My <span className='text-primary'> Skills</span>
                </h2>
                
                <div className='flex flex-wrap justify-center gap-4 mb-12'>
                    {categories.map((category, key) => (
                        // Switched to parentheses () for an implicit return
                        <button 
                            key={key} 
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${
                                activeCategory === category 
                                    ? 'bg-primary text-primary-foreground' 
                                    : 'bg-background hover:bg-secondary'   
                            }`} 
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {/* Map over filteredSkills instead of all skills */}
                    {filteredSkills.map((skill, index) => (
                        <div key={index} className='bg-card p-6 shadow-sm card-hover rounded-lg'>
                            <div className='text-left mb-4'>
                                <h3 className='text-xl font-semibold'>{skill.name}</h3>
                               
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}