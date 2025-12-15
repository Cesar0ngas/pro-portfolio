import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Link, Code, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Invoice Processing System (SAT Mexico)',
    description: 'High-throughput system processing 8M+ XML invoices from Mexico\'s SAT platform using FastAPI, MongoDB, and AWS ECS. Enabled real-time querying of financial metadata for tax compliance automation. Reduced project delivery time by 85%.',
    tags: ['FastAPI', 'MongoDB', 'AWS ECS', 'Python', 'Streamlit', 'CloudWatch'],
    imageId: 'project1',
    liveUrl: null, // Sistema privado/empresarial
    sourceUrl: null, // Código privado
  },
  {
    title: 'Real-Time Instagram Hashtag Analytics',
    description: 'Built real-time data streaming application using Kafka + Python + FastAPI to track Instagram hashtags and analyze post engagement metrics. Implemented event-driven architecture with filtering by recency and engagement for actionable insights.',
    tags: ['Apache Kafka', 'Python', 'FastAPI', 'Real-time Streaming', 'Data Analytics'],
    imageId: 'project2',
    liveUrl: null,
    sourceUrl: 'https://github.com/Cesar0ngas', // Actualiza con el repo específico si existe
  },
  {
    title: 'WALMEX Stock Trading Signal Predictor',
    description: 'Engineered predictive model combining Exponential Moving Averages with ARIMA/SARIMA time series forecasting to identify optimal stock entry/exit points. Reduced false positive trading signals through multi-factor validation.',
    tags: ['Python', 'ARIMA', 'SARIMA', 'Time Series', 'Machine Learning', 'Trading'],
    imageId: 'project3',
    liveUrl: null,
    sourceUrl: 'https://github.com/Cesar0ngas', // Actualiza con el repo específico
  },
  {
    title: 'ETL Web Scraping Pipeline',
    description: 'Engineered automated web scraping pipelines to extract structured data (PDFs, tables, images) from public websites. Implemented ETL workflows in Dataiku with automated data ingestion, transformation, and quality checks.',
    tags: ['Python', 'Web Scraping', 'Dataiku', 'ETL', 'Data Quality'],
    imageId: 'project4',
    liveUrl: null,
    sourceUrl: null,
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
                    {project.sourceUrl ? (
                      <Button asChild variant="outline" className="flex-1">
                        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                          <Code className="mr-2 h-4 w-4" /> View Code
                        </a>
                      </Button>
                    ) : (
                      <Button disabled className="flex-1" variant="outline">
                        <Code className="mr-2 h-4 w-4" /> Private Code
                      </Button>
                    )}
                    {project.liveUrl ? (
                      <Button asChild className="bg-accent hover:bg-accent/90 flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    ) : (
                      <Button disabled className="flex-1">
                        <ExternalLink className="mr-2 h-4 w-4" /> Enterprise Project
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <Button asChild size="lg" variant="outline">
            <a href="https://github.com/Cesar0ngas" target="_blank" rel="noopener noreferrer">
              <Code className="mr-2 h-5 w-5" /> Visit My GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;