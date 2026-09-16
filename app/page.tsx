import InfoSection from "./component/Section/InfoSection"
import MainSection from "./component/Section/MainSection"
export default function Home() {
  return (
    <div>
    <InfoSection />
    <MainSection text="About Me">
      <div id="skills" className="w-full h-200 scroll-mt-15 flex items-center justify-center text-2xl font-bold">
        이게 내 포폴이 될거임
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
