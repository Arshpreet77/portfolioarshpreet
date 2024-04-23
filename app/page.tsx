import ExperienceCard from '../components/ExperienceCard';
import SkillSet from '../components/SkillSet';
import EducationCard from '../components/EducationCard';
import ContactSection from '../components/ContactSection';
import ProjectsContainer from '../components/ProjectsContainer';

export default function HomePage() {
  return (
    <div className="container mx-auto px-8 py-12 max-w-7xl">
      <section id="home" className="min-h-screen flex flex-col justify-center border-b border-gray-700 p-10 rounded">
        <h1 className="text-6xl font-bold text-center my-12">Welcome to My Portfolio</h1>
        <p className="text-2xl text-center px-4 mb-12">
          Highly motivated and dedicated security professional with a proven track record in various environments.
        </p>
      </section>

      <section id="projects" className="mb-12  border-b border-gray-700 p-10 rounded">
        <h1 className="text-4xl font-bold mb-12">Projects</h1>
        <ProjectsContainer />
      </section>


      <section id="experience" className="mb-12 border-b border-gray-700 p-10 rounded">
        <h2 className="text-4xl font-bold mb-6">Experience</h2>
        <ExperienceCard
          title="Security Guard and Mobile Patrolling"
          company="Calgary Stampede"
          description="Ensured safety and security at major events, managing both static and mobile security tasks."
          timePeriod="2020 - 2021"
        />
        <ExperienceCard
          title="Customer Service Representative"
          company="Various Retailers"
          description="Greeted customers and provided exceptional service, handling inquiries and resolving complaints efficiently."
          timePeriod="2019 - 2020"
        />
        <ExperienceCard
          title="Director, DOP, and Editor"
          company="Freelance Film Production"
          description="Directed and edited video content, managing all aspects of film production for various clients."
          timePeriod="2017 - 2019"
        />
      </section>

      <section id="skills" className="mb-12 border-b border-gray-700 p-10 rounded">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>
        <SkillSet skills={['Strong Observation', 'Attention to Details', 'Teamwork', 'Communication', 'Interpersonal Skills', 'Critical Thinking', 'Crowd Control', 'High Pressure Situations Management', 'Quick Learning']} />
      </section>

      <section id="education" className="mb-12 border-b border-gray-700 p-10 rounded">
        <h2 className="text-4xl font-bold mb-6">Education</h2>
        <EducationCard
          institution="SAIT"
          degree="Diploma"
          fieldOfStudy="Software Developer, IT Network"
          timePeriod="2021 - 2023"
        />
        <EducationCard
          institution="Local High School"
          degree="High School Diploma"
          fieldOfStudy="Science & Maths"
          timePeriod="2015 - 2019"
        />
      </section>

      <section id="contact" className="mb-12 border-b border-gray-700 p-10 rounded">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <ContactSection />
      </section>
    </div>
  );
}
