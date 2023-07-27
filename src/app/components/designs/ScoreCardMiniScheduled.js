import Image from "next/image";
import Link from "next/link";

export default function ScoreCardMiniScheduled(){

    return(<>
        <Link href="/" className="surface w-full sm:max-w-xs text-xs">
            <div className="flex flex-row justify-between items-start py-2">
                <div className="flex-none w-1/4 text-center">
                    <Image
                        src="https://www.bing.com/th?id=OSB.5SuJNqkJ0qtt8C8mml%7Cv5w--.png&w=40&h=40&qlt=90&c=1&rs=1&dpr=2&p=0"
                        className="mx-auto"
                        width={40}
                        height={40}
                        alt="Picture of the author"
                    />
                    <span className="font-semibold">BAN</span>
                </div>
                <div className="flex-auto text-center">
                    <div className="flex justify-center">
                        <span className="text-slate-400"><span>ODI</span></span>
                    </div>
                    <div className="flex items-center justify-center pt-1">
                        <div className="block">
                            <span className="block font-semibold">Aug 31 • 11:00 PM</span>
                        </div>
                    </div>
                    <span className="line-clamp-1 text-slate-400 pt-1" title="Pallekele International Cricket Stadium, Kandy">{'Pallekele International Cricket Stadium, Kandy'}</span>
                </div>
                <div className="flex-none w-1/4 text-center">
                    <Image
                        src="https://www.bing.com/th?id=OSB.uwvVhupIZu4GZ%7CNGbUhSkQ--.png&w=40&h=40&qlt=90&c=1&rs=1&dpr=2&p=0"
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