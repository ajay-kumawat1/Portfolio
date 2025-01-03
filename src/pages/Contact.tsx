import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Send } from 'lucide-react';

export function Contact() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground px-4">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Send me a message</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Fill out the form below and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message here..." className="min-h-[150px]" />
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Card>
            <CardContent className="flex items-center gap-4 p-4 sm:p-6">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-sm sm:text-base">Email</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">example@email.com</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4 sm:p-6">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-sm sm:text-base">Social Media</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">@username</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}