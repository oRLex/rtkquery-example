import React from 'react';
import {useSearchParams} from 'react-router-dom'
import {useGetPostsQuery} from "./api";

const Posts = () => {
  const [searchParams] = useSearchParams()
  const {data} = useGetPostsQuery(searchParams.toString())

  return (
    <div>
      {data?.map(item=> {
        return (
          <div>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <span>USER_ID: {item.userId}</span>
          </div>
        )
      })}

    </div>
  );
};

export default Posts;