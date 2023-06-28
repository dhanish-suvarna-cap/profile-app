import Card from "./Card";

const MyProfile = ({ post }) => {
  return <>{post && <Card post={post} />}</>;
};

export default MyProfile;
