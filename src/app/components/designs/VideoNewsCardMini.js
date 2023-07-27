import Image from "next/image";
import Link from "next/link";

export default function VideoNewsCardMini({title, img}){

    return(<>
        <article className="surface hover:opacity-90 h-[170px] relative overflow-hidden rounded-lg cursor-pointer" title={title}>
            <Image
                src={img}
                className="object-cover w-full"
                width={300}
                height={170}
                alt={title}
            />
            {/* Play button */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <Link href="/" className="w-10 h-10 bg-black bg-opacity-50 rounded-full ring-1 ring-white grid place-items-center transition">
                    <span className="sr-only">Watch the video</span>
                    <svg className="ml-1 w-4" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430054 3 0.339746L15 7.26795Z" fill="white" />
                    </svg>
                </Link>
            </div>
            <div className="absolute top-0 mt-8 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-black"></div>
            <main className="absolute bottom-0 px-4 pb-3 z-10">
                <Link href="/" className="font-bold leading-5 text-sm line-clamp-2 text-ellipsis overflow-hidden text-white hover:underline">{title}</Link>
            </main>
        </article>
    </>)
}