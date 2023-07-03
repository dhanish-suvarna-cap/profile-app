import ListCard from "../ListCard";

const MyFriends = ({ posts }) => {
  return (
    <>
      <ul className="list-wrapper">
        {posts.data.map((post) => {
          return <ListCard key={post.id} post={post} />;
        })}
      </ul>
    </>
  );
};

export default MyFriends;
