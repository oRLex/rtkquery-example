import React from 'react';
import {useGetUsersQuery} from "./api";
import {useNavigate} from "react-router-dom";

const Users = () => {
  const {data} =  useGetUsersQuery()
  const navigate = useNavigate()
  return (
    <div>
      {data?.map(i=><div key={i?.id}>
        <p>{i.username}</p>
        <button onClick={()=> navigate(`posts?userId=${i.id}`)}>posts</button>
        <button onClick={()=> navigate(`album?userId=${i.id}`)}>album</button>
      </div>)}
    </div>
  );
};

export default Users;