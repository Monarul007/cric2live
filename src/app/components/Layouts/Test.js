export default function Test({ data }){

    return (<>
        <p>Returned jsonData length is: {data}</p>
    </>)
}

export async function getServerSideProps(context) {
    const { params } = context;
    const URL = `https://api.msn.com/sports/statistics?apikey=kO1dI4ptCTTylLkPL1ZTHYP8JhLKb8mRDoA5yotmNJ&version=1.0&cm=en-xl&activityId=135265A2-2261-405E-8434-77AB5E81765C&ocid=sports-gamecenter&it=web&user=m-0D3650A82C0F68DE1EA943F32D0E6901&scn=ANON&ids=SportzInteractive_Cricket_ICC_2023_Game_217027&type=Game&scope=Playergame&sport=Cricket&leagueid=Cricket_ICC`;
  
    // Fetch data from external API
    const res = await fetch(URL);
    const data = await res.json();
    const jsonData = data.value;

    console.log('data', data);
  
    // Pass data to the page via props
    return { props: { data } };
}