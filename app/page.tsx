import Info from "./component/Section/Info"

export default function Home() {
  return (
    <div>
    <Info />
    <div id="skills" className="w-full h-200 scroll-mt-15 bg-black-600 flex items-center justify-center text-2xl font-bold">
      이게 내 포폴이 될거임
    </div>
    <div id="projects" className="w-full h-200 scroll-mt-15 bg-gray-600 flex items-center justify-center text-2xl font-bold">
      이게 내 포폴이 될거임
    </div>
    <div className="w-full h-200 bg-black-600 flex items-center justify-center text-2xl font-bold">
      이게 내 포폴이 될거임
    </div>
    </div>
  );
}
