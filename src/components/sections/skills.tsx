'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { ChartTooltipContent } from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const skillsData = [
  { name: 'JavaScript', proficiency: 95, fill: 'var(--color-javascript)' },
  { name: 'TypeScript', proficiency: 90, fill: 'var(--color-typescript)' },
  { name: 'React', proficiency: 95, fill: 'var(--color-react)' },
  { name: 'Next.js', proficiency: 90, fill: 'var(--color-nextjs)' },
  { name: 'Node.js', proficiency: 85, fill: 'var(--color-nodejs)' },
  { name: 'Tailwind CSS', proficiency: 95, fill: 'var(--color-tailwind)' },
  { name: 'SQL', proficiency: 80, fill: 'var(--color-sql)' },
];

const chartConfig = {
  proficiency: {
    label: 'Proficiency',
  },
  javascript: { label: 'JavaScript', color: 'hsl(53 92% 58%)' },
  typescript: { label: 'TypeScript', color: 'hsl(210 89% 64%)' },
  react: { label: 'React', color: 'hsl(197 89% 64%)' },
  nextjs: { label: 'Next.js', color: 'hsl(0 0% 9%)' },
  nodejs: { label: 'Node.js', color: 'hsl(108 53% 58%)' },
  tailwind: { label: 'Tailwind CSS', color: 'hsl(191 79% 52%)' },
  sql: { label: 'SQL', color: 'hsl(30 89% 64%)' },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">My Skills</h2>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Technical Proficiency</CardTitle>
            <CardDescription>A visual representation of my proficiency in key technologies.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[400px]">
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
                    width={100}
                  />
                  <Tooltip
                    cursor={{ fill: 'hsl(var(--muted))' }}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Bar dataKey="proficiency" radius={[4, 4, 4, 4]} background={{ fill: 'hsl(var(--muted))', radius: 4 }}>
                    {skillsData.map((entry, index) => (
                      <Bar key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;
