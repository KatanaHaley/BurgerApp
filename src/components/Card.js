import React from 'react';

const Card = (data) => {

    console.log(data)

  return (
    <>
      {/* <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>
           */}
    <div className="card">
        <h2>{data.data.name}</h2>
        <h3>{data.data.description}</h3>
        <p>{data.data.location.address} {data.data.zipcode}</p>
        <a href={data.data.location.url}><p>{data.data.location.url}</p></a>
        <p>{data.data.ingredients}</p>
        {data.data.visited && <div className="visited" ></div>}
        {!data.data.visited && <div className="not-visited"></div>}

       

    </div>
    </>
  )
}

export default Card