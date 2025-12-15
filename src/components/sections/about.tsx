import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';

const experience = [
  {
    role: 'IT Consultant',
    company: 'Basteris Reyes & Asociados',
    period: 'January 2025 - Present',
    description: 'Built high-throughput invoice processing system handling 8M+ XML invoices using FastAPI, MongoDB, and AWS ECS. Accelerated project delivery by 85% through optimized data pipelines, enabling real-time financial metadata querying for tax compliance automation.',
  },
  {
    role: 'Data Engineer',
    company: 'Plenumsoft',
    period: 'May 2024 - August 2024',
    description: 'Engineered web scraping pipelines to extract structured data from public websites, reducing manual data collection through Python automation. Implemented ETL workflows in Dataiku with automated data ingestion, transformation, and quality checks.',
  },
];

const education = [
  {
    degree: 'Data Engineering',
    institution: 'Universidad Politécnica de Yucatán',
    period: 'Graduated: July 2025',
  },
];

const certifications = [
  {
    name: 'AWS Cloud Foundations & AWS Data Engineer',
    issuer: 'AWS',
    date: 'November 2024',
  },
  {
    name: 'IBM Data Engineering Professional Certificate',
    issuer: 'Coursera',
    date: 'Expected: January 2026',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">About Me</h2>
        <div className="max-w-3xl mx-auto text-center text-lg text-foreground/80 mb-16">
          <p>
            I&apos;m a Data Engineer with 1.5+ years of experience building scalable data pipelines, APIs, 
            and cloud-based solutions that drive business impact. Specialized in Python, AWS infrastructure, 
            and real-time processing. I reduced project delivery time by 85% (from 2 months to 2 weeks) through 
            optimized ETL workflows. Passionate about leveraging data to solve complex problems and building 
            enterprise-scale data platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="w-7 h-7 text-primary" /> Experience
            </h3>
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
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-primary" /> Education
              </h3>
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
            
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-primary" /> Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="shadow-lg">
                    <CardContent className="pt-6">
                      <p className="font-semibold">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.issuer} | {cert.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;