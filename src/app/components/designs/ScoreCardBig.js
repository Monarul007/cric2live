import Image from "next/image";

export default function ScoreCardBig(){

    return(<>
        <div className="surface w-full text-base">
            <div className="flex justify-center py-2">
                <span className="text-slate-500">The Ashes, 2023 · AUS leads series 2-1 · Match 5 · Test</span>
            </div>
            <div className="flex flex-row justify-between items-start py-2">
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
                <div className="flex-auto text-center">
                    
                    <div className="inline-flex rounded-md" role="group">
                        <div className="px-4 py-0 text-sm font-semibold text-white bg-red-600 border border-red-600 rounded-l-lg">
                            STUMPS
                        </div>
                        <div className="px-4 py-0 text-sm font-semibold text-red-600 bg-slate-200 border border-red-600 rounded-r-md">
                            Day 1
                        </div>
                    </div>
                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center">
                            <span className="font-bold">283</span>
                            <span className="text-slate-500">{'(54.4)'}</span>
                        </div>
                        <div className="block">
                            <span className="font-bold text-slate-500">VS</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-red-600">•</span>
                            <span className="font-bold">61/1</span>
                            <span className="text-slate-500">{'(25.0)'}</span>
                        </div>
                    </div>
                </div>
                <div className="flex-auto w-1/4 text-center">
                    <Image
                        src="https://www.bing.com/th?id=OSB.FnnSsq_2DD4SKYyjyJFTKA--.png&pid=MSports&w=150&h=150&qlt=90&c=0&rs=1&dpr=2&p=1"
                        className="mx-auto"
                        width={40}
                        height={40}
                        alt="Australia"
                    />
                    <span className="font-semibold">AUS</span>
                </div>
            </div>
            <hr></hr>
            <div className="flex flex-row justify-between items-center p-4">
                <div className="w-1/3">
                    <div className="w-full text-slate-500 text-sm leading-8">Bowling</div>
                    <div className="w-full flex text-sm justify-between leading-6">
                        <p>S. Broad</p>
                        <span className="text-slate-500 text-sm">{'0/13 (8.0)'}</span>
                    </div>
                    <div className="w-full flex text-sm justify-between">
                        <p>J. Anderson</p>
                        <span className="text-slate-500 text-sm">{'0/21 (7.0)'}</span>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="flex items-center justify-center gap-1">
                        <div className="text-slate-500 text-sm">Current RR: </div>
                        <div className="p-[2px] text-xs text-slate-900 bg-gray-50 border border-slate-200 rounded-sm">
                            2.44
                        </div>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="w-full text-slate-500 text-sm leading-8">Batting</div>
                    <div className="w-full flex text-sm justify-between leading-6">
                        <p>U. Khawaja</p>
                        <span className="text-slate-500 text-sm">{'26 (75)'}</span>
                    </div>
                    <div className="w-full flex text-sm justify-between">
                        <p>M. Labuschagne</p>
                        <span className="text-slate-500 text-sm">{'2 (23)'}</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-2 pb-4">
                <span className="font-semibold text-slate-700">AUS trail by 222 runs</span>
            </div>
        </div>
    </>)
}