import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Link, Code, ExternalLink, Lock } from 'lucide-react';

const projects = [
  {
    title: 'SATisFACTURE',
    description: 'API for massive download of CFDIs and Metadata from Mexico\'s SAT platform. Handles authentication via FIEL, automated requests, verification, download, and secure cloud storage. Processes 8M+ invoices with automated workflows.',
    tags: ['Python', 'FastAPI', 'AWS S3', 'AWS EC2', 'Lambda', 'EventBridge', 'MongoDB', 'Tax Compliance'],
    imageId: 'project1',
    liveUrl: null,
    sourceUrl: null,
    status: 'In Development',
    period: 'March 2025 - December 2025 (Production: March 2026)',
    details: 'Automated 5-step process: FIEL authentication, batch requests (64 requests in one click), SAT verification, package downloads, and MongoDB storage. Reduced project delivery time by 85%.',
  },
  {
    title: 'Cash Management App',
    description: 'AppSheet application for controlled cash flow management with role-based security protocols. Features email validation codes, hierarchical access (Admin, Manager, Intermediary), and real-time movement tracking.',
    tags: ['AppSheet', 'Supabase', 'Looker Studio', 'No-Code', 'Business Intelligence'],
    imageId: 'project2',
    liveUrl: null,
    sourceUrl: null,
    status: 'Completed',
    period: 'June 2025 - August 2025',
    details: 'Solved client\'s cash control inconsistencies with role-based access, email verification for each transaction, and planned Looker Studio analytics integration.',
  },
  {
    title: 'CFDI Automation & Transfer Pricing',
    description: 'Automated CFDI processing system with parallel execution, reducing analysis time from hours to under 5 minutes. Identifies related-party transactions for transfer pricing analysis. Frontend on Vercel, backend on AWS EC2.',
    tags: ['React', 'Vite', 'JavaScript', 'AWS EC2', 'AWS S3', 'MongoDB', 'Parallel Processing', 'XML Processing'],
    imageId: 'project3',
    liveUrl: null,
    sourceUrl: null,
    status: 'Completed',
    period: 'January 2025 - March 2025',
    details: 'Processes uploaded ZIP files with XMLs (issued/received invoices) and Excel with related RFCs. Extracts UUID, RFCs, concepts, taxes in parallel. Reduced manual analysis time by 70%.',
  },
  {
    title: 'Face Recognition Attendance System',
    description: 'Computer vision system for attendance tracking using facial recognition. Trained with keras-facenet for facial embeddings, SVM classifier, and deployed inference endpoint on Azure ML with Streamlit interface.',
    tags: ['Python', 'keras-facenet', 'sklearn', 'Azure ML', 'Streamlit', 'MongoDB Atlas', 'Computer Vision'],
    imageId: 'project4',
    liveUrl: null,
    sourceUrl: 'https://github.com/GabrielIslas/face-recognition',
    status: 'Completed',
    period: 'November 2024',
    details: 'Facial embeddings with keras-facenet, label encoder for user IDs, SVM classifier. Azure ML endpoint for scalable inference. Streamlit UI for photo capture, user identification, and history tracking.',
  },
  {
    title: 'WALMEX Stock Trading Signal Predictor',
    description: 'Financial analysis system combining 20-day EMA with ARIMA/SARIMA time series models to identify optimal entry/exit points. Includes multi-factor validation (volume, volatility) to reduce false positives.',
    tags: ['Python', 'ARIMA', 'SARIMA', 'Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Time Series', 'Financial Analytics'],
    imageId: 'project5',
    liveUrl: null,
    sourceUrl: null,
    status: 'In Development',
    period: 'October 2023 - Present',
    details: 'Combines EMA technical indicators with statistical models for trend prediction. Filters false signals through volume/volatility shields. Future: integrate sentiment analysis from social media (Twitter/X) and NLP for news correlation.',
  },
  {
    title: 'Real-Time Instagram Hashtag Analytics',
    description: 'Real-time data streaming application using Kafka + Python + FastAPI to track Instagram hashtags and analyze post engagement metrics with event-driven architecture.',
    tags: ['Apache Kafka', 'Python', 'FastAPI', 'Real-time Streaming', 'Data Analytics', 'Event-Driven Architecture'],
    imageId: 'project6',
    liveUrl: null,
    sourceUrl: 'https://github.com/Cesar0ngas',
    status: 'Completed',
    period: '2024',
    details: 'Processes live social media data with event-driven architecture. Implements filtering by recency and engagement for actionable insights.',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">My Work</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const image = PlaceHolderImages.find(p => p.id === project.imageId);
            return (
              <Card key={project.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                {image && (
                  <div className="relative h-48 w-full">
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
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                    {project.status === 'Completed' ? (
                      <Badge variant="default" className="bg-green-600 shrink-0">✓ Done</Badge>
                    ) : (
                      <Badge variant="secondary" className="shrink-0">Active</Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{project.period}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge variant="outline" className="text-xs">+{project.tags.length - 4}</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4 text-sm line-clamp-3">{project.description}</CardDescription>
                  <div className="text-xs text-muted-foreground mb-4 line-clamp-2">
                    💡 {project.details}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    {project.sourceUrl ? (
                      <Button asChild variant="outline" size="sm" className="flex-1">
                        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                          <Code className="mr-1 h-3 w-3" /> Code
                        </a>
                      </Button>
                    ) : (
                      <Button disabled size="sm" variant="outline" className="flex-1">
                        <Lock className="mr-1 h-3 w-3" /> Private
                      </Button>
                    )}
                    {project.liveUrl ? (
                      <Button asChild size="sm" className="bg-accent hover:bg-accent/90 flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-3 w-3" /> Demo
                        </a>
                      </Button>
                    ) : (
                      <Button disabled size="sm" className="flex-1">
                        <ExternalLink className="mr-1 h-3 w-3" /> Enterprise
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Interested in seeing more technical details?</p>
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