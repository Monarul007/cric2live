import ScoreCardBig from "@/app/components/designs/scorecards/details/ScoreCardDetailsLive";
import ScoreCardBigCompleted from "@/app/components/designs/scorecards/ScoreCardBigCompleted";
import ScoreCardDetailsCompleted from "@/app/components/designs/ScoreCardDetailsCompleted";
import { ScoreAPIBaseURL } from "@/app/config/config";

async function getMatchData(matchID) {
    const res = await fetch(`${ScoreAPIBaseURL}/pages/match/details?lang=en&seriesId=1381201&matchId=1381217&latest=true`);
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    const responseData = await res.json();
    // console.log('GOT VALUE:', responseData)
    return responseData;
}

export default async function matchDetailsPage({ params }) {

    const matchID = params.id;
    const matchSlug = params.slug;

    const matchData = await getMatchData(matchID);
    const matchState = matchData.match.state;

    return (<>
        {(() => {
            switch (matchState) {
                case 'LIVE':
                    return <ScoreCardBig statisticsData={statisticsData} gameData={gamesData} />
                case 'POST':
                    return <ScoreCardDetailsCompleted matchData={matchData} />
                case 'PRE':
                    return <ScoreCardBigCompleted statisticsData={statisticsData} gameData={gamesData} />
                default:
                    return null
            }
        })()}
    </>)
}