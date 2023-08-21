"use client";

import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ChevronDownIcon, ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import NewsCard from '../designs/NewsCard';
import NewsCardMiniWithoutThumb from '../designs/NewsCardMiniWithoutThumb';
import VideoNewsCardMini from '../designs/VideoNewsCardMini';
import ScoreCardMini from '../designs/scorecards/ScoreCardMini';
import ScoreCardMiniLive from '../designs/scorecards/ScoreCardMiniLive';
import ScoreCardMiniScheduled from '../designs/scorecards/ScoreCardMiniScheduled';
import ScoreCardDetailsLive from '../designs/scorecards/details/ScoreCardDetailsLive';
import ScoreCardBigCompleted from '../designs/scorecards/ScoreCardBigCompleted';

export default function TopBar(){

    const cancelButtonRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [switcherText, setSwitcherText] = useState('Show Matches');
    
    const toggleDrawer = () => {
        setOpen(!open);
        setSwitcherText(open ? 'Show Matches' : 'Hide Matches');
    }

    return (
        <>
            <div className="container mx-auto pt-1 px-4">
                <div className="surface p-1">
                    <div className="inline-flex items-center justify-between">
                        <div className="inline-flex items-center">
                            <div className="relative mr-2 shadow-sm border border-red-500 w-5 h-5 rounded-full">
                                <span className="animate-ping duration-[2000] top-[5px] left-[5px] absolute inline-flex h-2 w-2 rounded-full bg-red-600 opacity-1"></span>
                            </div>
                            <span className="uppercase font-bold"><span>2</span><span> live match</span></span>
                        </div>
                        <div className="inline-flex items-center cursor-pointer" onClick={toggleDrawer}>
                            <span className={open ? "hidden" : "inline-flex"}>{switcherText}</span>
                            <ChevronDownIcon className={`mr-1 h-5 w-5 text-gray-400 ${open ? "rotate-180":""}`} aria-hidden="true" />
                        </div>
                        <Transition.Root show={open} as={Fragment}>
                            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={toggleDrawer}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                <div className="fixed inset-0 bg-gradient-primary backdrop-blur transition-opacity opacity-100" />
                                </Transition.Child>

                                <div className="fixed inset-0 z-10 overflow-y-auto">
                                    <div className="p-4">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                        >
                                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all">
                                            <div className="inline-flex w-full justify-between">
                                                <div className="flex items-center justify-center gap-x-2">
                                                    <a href="#" className="rounded-md bg-[#303852] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#303852]-300">
                                                        FIXTURES
                                                    </a>
                                                    <a href="#" className="rounded-md bg-[#303852] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#303852]-300">
                                                        RESULT
                                                    </a>
                                                </div>
                                                <div className="flex items-center justify-center gap-x-2">
                                                    <a href="#" className="rounded-md bg-[#303852] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#303852]-300">
                                                        VIEW ALL
                                                    </a>
                                                </div>
                                            </div>
                                            <Link href="/" className="surface p-0">
                                                <div className="flex items-center justify-between">
                                                    <div className="text-xs font-semibold py-1 px-2 text-black bg-green-500 rounded-lg rounded-tr-none rounded-bl-none">TEST</div>
                                                    <div className="text-xs p-1 font-semibold flex items-center justify-between">
                                                        <span className='mr-3'>PAK 1st Innings . Stumps - Day 2</span>
                                                        <div className="relative shadow-sm border border-red-500 w-3 h-3 rounded-full text-xs mr-1">
                                                            <span className="text-xs font-semibold animate-ping duration-[2000] top-[2.5px] left-[2.5px] absolute inline-flex h-1 w-1 rounded-full bg-red-600 opacity-1"></span>
                                                        </div>
                                                        <span className="text-red-500 text-xs font-semibold">Live</span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <button
                                                type="button"
                                                className="mt-3 inline-flex w-full center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                onClick={toggleDrawer}
                                                ref={cancelButtonRef}
                                            >
                                                Cancel
                                            </button>
                                        </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition.Root>
                    </div>
                </div>
                <br></br>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    <ScoreCardMini />
                    <ScoreCardMiniLive />
                    <ScoreCardMiniScheduled />
                    <ScoreCardMini />
                    <ScoreCardMiniLive />
                    <ScoreCardMiniScheduled />
                    <ScoreCardMini />
                    <ScoreCardMiniLive />
                </div>
                <br></br>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    <NewsCard title="West Indies vs India LIVE: Cricket score and updates from ICC World Test Championship 2023-25" img={'https://th.bing.com/th?id=ORMS.c420004c0a048ee9a4502698c70bed71&pid=Wdp&w=300&h=225&qlt=90&c=1&rs=1&dpr=1&p=0'} />
                    <NewsCard title="Harmanpreet Kaur suspended for two matches" img={'https://th.bing.com/th?id=ORMS.e423b5348137c8e73768e17fa1389dc0&pid=Wdp&w=300&h=225&qlt=90&c=1&rs=1&dpr=1&p=0'} />
                    <NewsCard title="Qasim Akram's six: fer leads Shaheens to second successive win" img={'https://th.bing.com/th?id=ORMS.b577c19b1deed311b16853d5c2e6ecf2&pid=Wdp&w=300&h=225&qlt=90&c=1&rs=1&dpr=1&p=0'} />
                    <NewsCard title="Former cricketers rally behind Pakistan's prospects in Asia Cup" img={'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB15FhAT?w=624&h=350&q=60&m=6&f=jpg&u=t'} />
                    <NewsCard title="Saud Shakeel, Imamul Haq drive Pakistan to remarkable victory over Sri Lanka in first Test" img={'https://www.bing.com/th?id=OSB.RG8xJCReLFo&w=300&h=168&qlt=90&c=1&rs=1&dpr=2&p=0'} />
                    <NewsCard title="ICC WC’23: Won’t be easy to win against strong team like India: Former England Captain Eoin Morgan" img={'https://th.bing.com/th?id=ORMS.890fc60f0ff09fdcaf053a5c962ebe8b&pid=Wdp&w=300&h=225&qlt=90&c=1&rs=1&dpr=1&p=0'} />
                    <NewsCard title="Pakistan pacer Shaheen Afridi completes 100 Test wickets" img={'https://th.bing.com/th?id=ORMS.1980b301ee0ff2c03bcbbbc2ad9ac725&pid=Wdp&w=600&h=500&qlt=90&c=1&rs=1'} />
                    <NewsCard title="Will the USA finally crack the cricket market with Major League Cricket?" img={'https://th.bing.com/th?id=ORMS.1c6ed740ef223303cf480d2167b14693&pid=Wdp&w=600&h=500&qlt=90&c=1&rs=1'} />
                </div>
                <br></br>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    <NewsCardMiniWithoutThumb title="West Indies vs India LIVE: Cricket score and updates from ICC World Test Championship 2023-25" />
                    <NewsCardMiniWithoutThumb title="Harmanpreet Kaur suspended for two matches" />
                    <NewsCardMiniWithoutThumb title="Qasim Akram's six: fer leads Shaheens to second successive win" />
                    <NewsCardMiniWithoutThumb title="Former cricketers rally behind Pakistan's prospects in Asia Cup" />
                    <NewsCardMiniWithoutThumb title="Saud Shakeel, Imamul Haq drive Pakistan to remarkable victory over Sri Lanka in first Test" />
                    <NewsCardMiniWithoutThumb title="ICC WC’23: Won’t be easy to win against strong team like India: Former England Captain Eoin Morgan" />
                    <NewsCardMiniWithoutThumb title="Pakistan pacer Shaheen Afridi completes 100 Test wickets" />
                    <NewsCardMiniWithoutThumb title="Will the USA finally crack the cricket market with Major League Cricket?" />
                </div>
                <br></br>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    <VideoNewsCardMini title={'All Wickets || Bangladesh vs England || 2nd ODI || England tour of Bangladesh 2023'} img={'https://www.bing.com/th?id=OSB.GWF9U82UQ9A&w=300&h=168&qlt=90&c=1&rs=1&dpr=2&p=0'} />
                    <VideoNewsCardMini title={'1st Innings Highlights | Pakistan vs New Zealand | 3rd ODI 2023 | PCB | MZ2T'} img={'https://www.bing.com/th?id=OSB.uUUcS_wrMFY&w=300&h=168&qlt=90&c=1&rs=1&dpr=2&p=0'} />
                    <VideoNewsCardMini title={'Shakib Al Hasans 58 Runs Against England || 2nd ODI || England tour of Bangladesh 2023'} img={'https://www.bing.com/th?id=OSB.lOlqcFvtDqM&w=300&h=168&qlt=90&c=1&rs=1&dpr=2&p=0'} />
                    <VideoNewsCardMini title={'Sam Currans 4 Wickets Against Bangladesh || 2nd ODI || England tour of Bangladesh 2023'} img={'https://www.bing.com/th?id=OSB.NFtQ2pAc6zk&w=300&h=168&qlt=90&c=1&rs=1&dpr=2&p=0'} />
                    <VideoNewsCardMini title={'Bangladesh vs England Highlights || 1st ODI || England tour of Bangladesh 2023'} img={'https://www.bing.com/th?id=OSB.cmQhlJrW2AA&w=300&h=168&qlt=90&c=1&rs=1&dpr=2&p=0'} />
                    <VideoNewsCardMini title={'All Wickets || Bangladesh vs England || 1st ODI || England tour of Bangladesh 2023'} img={'https://www.bing.com/th?id=OSB.RghVVpimPqQ&w=300&h=168&qlt=90&c=1&rs=1&dpr=2&p=0'} />
                    <VideoNewsCardMini title={'Spectacular Batting By Mohammad Rizwan | Pakistan vs New Zealand | 3rd ODI 2023 | PCB | MZ2T'} img={'https://www.bing.com/th?id=OSB.8fFx--wJyBg&w=300&h=168&qlt=90&c=1&rs=1&dpr=2&p=0'} />
                    <VideoNewsCardMini title={'Behind The Scenes of Home Season – Englands Test Tour & New Zealands Historic Visit After 19 Years'} img={'https://www.bing.com/th?id=OSB.ng9iD_dg8jk&w=300&h=168&qlt=90&c=1&rs=1&dpr=2&p=0'} />
                </div>
                <br></br>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 md:max-w-4xl md:mx-auto gap-4'>
                    <ScoreCardDetailsLive />
                    <ScoreCardDetailsLive />
                </div>
                <br></br>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 md:max-w-4xl md:mx-auto gap-4'>
                    <ScoreCardBigCompleted />
                    <ScoreCardBigCompleted />
                </div>
                <br></br>
                <br></br>
            </div>
        </>
    )
}