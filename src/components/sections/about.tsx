import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';

const experience = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2020 - Present',
    description: 'Leading the development of a large-scale e-commerce platform using Next.js and TypeScript. Mentoring junior developers and improving code quality and performance.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Web Innovators',
    period: '2018 - 2020',
    description: 'Developed and maintained various client websites and web applications using React, Node.js, and GraphQL. Collaborated with designers to create responsive and user-friendly interfaces.',
  },
];

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'University of Technology',
    period: '2016 - 2018',
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'State College',
    period: '2012 - 2016',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">About Me</h2>
        <div className="max-w-3xl mx-auto text-center text-lg text-foreground/80 mb-16">
          <p>
            I&apos;m a passionate and results-oriented developer with a knack for building beautiful,
            functional, and scalable web applications. With over 5 years of experience in the industry,
            I thrive on solving complex problems and continuously learning new technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><Briefcase className="w-7 h-7 text-primary" /> Experience</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:opacity-50">
              {experience.map((item, index) => (
                <Card key={index} className="pl-12 relative shadow-lg">
                   <span className="absolute left-[-8px] top-5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  <CardHeader>
                    <CardTitle>{item.role}</CardTitle>
                    <p className="text-sm text-muted-foreground">{item.company} | {item.period}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><GraduationCap className="w-7 h-7 text-primary" /> Education</h3>
             <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:opacity-50">
              {education.map((item, index) => (
                <Card key={index} className="pl-12 relative shadow-lg">
                  <span className="absolute left-[-8px] top-5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <CardHeader>
                    <CardTitle>{item.degree}</CardTitle>
                    <p className="text-sm text-muted-foreground">{item.institution} | {item.period}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
