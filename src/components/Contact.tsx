import { useState, useRef, useCallback, memo } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";

// Animation variants - optimized for fast rendering
const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  },
} as const;

// Contact information
const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "ajay.kumawat@example.com",
    href: "mailto:ajay.kumawat@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, India",
    href: null,
  },
] as const;

// Social links
const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/ajay-kumawat",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/ajay-kumawat1",
    label: "GitHub",
  },
] as const;

// Contact Info Section Component
const ContactInfo = memo(() => (
  <motion.div variants={ANIMATION_VARIANTS.item} className="space-y-8">
    <div>
      <h3 className="text-xl font-semibold text-card-foreground mb-6">
        Contact Information
      </h3>

      <div className="space-y-4">
        {CONTACT_INFO.map((item) => {
          const Icon = item.icon;
          const content = (
            <>
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="text-card-foreground hover:text-primary transition-colors">
                  {item.value}
                </p>
              </div>
            </>
          );

          return (
            <motion.div
              key={item.label}
              whileHover={{ x: 5 }}
              className="flex items-center space-x-3"
            >
              {item.href ? (
                <a
                  href={item.href}
                  className="flex items-center space-x-3 flex-1"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </motion.div>
          );
        })}
      </div>
    </div>

    {/* Social Links */}
    <div>
      <h4 className="text-lg font-semibold text-card-foreground mb-4">
        Connect With Me
      </h4>
      <div className="flex space-x-4">
        {SOCIAL_LINKS.map((social) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label={social.label}
            >
              <Icon size={20} />
            </motion.a>
          );
        })}
      </div>
    </div>

    {/* Quick Response */}
    <div className="bg-card p-6 rounded-lg border border-border">
      <h4 className="text-lg font-semibold text-card-foreground mb-2">
        Quick Response Guaranteed
      </h4>
      <p className="text-muted-foreground text-sm">
        I typically respond to emails within 24 hours. For urgent matters, feel
        free to connect with me on LinkedIn.
      </p>
    </div>
  </motion.div>
));

ContactInfo.displayName = "ContactInfo";

// Form Field Component
interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  rows?: number;
}

const FormField = memo(
  ({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    rows,
  }: FormFieldProps) => {
    const isTextarea = !!rows;
    const Component = isTextarea ? "textarea" : "input";

    return (
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-medium text-card-foreground mb-2"
        >
          {label} *
        </label>
        <Component
          type={!isTextarea ? type : undefined}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required
          rows={rows}
          className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
          placeholder={placeholder}
        />
      </div>
    );
  }
);

FormField.displayName = "FormField";

// Submit Button Component
interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = memo(({ isSubmitting }: SubmitButtonProps) => (
  <motion.button
    type="submit"
    disabled={isSubmitting}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
  >
    {isSubmitting ? (
      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground"></div>
    ) : (
      <>
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </>
    )}
  </motion.button>
));

SubmitButton.displayName = "SubmitButton";

// Status Message Component
interface StatusMessageProps {
  type: "success" | "error";
}

const StatusMessage = memo(({ type }: StatusMessageProps) => {
  const isSuccess = type === "success";
  const bgClass = isSuccess
    ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
    : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800";
  const textClass = isSuccess
    ? "text-green-800 dark:text-green-200"
    : "text-red-800 dark:text-red-200";
  const message = isSuccess
    ? "Message sent successfully! I'll get back to you soon."
    : "Something went wrong. Please try again or email me directly.";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 border rounded-md ${bgClass}`}
    >
      <p className={`text-sm ${textClass}`}>{message}</p>
    </motion.div>
  );
});

StatusMessage.displayName = "StatusMessage";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1000);
  }, []);

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={ANIMATION_VARIANTS.container}
        >
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in working together? Let's discuss your next backend
              project or any opportunities you have in mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <ContactInfo />

            {/* Contact Form */}
            <motion.div variants={ANIMATION_VARIANTS.item}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />

                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>

                <FormField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                />

                <FormField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                />

                <SubmitButton isSubmitting={isSubmitting} />

                {/* Success/Error Messages */}
                {submitStatus === "success" && <StatusMessage type="success" />}
                {submitStatus === "error" && <StatusMessage type="error" />}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Contact);
