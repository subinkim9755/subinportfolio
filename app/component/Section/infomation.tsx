import Image from "next/image";

type InfomationProps = {
  src: string;
  subject: string;
  content: string;
};

function Infomation({ src, subject, content }: InfomationProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
        <Image src={src} alt={subject} width={24} height={24} />
      </div>

      <div>
        <p className="text-sm text-gray-500">{subject}</p>
        <p className="text-base font-semibold text-gray-800">{content}</p>
      </div>
    </div>
  );
}

export default Infomation;