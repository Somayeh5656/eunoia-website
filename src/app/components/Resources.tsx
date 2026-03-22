import { Wind, BookOpen, Users } from 'lucide-react';

export function Resources() {
  const resources = [
    {
      icon: Wind,
      title: 'Guided Breathing Exercises',
      description: 'Calming breathing techniques and meditation videos to help you find peace',
      // Replace with your actual YouTube link or playlist
      link: 'https://www.youtube.com/watch?v=inpok4MKVLM&list=PL8cE5Nzf9lXwFyNqJz1nXzQ2pQ1Q2Q3Q4' // Example: 5-minute guided breathing
    },
    {
      icon: BookOpen,
      title: 'Understanding Emotions',
      description: 'Recommended literature and articles about emotional wellbeing and mental health',
      // Example: a reputable article from Psychology Today or NHS
      link: 'https://www.psychologytoday.com/us/basics/emotions'
    },
    {
      icon: Users,
      title: 'Supporting a Friend',
      description: 'Guides and tips on how to be there for someone who needs support',
      // Example: Mental Health America guide
      link: 'https://mieli.fi/en/'
    }
  ];

  return (
    <section id="resources" className="w-full py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl text-center mb-16 text-[#1F2937]" style={{ fontWeight: 300 }}>
          Resources to support you
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"          // Open in new tab
              rel="noopener noreferrer" // Security
              className="group p-8 bg-[#FAF9F6] hover:bg-gradient-to-br hover:from-[#8B9DC3]/10 hover:to-[#FFB7B2]/10 transition-all duration-300 shadow-sm hover:shadow-xl"
              style={{ borderRadius: '24px' }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8B9DC3] to-[#FFB7B2] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <resource.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="mb-3 text-[#1F2937]" style={{ fontWeight: 400 }}>
                {resource.title}
              </h4>
              <p className="text-[#1F2937]/70" style={{ fontWeight: 300 }}>
                {resource.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}