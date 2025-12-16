import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';

const projects = [
  {
    title: 'Movie Ticket Booking Web Application',
    description:
      'A BookMyShow-like platform built with React.js, Firebase (Auth & Firestore), and Material UI. Features include real-time bookings, automatic expiry, secure seat-lock validation, movie filtering, API-based dynamic data, and detailed movie pages.',
    technologies: ['React.js', 'Firebase', 'Material UI', 'Context API', 'React Router'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Rippletone - Musical Website',
    description:
      'A dynamic musical platform utilizing ReactJS for the front-end and NodeJS for the back-end. Integrated third-party APIs for music streaming and playlist creation. Implemented state management using React Hooks and Context API.',
    technologies: ['ReactJS', 'NodeJS', 'APIs', 'Chakra UI', 'React Hooks'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Hotel Booking Website',
    description:
      'Designed a hotel booking website with a focus on front-end functionality, enabling filtering by location and rating, and creating a user-friendly interface.',
    technologies: ['ReactJS', 'JSON', 'JavaScript'],
    github: 'https://github.com',
    demo: '',
  },
];

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  {project.demo && (
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

