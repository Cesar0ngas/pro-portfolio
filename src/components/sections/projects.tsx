import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Link, Code } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with a modern UI, product management, and a secure checkout process.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    imageId: 'project1',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Project Management Tool',
    description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively.',
    tags: ['React', 'Node.js', 'GraphQL', 'MongoDB'],
    imageId: 'project2',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, with dynamic charts and filtering options.',
    tags: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    imageId: 'project3',
    liveUrl: '#',
    sourceUrl: '#',
  },
   {
    title: 'Mobile Banking App',
    description: 'A secure and intuitive mobile app for managing finances, transferring funds, and paying bills on the go.',
    tags: ['React Native', 'Firebase', 'Redux'],
    imageId: 'project4',
    liveUrl: '#',
    sourceUrl: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">My Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
             const image = PlaceHolderImages.find(p => p.id === project.imageId);
            return (
              <Card key={project.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {image && (
                     <div className="relative h-60 w-full">
                        <Image
                            src={image.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                        />
                     </div>
                )}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-6">{project.description}</CardDescription>
                  <div className="flex gap-4">
                    <Button asChild className="bg-accent hover:bg-accent/90 flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Link className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                        <Code className="mr-2 h-4 w-4" /> Source Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
