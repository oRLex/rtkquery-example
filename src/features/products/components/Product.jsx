
const Post = ({data}) => {
  return (
    <div style={{
      maxWidth: '300px',
      border: '1px solid black',
      margin: '10px'
    }}>
      <p style={{marginBottom: '10px', fontWeight: 'bold'}}>{data?.title}</p>
      <p style={{marginBottom: '10px'}}>{data?.body}</p>
      <p style={{marginBottom: '10px', fontSize: '12px'}}>{data?.user}</p>

    </div>
  );
};

export default Post;