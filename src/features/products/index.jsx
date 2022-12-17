import {useGetPostsQuery} from "./api";
import Post from "./components/Post";

const Posts = () => {
  const {data = [], isLoading, isFetching, isSuccess, isError, error} = useGetPostsQuery()

  return (
    <div>
      <h2>POSTS</h2>
      {isLoading && <p>loading</p>}
      {data.map(item=> <Post key={item.id} data={item}/>)}
    </div>
  );
};

export default Posts;