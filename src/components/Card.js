import React from 'react';

const Card = (data) => {

    console.log(data)

  return (
    <div className="card">
        <h2>{data.data.name}</h2>
        <h3>{data.data.description}</h3>
        <p>{data.data.location.address} {data.data.zipcode}</p>
        <a href={data.data.location.url}><p>{data.data.location.url}</p></a>
        <p>{data.data.ingredients}</p>
        {data.data.visited && <div className="visited" ></div>}
        {!data.data.visited && <div className="not-visited"></div>}

       

    </div>
  )
}

export default Card