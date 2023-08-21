import Image from "next/image";
import Link from "next/link";

export default function ScoreCardMiniLive(){

    return(<>
        <div className="surface w-full sm:max-w-xs text-xs">
            <div className="flex flex-row justify-between items-start py-2">
                <div className="flex-auto w-1/4 text-center">
                    <Image
                        src="https://www.bing.com/th?id=OSB.9djsudA6Ru6NtQKXot2dxA--.png&w=40&h=40&qlt=90&c=1&rs=1&dpr=2&p=0"
                        className="mx-auto"
                        width={40}
                        height={40}
                        alt="Picture of the author"
                    />
                    <span className="font-semibold">ENG</span>
                </div>
                <div className="flex-auto text-center">
                    <div className="flex justify-center">
                        <span className="text-slate-400"><span>TEST</span> • <span className="text-red-500">Live</span> • <span>Day 1</span></span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                        <div className="block">
                            <span className="block">257/7 <span className="text-red-500">•</span></span>
                            <span className="block text-slate-400">{'(51.2)'}</span>
                        </div>
                        <div className="block">
                            <span className="text-slate-400">VS</span>
                        </div>
                        <div className="block">
                            <span className="block">0/0</span>
                            <span className="block text-slate-400">{'(0.0)'}</span>
                        </div>
                    </div>
                </div>
                <div className="flex-auto w-1/4 text-center">
                    <Image
                        src="https://www.bing.com/th?id=OSB.FnnSsq_2DD4SKYyjyJFTKA--.png&w=40&h=40&qlt=90&c=1&rs=1&dpr=2&p=0"
                        className="mx-auto"
                        width={40}
                        height={40}
                        alt="Picture of the author"
                    />
                    <span className="font-semibold">AUS</span>
                </div>
            </div>
        </div>
    </>)
}