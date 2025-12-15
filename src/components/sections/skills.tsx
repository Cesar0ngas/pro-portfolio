'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { ChartTooltipContent, ChartContainer } from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const skillsData = [
  { name: 'Python', proficiency: 70, fill: 'var(--color-python)' },
  { name: 'AWS', proficiency: 70, fill: 'var(--color-aws)' },
  { name: 'SQL', proficiency: 75, fill: 'var(--color-sql)' },
  { name: 'FastAPI', proficiency: 70, fill: 'var(--color-fastapi)' },
  { name: 'Docker', proficiency: 80, fill: 'var(--color-docker)' },
  { name: 'MongoDB', proficiency: 80, fill: 'var(--color-mongodb)' },
  { name: 'ETL/ELT', proficiency: 80, fill: 'var(--color-etl)' },
];

const chartConfig = {
  proficiency: {
    label: 'Proficiency',
  },
  python: { label: 'Python', color: 'hsl(210 89% 64%)' },
  aws: { label: 'AWS', color: 'hsl(29 92% 58%)' },
  sql: { label: 'SQL', color: 'hsl(197 89% 64%)' },
  fastapi: { label: 'FastAPI', color: 'hsl(157 69% 54%)' },
  docker: { label: 'Docker', color: 'hsl(210 79% 52%)' },
  mongodb: { label: 'MongoDB', color: 'hsl(108 53% 58%)' },
  etl: { label: 'ETL/ELT', color: 'hsl(270 60% 60%)' },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">My Skills</h2>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Technical Proficiency</CardTitle>
            <CardDescription>Data Engineering & Cloud Infrastructure expertise</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[400px]">
              <ChartContainer config={chartConfig} className="w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={skillsData} layout="vertical" margin={{ left: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" hide />
                    <YAxis
                      dataKey="name"
                      type="category"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: 'hsl(var(--foreground))', fontSize: 14 }}
                      width={120}
                    />
                    <Tooltip
                      cursor={{ fill: 'hsl(var(--muted))' }}
                      content={<ChartTooltipContent indicator="dot" />}
                    />
                    <Bar 
                      dataKey="proficiency" 
                      radius={[4, 4, 4, 4]} 
                      background={{ fill: 'hsl(var(--muted))', radius: 4 }}
                    >
                      {skillsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            
            {/* Additional Skills Grid */}
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Additional Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="font-medium text-primary mb-2">Languages</p>
                  <p className="text-muted-foreground">R, Java, JavaScript</p>
                </div>
                <div>
                  <p className="font-medium text-primary mb-2">Cloud Services</p>
                  <p className="text-muted-foreground">S3, EC2, DynamoDB, ECS, CloudWatch</p>
                </div>
                <div>
                  <p className="font-medium text-primary mb-2">Data Tools</p>
                  <p className="text-muted-foreground">Pandas, Polars, NumPy, Dataiku</p>
                </div>
                <div>
                  <p className="font-medium text-primary mb-2">Visualization</p>
                  <p className="text-muted-foreground">PowerBI, Tableau, Matplotlib, Plotly</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;