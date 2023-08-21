import Image from "next/image";

export default function ScoreCardDetailsLive({ matchData }){
    return(<>
        <div className="surface w-full text-base">
            <div className="flex justify-center py-2">
                <span className="text-slate-500">{matchData?.match?.series?.name} · Match {matchData?.match?.title} · {matchData?.match?.format}</span>
            </div>
            <div className="flex flex-row justify-between items-start py-2">
                <div className="flex-auto w-1/4 text-center">
                    <Flag code={matchData?.match?.teams[0].team?.abbreviation} fallback={ <span>{matchData?.match?.teams[0].team?.abbreviation}</span> } width={40} />
                    <span className="font-bold">{matchData?.match?.teams[0].team?.abbreviation}</span>
                </div>
                <div className="flex-auto text-center">
                    <div className="inline-flex rounded-md" role="group">
                        <div className="px-4 py-0 text-sm font-semibold text-white bg-red-600 border border-red-600 rounded-l-lg">
                            Live
                        </div>
                        <div className="px-2 py-0 text-sm font-semibold text-red-600 bg-slate-200 border border-red-600 rounded-r-md">{matchData?.match?.title}</div>
                    </div>
                    <div className="flex items-center justify-between py-3">
                        <div>
                            <div className="flex items-center">
                                <span className="font-bold">{matchData?.match?.teams[0]?.score}</span>
                            </div>
                        </div>
                        <div className="block">
                            <span className="font-bold text-slate-500">VS</span>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <span className="font-bold">{matchData?.match?.teams[1]?.score}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-auto w-1/4 text-center">
                    <Flag code={matchData?.match?.teams[1].team?.abbreviation} fallback={ <span>Unknown</span> } width={40} />
                    <span className="font-bold">{matchData?.match?.teams[1].team?.abbreviation}</span>
                </div>
            </div>
            <hr></hr>
            <div className="flex flex-row justify-between items-center p-4">
                <div className="w-1/3">
                    <div className="w-full text-slate-500 text-sm leading-8">Bowling</div>
                    {latestInningsData[0]?.inningBowlers?.map((bowler) => {
                        return (<>
                            <div className="w-full flex text-sm justify-between leading-6">
                                <p>{bowler?.player?.name}</p>
                                <span className="text-slate-500 text-sm">{`${bowler?.wickets}/${bowler?.conceded} (${bowler?.overs})`}</span>
                            </div>
                        </>)
                    })}
                </div>
                <div className="w-1/3">
                    <div className="flex items-center justify-center gap-1">
                        <div className="text-slate-500 text-sm">Current RR: </div>
                        <div className="p-[2px] text-xs text-slate-900 bg-gray-50 border border-slate-200 rounded-sm">
                            {latestInningsData[0]?.runs/latestInningsData[0]?.overs}
                        </div>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="w-full text-slate-500 text-sm leading-8">Batting</div>
                    {latestInningsData[0]?.inningBatsmen?.map((batter) => {
                        return (<>
                            <div className="w-full flex text-sm justify-between leading-6">
                                <p>{batter?.player?.name}</p>
                                <span className="text-slate-500 text-sm">{`${batter?.runs} (${batter?.balls})`}</span>
                            </div>
                        </>)
                    })}
                </div>
            </div>
            <div className="flex justify-center pt-2 pb-4">
                <span className="font-semibold text-slate-700">{matchData?.match?.statusText}</span>
            </div>
        </div>
    </>)
}