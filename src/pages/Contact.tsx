import { AnimatedEarth } from '@/components/contact/AnimatedEarth';
import { ContactForm } from '@/components/contact/ContactForm';
import { Card } from '@/components/ui/card';

export function Contact() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-1/4 -right-1/2 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Animated Earth */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-[500px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse" />
              <AnimatedEarth />
            </div>
          </div>

          {/* Contact Form */}
          <Card className="backdrop-blur-sm bg-background/50">
            <div className="p-6 sm:p-8">
              <ContactForm />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}