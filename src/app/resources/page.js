import Head from 'next/head';

export default function Resources() {
  return (
    <>
      <Head>
        <title>Resources | babyMD</title>
      </Head>
      <main className="bg-white min-h-screen p-4">
        <div className="max-w-md mx-auto space-y-6">

          {/* FEATURED SECTION */}
          <div className="space-y-2">
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
              Featured Image
            </div>
            <span className="inline-block bg-gray-100 text-xs text-gray-700 px-3 py-1 rounded-full w-fit">
              FEATURED
            </span>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy dolor sit
            </p>

            <h2 className="font-bold text-lg text-gray-900">
              Raising tiny humans?{' '}
              <span className="text-[#5d3fd3] italic">Read on</span>
            </h2>
            <p className="text-sm text-gray-700">
              From baby burps to big feelings (yours and theirs), we’ve got the advice, reassurance,
              and “oh-so-that’s-normal” moments covered. Browse by topic, and find your calm in the chaos.
            </p>
          </div>

          {/* RESOURCES HEADER */}
                <div className="flex items-center justify-between mb-4">
  <h2 className="text-2xl font-bold text-gray-900">Resources</h2>
  
  <div className="flex items-center space-x-4">
    {/* Search Icon */}
    <button aria-label="Search">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>

    {/* Filter Icon */}
    <button aria-label="Filter">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
        />
      </svg>
    </button>
  </div>
</div>






          {/* BLOG CARD 1 */}
          <div className="bg-white rounded-xl shadow border p-3 space-y-3">
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
              Image 1
            </div>
            <div className="flex gap-2 text-xs text-gray-500">
              <span >BLOG</span>
              <span>|</span>
              <span>5 MINS READ</span>
            </div>
            <h4 className="font-semibold text-gray-900">Lorem ipsum dolor sit am</h4>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit
            </p>
            <button className="bg-orange-600 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2 mt-">
              EXPLORE MORE <span>▶</span>
            </button>
          </div>

          {/* BLOG CARD 2 */}
          <div className="bg-white rounded-xl shadow border p-3 space-y-3">
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
              Image 2
            </div>
            <div className="flex gap-2 text-xs text-gray-500">
              <span>BLOG</span>
              <span>|</span>
              <span>5 MINS READ</span>
            </div>
            <h4 className="font-semibold text-gray-900">Lorem ipsum dolor sit am</h4>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit
            </p>
            <button className="bg-orange-600 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2 mt-2">
              EXPLORE MORE <span>▶</span>
            </button>
          </div>

            {/* BLOG CARD 3 */}
          <div className="bg-white rounded-xl shadow border p-3 space-y-3">
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
              Image 2
            </div>
            <div className="flex gap-2 text-xs text-gray-500">
              <span>BLOG</span>
              <span>|</span>
              <span>5 MINS READ</span>
            </div>
            <h4 className="font-semibold text-gray-900">Lorem ipsum dolor sit am</h4>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit
            </p>
            <button className="bg-orange-600 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2 mt-2">
              EXPLORE MORE <span>▶</span>
            </button>
          </div>

            {/* BLOG CARD 4 */}
          <div className="bg-white rounded-xl shadow border p-3 space-y-3">
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
              Image 2
            </div>
            <div className="flex gap-2 text-xs text-gray-500">
              <span>BLOG</span>
              <span>|</span>
              <span>5 MINS READ</span>
            </div>
            <h4 className="font-semibold text-gray-900">Lorem ipsum dolor sit am</h4>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit
            </p>
            <button className="bg-orange-600 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2 mt-2">
              EXPLORE MORE <span>▶</span>
            </button>
          </div>

            {/* BLOG CARD 5 */}
          <div className="bg-white rounded-xl shadow border p-3 space-y-3">
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
              Image 2
            </div>
            <div className="flex gap-2 text-xs text-gray-500">
              <span>BLOG</span>
              <span>|</span>
              <span>5 MINS READ</span>
            </div>
            <h4 className="font-semibold text-gray-900">Lorem ipsum dolor sit am</h4>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit
            </p>
            <button className="bg-orange-600 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2 mt-2">
              EXPLORE MORE <span>▶</span>
            </button>
          </div>

            {/* BLOG CARD 6 */}
          <div className="bg-white rounded-xl shadow border p-3 space-y-3">
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
              Image 2
            </div>
            <div className="flex gap-2 text-xs text-gray-500">
              <span>BLOG</span>
              <span>|</span>
              <span>5 MINS READ</span>
            </div>
            <h4 className="font-semibold text-gray-900">Lorem ipsum dolor sit am</h4>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit
            </p>
            <button className="bg-orange-600 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2 mt-2">
              EXPLORE MORE <span>▶</span>
            </button>
          </div>

          {/* VIEW MORE */}
          <div className="flex justify-center pt-2">
            <button className="bg-[#5d3fd3] text-white text-sm px-6 py-2 rounded-full flex items-center gap-2">
              VIEW MORE <span>▶</span>
            </button>
          </div>

        </div>
      </main>
    </>
  );
}
