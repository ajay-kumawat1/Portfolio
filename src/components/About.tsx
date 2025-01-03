import { Code2, Cpu, Globe2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate software developer with expertise in modern web technologies
            and a keen eye for creating intuitive user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Code2,
              title: 'Frontend Development',
              description: 'Expertise in React, TypeScript, and modern CSS frameworks to create responsive and accessible web applications.'
            },
            {
              icon: Cpu,
              title: 'Backend Development',
              description: 'Building scalable APIs and microservices using Node.js, Python, and cloud technologies.'
            },
            {
              icon: Globe2,
              title: 'Cloud & DevOps',
              description: 'Experience with AWS, Docker, and CI/CD pipelines for efficient deployment and scaling.'
            }
          ].map((item, index) => (
            <Card 
              key={item.title}
              className={cn(
                "group hover:shadow-lg transition-all duration-300",
                "animate-fade-in-up",
                `animation-delay-${index * 200}`
              )}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <item.icon className="h-5 w-5 group-hover:text-blue-500 transition-colors" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}