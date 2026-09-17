import Infomation from "./component/SmallElements/infomation";
import InfoSection from "./component/Section/InfoSection"
import MainSection from "./component/Section/MainSection"

const infoList = [
  { src: "/icons/user.png", subject: "이름", content: "김수빈" },  
  { src: "/icons/email.png", subject: "이메일", content: "a01072669755@gmail.com" },
  { src: "/icons/birthday.png", subject: "생년월일", content: "1999.07.09" },
  { src: "/icons/phone.png", subject: "연락처", content: "010-7266-9755" },
  { src: "/icons/education.png", subject: "학력", content: "세종대학교 스마트기기학과, 컴퓨터공학과" },
  { src: "/icons/git.png", subject: "GitHub", content: "https://github.com/subinkim9755"},
];

export default function Home() {
  return (
    <div>
    <InfoSection />
    <MainSection text="ABOUT ME" id="ABOUT ME">
        <div className="w-full flex items-center justify-center py-10">
          <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
            {infoList.map((item) => (
              <Infomation
                key={item.subject}
                src={item.src}
                subject={item.subject}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </MainSection>
    <MainSection text="SKILLS" bgColor="bg-[#FCD12A]" id="SKILLS">
      <div  className="w-full h-200 scroll-mt-15 flex items-center justify-center text-2xl font-bold">
        이게 내 포폴이 될거임
      </div>
      
    </MainSection>
    <MainSection text="PROJECTS" bgColor="bg-gray-600" id="PROJECTS">
      <div className="w-full h-200 bg-black-600 flex items-center justify-center text-2xl font-bold">
        이게 내 포폴이 될거임
      </div>
    </MainSection>
    </div>
  );
}
