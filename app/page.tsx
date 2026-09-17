import Infomation from "./component/SmallElements/infomation";
import InfoSection from "./component/Section/InfoSection"
import MainSection from "./component/Section/MainSection"
import SkillRow from "./component/Skills/SkillRow";

const infoList = [
  { src: "/icons/user.png", subject: "이름", content: "김수빈" },  
  { src: "/icons/email.png", subject: "이메일", content: "a01072669755@gmail.com" },
  { src: "/icons/birthday.png", subject: "생년월일", content: "1999.07.09" },
  { src: "/icons/phone.png", subject: "연락처", content: "010-7266-9755" },
  { src: "/icons/education.png", subject: "학력", content: "세종대학교 스마트기기학과", secondContent: "세종대학교 컴퓨터공학과" },
  { src: "/icons/git.png", subject: "GitHub", content: "https://github.com/subinkim9755"},
];

export default function Home() {
  return (
    <div>
    <InfoSection />
    <MainSection mainSectionProps={{ text: "ABOUT ME", id: "ABOUT ME", children: (
        <div className="w-full flex items-center justify-center py-5 px-3">
          <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
            {infoList.map((item) => (
              <Infomation
                key={item.subject}
                InfomationProps={item}
              />
            ))}
          </div>
        </div>
      ) }} />
    <MainSection mainSectionProps={{ text: "SKILLS", bgColor: "bg-[#FCD12A]", id: "SKILLS", children: (
      <div  className="w-[min(700px,calc(100%-2rem))] min-h-100 h-auto rounded-xl flex flex-col bg-[#F7EBD3] gap-10 items-center justify-center py-8 text-2xl font-bold">
        <SkillRow skillRowProps={{ src: "/icons/language.png", skillText: "Language", skillList: ["JavaScript", "TypeScript","C"], color: "bg-[#1572B6]" }} />
        <SkillRow skillRowProps={{ src: "/icons/frontend.png", skillText: "FrontEnd",skillList: ["HTML5","React","Next.js","TanStack Query","Zustand","React-Hook-Form" ,"Tailwind CSS","SCSS"], color: "bg-[#E34F26]" }} />
        <SkillRow skillRowProps={{ src: "/icons/backend.png", skillText: "BackEnd",  skillList: ["Node.js","Express", "PostgreSQL", "MongoDB"], color: "bg-[#F7DF1E]" }} />        
        <SkillRow skillRowProps={{ src: "/icons/devops.png", skillText: "DevOps",  skillList: ["Docker","GitHub Actions","AWS","Vercel","Redis"], color: "bg-[#F7DF1E]" }} />        
      </div>
      ) }} />
    <MainSection mainSectionProps={{ text: "PROJECTS", bgColor: "bg-gray-600", id: "PROJECTS", children: (
      <div className="w-full h-200 flex items-center justify-center text-2xl font-bold">
        이게 내 포폴이 될거임
      </div>
      ) }} />
    </div>
  );
}
