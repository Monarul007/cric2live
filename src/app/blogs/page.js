// pages/blog.js (Blog Listing Page)
// "use client";

// import { useSelector } from 'react-redux';
import Header from '../components/Layouts/Header';
// import { useAppSelector } from '../redux/store';

async function getStatisticsData() {
  const res = await fetch('https://api.msn.com/sports/statistics?' + new URLSearchParams({
    apikey: 'kO1dI4ptCTTylLkPL1ZTHYP8JhLKb8mRDoA5yotmNJ', 
    version: '1.0',
    cm: 'en-xl', 
    activityId: '135265A2-2261-405E-8434-77AB5E81765C',
    ocid: 'sports-gamecenter', 
    it: 'web',
    user: 'm-0D3650A82C0F68DE1EA943F32D0E6901',
    scn: 'ANON',
    ids: 'SportzInteractive_Cricket_ICC_2023_Game_217027',
    type: 'Game', 
    scope: 'Playergame',
    sport: 'Cricket',
    leagueid: 'Cricket_ICC'
  }));

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  const responseData = await res.json();
  return responseData.value[0].statistics[0];
}

async function getGamesData() {
  const res = await fetch('https://api.msn.com/sports/games?' + new URLSearchParams({
    apikey: 'kO1dI4ptCTTylLkPL1ZTHYP8JhLKb8mRDoA5yotmNJ', 
    version: '1.0',
    cm: 'en-xl', 
    tzoffset: '6',
    activityId: '135265A2-2261-405E-8434-77AB5E81765C',
    ocid: 'sports-gamecenter', 
    it: 'web',
    user: 'm-0D3650A82C0F68DE1EA943F32D0E6901',
    scn: 'ANON',
    ids: '217027',
    scope: 'Full'
  }));

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  const responseData = await res.json();
  return responseData.value[0].games[0];
}

async function getLiveData() {
  const res = await fetch('https://browser.events.data.msn.com/OneCollector/1.0', {
    method: 'POST',
    body: JSON.stringify({
      cors: 'true',
      'content-type': 'application/x-json-stream',
      'client-id':'NO_AUTH',
      'client-version': '1DS-Web-JS-3.2.8',
      apikey: '0ded60c75e44443aa3484c42c1c43fe8-9fc57d3f-fdac-4bcf-b927-75eafe60192e-7279',
      'upload-time': '1690648382532',
      'ext.intweb.msfpc':'GUID%3D3e18170608174b36bc7705f918e88700%26HASH%3D3e18%26LV%3D202307%26V%3D4%26LU%3D1690467520734',
      w:'0',
      anoncknm: 'anon',
      NoResponseBody: false
    }),
    headers: {
      'Content-type': 'application/x-json-stream; charset=UTF-8',
    }
  }).then((response) => {
    // 1. check response.ok
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response); // 2. reject instead of throw
  })
  .catch((response) => {
    console.log(response.status, response.statusText);
    // 3. get error messages, if any
    response.json().then((json) => {
      console.log('json:', json);
    })
  });
}

export default async function Blog() {

  const statisticsData = await getStatisticsData();
  const gamesData = await getGamesData();
  const liveStatData = await getLiveData();

  console.log('jsonData', liveStatData);
  const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    // More posts...
  ]
  // const blogPosts = useSelector((state) => state.blog.blogPosts);

  return (<>
    <div className="py-24 sm:py-32">
      <Header />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The latest Next.js news</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between p-3 rounded-lg border border-gray-200">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
    <div>
      Data set
    </div>
  </>);
};