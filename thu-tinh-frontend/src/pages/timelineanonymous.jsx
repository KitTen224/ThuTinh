import SmallPost from "../components/attitues/smallpostcard";
import Layout from "../components/main/layout";
import PostCard from "../components/main/postcard";
import "../index.css";

export default function TimelineAnonymous() {
  return (
        <Layout>
          <PostCard>
            <SmallPost type ="anonymous"/>
          </PostCard>

        </Layout>
  );
}
