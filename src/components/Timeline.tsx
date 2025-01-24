import { BriefcaseIcon,FolderCog, Award,Split,Boxes,MapPinned,Computer,UserCog,GraduationCap,Laptop } from "lucide-react";

const timelineData = [
  {
    year: 2010,
    title: "Started Computer Engineering Studies",
    company: "University in Syria",
    description:
      "Began my studies in computer engineering, focusing on foundational programming and engineering principles.",

    icon: <FolderCog className="w-6 h-6" />,
  },
  {
    year: 2015,
    title: "Moved to Europe",
    company: "Relocation",
    description: "Relocated to Europe after breaking my studies in Syria.",

    icon: <MapPinned className="w-6 h-6" />,
  },
  {
    year: 2018,
    title: "Dual Internship as Junior Software Developer",
    company: "Deutsche Telekom",
    description:
      "Completed a dual internship, gaining hands-on experience in software development and learning corporate practices.",
    icon: <Boxes className="w-6 h-6" />,
  },
  {
    year: 2021,
    title: "Frontend Developer",
    company: "Itacs",
    description: "Focused on frontend development and contributed to user-friendly web applications.",
   icon: <Computer className="w-6 h-6" />,
  },
  {
    year: 2022,
    title: "Career Break",
    company: "Personal Endeavors",
    description: "Took a break to focus on personal growth and gained leadership experience during this time.",
    icon: <Split className="w-6 h-6" />,
  },
  
  {
    year: 2024,
    title: "Refresh Course at Masterschool",
    company: "Masterschool",
    description: "Participating in an ongoing refresh course to prepare for re-entry into the tech industry.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    year: 2025,
    title: "Freelancer in IT Sector",
    company: "Self-Employed",
    description: "Working as a freelance software developer, providing solutions in web and software development.",
    icon: <Laptop className="w-6 h-6" />,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Career Journey</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={item.year}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-5/12">
                  <div
                    className={`p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow 
                    ${index % 2 === 0 ? "mr-8" : "ml-8"}`}
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-blue-600">{item.icon}</span>
                      <h3 className="text-xl font-semibold ml-2">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-1">{item.company}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>

                {/* Year bubble */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold relative z-10">
                    {item.year}
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
