import { Mail, Phone, MapPin, Linkedin, ExternalLink, Sparkles } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Portfolio = () => {
  const skills = [
    'React', 'Angular', 'TypeScript', 'Node.js', 'Express',
    'MongoDB', 'MySQL', 'Docker', 'CI/CD', 'Git',
    'RESTful APIs', 'Responsive Design', 'SEO', 'Agile/Scrum',
    'Performance Tuning', 'UX/UI Integration'
  ];

  const articles = [
    {
      title: 'MVAI: The Intelligent Infrastructure for Next-Gen Marketing',
      url: 'https://medium.com/@kotefonuqen020/mvai-the-intelligent-infrastructure-for-next-gen-marketing-39ccf95f508d',
    },
    {
      title: 'Do You Recommend Blockchain or AI?',
      url: 'https://medium.com/@kotefonuqen020/do-you-recommend-blockchain-or-ai-55eaea10ac93',
    },
    {
      title: 'Marketing Is Broken: Why Today\'s Strategies Are Failing',
      url: 'https://medium.com/@kotefonuqen020/marketing-is-broken-why-todays-strategies-are-failing-e9b4f5e7bf22',
    },
    {
      title: 'Business 101: From Zero to Real Value',
      url: 'https://medium.com/@kotefonuqen020/business-101-from-zero-to-real-value-b1ee665ca9d1',
    },
    {
      title: 'It Doesn\'t Important Where You Start, Go to the End',
      url: 'https://medium.com/@kotefonuqen020/it-doesnt-important-where-you-start-go-to-the-end-796fb209212b',
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Paper Container */}
      <div className="relative z-10 max-w-3xl mx-auto py-12 px-6">
        <article className="paper-texture paper-shadow rounded-sm p-8 md:p-12 min-h-screen">
          
          {/* Header Section */}
          <header className="text-center mb-10 pb-8 border-b border-border">
            {/* Photo */}
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-secondary shadow-lg">
                <img 
                  src={profilePhoto} 
                  alt="Lina Yang" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Quote */}
            <blockquote className="quote-text mb-6 px-4">
              "Building the web, one elegant solution at a time. Code is poetry written for machines to execute and humans to admire."
            </blockquote>

            {/* Name */}
            <h1 className="font-display text-4xl md:text-5xl font-bold ink-text mb-4 tracking-wide">
              Lina Yang
            </h1>
            <p className="text-lg sepia-text font-medium mb-6">Senior Web Engineer</p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-4 text-sm ink-light-text">
              <a href="tel:+85291329417" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} />
                <span>+852 9132 9417</span>
              </a>
              <a href="mailto:kotefonuqen020@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} />
                <span>kotefonuqen020@gmail.com</span>
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Hong Kong</span>
              </span>
              <a 
                href="https://www.linkedin.com/in/lina-yang" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </header>

          {/* About Section - Letter Style */}
          <section className="mb-12">
            <h2 className="section-title">
              <Sparkles className="inline w-5 h-5 mr-2 gold-accent" />
              A Letter About My Journey
            </h2>
            
            <div className="space-y-4">
              <p className="diary-entry">
                Dear Reader,
              </p>
              <p className="diary-entry">
                When I first began my journey into the world of web development at The Education University of Hong Kong, 
                I never imagined it would take me across continents—from Hong Kong to Malaysia to the United States. 
                Yet here I am, five years later, having built everything from real-time analytics dashboards to 
                e-commerce platforms that serve thousands of users daily.
              </p>
              <p className="diary-entry">
                My story started at Rovertech Limited, where I learned that great code isn't just about function—it's about 
                craft. I spent my days building responsive websites for SMEs and enterprise clients, discovering that every 
                line of JavaScript, every React component, every API endpoint tells a story of problem-solving and creativity.
              </p>
              <p className="diary-entry">
                At VeecoTech Solutions in Malaysia, I led full-cycle web development projects that challenged me to think 
                beyond the code. I built real-time dashboards using React, TypeScript, and Node.js, but more importantly, 
                I learned to mentor others, to share knowledge, and to find joy in watching junior developers grow.
              </p>
              <p className="diary-entry">
                Now, as a Senior Web Engineer at QSS Technosoft in the United States, I continue to push boundaries—
                integrating payment gateways, collaborating across time zones, and always asking: "How can this be better?" 
                The web is an ever-changing canvas, and I am grateful every day for the privilege of painting on it.
              </p>
              <p className="diary-entry mt-6 text-right font-handwritten text-sepia">
                With passion and code,<br />
                <span className="text-xl">Lina Yang</span>
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-12">
            <h2 className="section-title">
              <Sparkles className="inline w-5 h-5 mr-2 gold-accent" />
              Expertise & Skills
            </h2>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="skill-block text-sm font-medium ink-light-text"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Articles Section */}
          <section className="mb-8">
            <h2 className="section-title">
              <Sparkles className="inline w-5 h-5 mr-2 gold-accent" />
              My Writings on Medium
            </h2>
            
            <div className="space-y-4">
              {articles.map((article, index) => (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-card block group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-lg font-medium ink-text group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <ExternalLink 
                      size={18} 
                      className="flex-shrink-0 mt-1 text-muted-foreground group-hover:text-primary transition-colors" 
                    />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground font-handwritten">
              "The best way to predict the future is to create it."
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              © 2025 Lina Yang • Built with passion
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Portfolio;
