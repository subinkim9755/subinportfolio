import { TInfomationProps } from "@/app/types/compoments.type";
import Link from "next/dist/client/link";
import Image from "next/image";


function Infomation({ InfomationProps }: { InfomationProps: TInfomationProps }) {
  return (
    <div>
    <div className="sm:hidden h-full flex flex-col items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex h-12 w-30 gap-2 items-center justify-center rounded-full bg-orange-50">
        <Image src={InfomationProps.src} alt={InfomationProps.subject} width={24} height={24} />
      
        <p className="text-sm text-gray-500">{InfomationProps.subject}</p>
      </div>

      <div>
        {/^https?:\/\//i.test(InfomationProps.content) ? (
          <Link href={InfomationProps.content} target="_blank" rel="noopener noreferrer">
            <p className="text-base font-semibold text-blue-500">{InfomationProps.content}</p>
          </Link>
        ) : (
          <div>
            <p className="text-base font-semibold text-gray-800">{InfomationProps.content}</p>
            {InfomationProps.secondContent && (
              <p className="text-base font-semibold text-gray-800">{InfomationProps.secondContent}</p>
            )}
          </div>
        )}
      </div>
    </div>
    <div className=" hidden sm:flex h-full items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
        <Image src={InfomationProps.src} alt={InfomationProps.subject} width={24} height={24} />
      </div>

      <div>
        <p className="text-sm text-gray-500">{InfomationProps.subject}</p>
        {/^https?:\/\//i.test(InfomationProps.content) ? (
          <Link href={InfomationProps.content} target="_blank" rel="noopener noreferrer">
            <p className="text-base font-semibold text-blue-500">{InfomationProps.content}</p>
          </Link>
        ) : (
          <div>
          <p className="text-base font-semibold text-gray-800">{InfomationProps.content}</p>
          {InfomationProps.secondContent && (
            <p className="text-base font-semibold text-gray-800">{InfomationProps.secondContent}</p>
          )}
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default Infomation;