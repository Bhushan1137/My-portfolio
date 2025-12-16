import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/Card';

export function About() {
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
    <section id="about" className="py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  I'm an aspiring MERN Stack Developer skilled in React.js, Node.js, and MongoDB. 
                  I'm passionate about building scalable, high-performance web applications with 
                  a focus on user experience. Currently working as a Frontend Developer at Pixel 
                  Technologies Pvt Ltd, where I develop production-grade applications using React.js, 
                  Next.js, and TypeScript.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With experience in integrating CMS systems like Strapi, implementing secure routing, 
                  and optimizing state management, I bring a comprehensive approach to web development. 
                  I'm always eager to learn new technologies and contribute to innovative projects.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { title: 'Experience', value: '1+ Year' },
              { title: 'Projects', value: '3+ Completed' },
              { title: 'Location', value: 'Indore, IN' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.title}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

