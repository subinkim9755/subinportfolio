import Infomation from "./component/Section/infomation";
import InfoSection from "./component/Section/InfoSection"
import MainSection from "./component/Section/MainSection"

const infoList = [
  { src: "/icons/user.svg", subject: "이름", content: "김수빈" },
  { src: "/icons/location.svg", subject: "위치", content: "서울" },
  { src: "/icons/email.svg", subject: "이메일", content: "subin@email.com" },
  { src: "/icons/birthday.svg", subject: "생년월일", content: "1997.01.01" },
  { src: "/icons/phone.svg", subject: "연락처", content: "010-1234-5678" },
  { src: "/icons/education.svg", subject: "학력", content: "OO대학교 컴퓨터공학과" },
];

export default function Home() {
  return (
    <div>
    <InfoSection />
    <MainSection text="About Me">
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
    <MainSection text="Skills" bgColor="bg-[#FCD12A]">
      <div id="projects" className="w-full h-200 scroll-mt-15 flex items-center justify-center text-2xl font-bold">
        이게 내 포폴이 될거임
      </div>
      
    </MainSection>
    <MainSection text="Projects" bgColor="bg-gray-600">
      <div className="w-full h-200 bg-black-600 flex items-center justify-center text-2xl font-bold">
        이게 내 포폴이 될거임
      </div>
    </MainSection>
    </div>
  );
}
