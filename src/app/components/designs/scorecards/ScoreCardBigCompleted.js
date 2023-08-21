import Image from "next/image";
import Link from "next/link";

export default function ScoreCardBigCompleted(title){

    return(<>
        <div className="surface relative w-full rounded-lg text-base" title={'Netherlands in South Africa, 2 ODI Series, 2023 · SA leads series 2-0 · Match 2 · ODI'}>
            <div className="absolute top-0 left-0 w-full h-full rounded-lg gradient-eng -z-10"></div>
            <div className="absolute top-0 right-0 w-full h-full rounded-lg gradient-aus -z-10"></div>
            <div className="flex justify-center py-2">
                <span className="text-slate-500">Apr 2 · Result</span>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="flex-auto w-1/4 text-center">
                    <Image
                        src="https://www.bing.com/th?id=OSB.9djsudA6Ru6NtQKXot2dxA--.png&pid=MSports&w=150&h=150&qlt=90&c=0&rs=1&dpr=2&p=1"
                        className="mx-auto"
                        width={40}
                        height={40}
                        alt="Sri Lanka"
                    />
                    <span className="font-bold">ENG</span>
                </div>
                <div className="flex-auto text-center items-center bg-white bg-opacity-25 rounded-lg">
                    <div className="flex items-center justify-center pt-2 gap-8">
                        <div className="flex items-center">
                            <span>370/8</span>
                            <span>{'(50.0)'}</span>
                        </div>
                        <div className="block">
                            <span className="text-slate-500">VS</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-500">
                            <span>224</span>
                            <span>{'(39.1)'}</span>
                        </div>
                    </div>
                    <span className="text-slate-500 text-xs">SA won by 146 runs</span>
                    <hr className="h-px mb-2 bg-gray-300 w-1/2 border-0 text-center mx-auto dark:bg-gray-700"></hr>
                    <div><span className="text-slate-500 line-clamp-1 text-xs mb-2 mx-4">Netherlands in South Africa, 2 ODI Series, 2023 · SA leads series 2-0 · Match 2 · ODI</span></div>
                </div>
                <div className="flex-auto w-1/4 text-center">
                    <Image
                        src="https://www.bing.com/th?id=OSB.FnnSsq_2DD4SKYyjyJFTKA--.png&pid=MSports&w=150&h=150&qlt=90&c=0&rs=1&dpr=2&p=1"
                        className="mx-auto"
                        width={40}
                        height={40}
                        alt="Australia"
                    />
                    <span className="font-semibold text-slate-500">AUS</span>
                </div>
            </div>
            <div className="flex justify-center pt-2 pb-4">
                <Link href="/" className="px-3 py-2 text-xs border border-blue-300 font-medium text-center rounded-full">See more match details</Link>
            </div>
        </div>
    </>)
}