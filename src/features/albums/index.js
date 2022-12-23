import {useSearchParams} from "react-router-dom";
import {useGetAlbumQuery} from "./api";

const Album = () => {
  const [searchParams] = useSearchParams()
  const {data} = useGetAlbumQuery(searchParams.toString())


  return (
    <div>
      {data?.map(item => {
        return (
          <div key={item.id}>
            <h2>{item?.userId}</h2>
            <p>{item.title}</p>
          </div>
        )
      })}

    </div>
  );
};

export default Album;