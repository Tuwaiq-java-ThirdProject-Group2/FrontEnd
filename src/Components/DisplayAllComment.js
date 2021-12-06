import React from 'react'

export default function DisplayAllComment(data) {
    console.log(data.data);
    return (
        <div>
            <h1>{data.data}</h1>
        </div>
    )
}
