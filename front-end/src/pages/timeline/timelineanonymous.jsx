import SmallPost from "../../components/postcard-attitues/smallpostcard";
import Layout from "../../components/layout/layout";
import PostCard from "../../components/postcard-attitues/postcard";

export default function TimelineAnonymous() {
  return (
        <Layout>
          <PostCard>
            <SmallPost type ="anonymous"/>
          </PostCard>

        </Layout>
  );
}
