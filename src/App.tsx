import {
  useState,
  useEffect,
  lazy,
  Suspense,
  useCallback,
  memo,
  startTransition,
} from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { Navbar } from "./components";

// Lazy load components for code splitting with prefetch hints
const Hero = lazy(() => import(/* webpackPreload: true */ "./components/Hero"));
const About = lazy(
  () => import(/* webpackPrefetch: true */ "./components/About")
);
const Skills = lazy(
  () => import(/* webpackPrefetch: true */ "./components/Skills")
);
const Projects = lazy(
  () => import(/* webpackPrefetch: true */ "./components/Projects")
);
const Experience = lazy(
  () => import(/* webpackPrefetch: true */ "./components/Experience")
);
const Contact = lazy(
  () => import(/* webpackPrefetch: true */ "./components/Contact")
);
const Footer = lazy(
  () => import(/* webpackPrefetch: true */ "./components/Footer")
);

// Minimal loading fallback - reduces layout shift
const SectionLoader = memo(() => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
));

SectionLoader.displayName = "SectionLoader";

// Main content wrapper to reduce re-renders
const MainContent = memo(() => (
  <Suspense fallback={<SectionLoader />}>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
  </Suspense>
));

MainContent.displayName = "MainContent";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize from localStorage synchronously to prevent flash
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    // Apply theme on mount
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = useCallback(() => {
    startTransition(() => {
      setDarkMode((prev) => {
        const newMode = !prev;
        document.documentElement.classList.toggle("dark", newMode);
        localStorage.setItem("theme", newMode ? "dark" : "light");
        return newMode;
      });
    });
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main>
          <MainContent />
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </LazyMotion>
  );
}

export default memo(App);
