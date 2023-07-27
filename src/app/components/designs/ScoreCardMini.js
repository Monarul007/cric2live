import Image from "next/image";
import Link from "next/link";

export default function ScoreCardMini(){

    return(<>
        <Link href="/" className="surface w-full sm:max-w-xs text-xs">
            <div className="flex flex-row justify-between items-start py-2">
                <div className="flex-auto w-1/4 text-center">
                    <Image
                        src="https://www.bing.com/th?id=OSB.1yP75aEZyBTLJxpy6GuqNg--.png&w=40&h=40&qlt=90&c=1&rs=1&dpr=2&p=0"
                        className="mx-auto"
                        width={40}
                        height={40}
                        alt="Picture of the author"
                    />
                    <span className="font-semibold">SL</span>
                </div>
                <div className="flex-auto text-center">
                    <div className="flex justify-center">
                        <span className="text-slate-400"><span>May 26</span> • <span>T20</span></span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="block">
                            <span className="block">171/5</span>
                            <span className="block text-slate-400">{'(15.0)'}</span>
                        </div>
                        <div className="block">
                            <span className="text-slate-400">VS</span>
                        </div>
                        <div className="block">
                            <span className="block">214/4</span>
                            <span className="block text-slate-400">{'(20.0)'}</span>
                        </div>
                    </div>
                    <span className="line-clamp-1 text-green-600">{'CSK won by 5 wickets (D/L)'}</span>
                </div>
                <div className="flex-auto w-1/4 text-center">
                    <Image
                        src="https://www.bing.com/th?id=OSB.QyiVATBUqpJdmnh3z_Sueg--.png&w=40&h=40&qlt=90&c=1&rs=1&dpr=2&p=0"
                        className="mx-auto"
                        width={40}
                        height={40}
                        alt="Picture of the author"
                    />
                    <span className="font-semibold">SL</span>
                </div>
            </div>
        </Link>
    </>)
}