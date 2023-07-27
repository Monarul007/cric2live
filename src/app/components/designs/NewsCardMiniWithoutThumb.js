import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function NewsCardMiniWithoutThumb({title}){

    return(<>
        <article className="surface hover:opacity-80 relative overflow-visible h-[130px] block" title={title}>
            <Link href="/">
                <div className="absolute bottom-0 w-full z-10 pt-[52px] px-[16px] box-border">
                    <div className="flex flex-row items-center text-[#242424] mb-[12px]">
                        <Image 
                            src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBERG9W?w=16&h=16&q=100&m=6&f=png&u=t"
                            className="mr-2"
                            width={16}
                            height={16}
                            alt="Picture of the author"
                        />
                        <span className="font-semibold text-xs">The Independent</span>
                    </div>
                    <Link href="/" className="font-semibold	leading-6 text-base line-clamp-2 text-[#242424] mb-[10px] hover:underline">
                        {title}
                    </Link>
                    <div className="flex items-center justify-between gap-2 pb-2">
                        <div className="flex items-center justify-between gap-2">
                            <div className="relative sm:max-w-xl sm:mx-auto">
                                <div className="group flex gap-1 text-sm cursor-pointer relative text-center hover:bg-slate-200 hover:rounded-sm">
                                    <HandThumbUpIcon className="w-4" /> 24
                                    <div className="opacity-0 bg-slate-200 text-center text-xs rounded-sm p-2 absolute z-10 group-hover:opacity-100 -top-10 left-0 pointer-events-none">
                                        Like
                                    </div>
                                </div>
                            </div>
                            <div className="relative sm:max-w-xl sm:mx-auto">
                                <div className="group flex gap-1 text-sm cursor-pointer relative text-center hover:bg-slate-200 hover:rounded-sm px-2">
                                    <HandThumbDownIcon className="w-4" /> 1
                                    <div className="opacity-0 bg-slate-200 text-center text-xs rounded-sm p-2 absolute z-10 group-hover:opacity-100 -top-10 left-0 pointer-events-none">
                                        Dislike
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-sm">
                            <span>3 hours ago</span>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    </>)
}