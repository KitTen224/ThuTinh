import Layout from "../../components/layout/layout";
import PostCardDiary from "../../components/postcard-attitues/postcarddiary";
import diaryData from "../../components/data/datamock";
import PostCard from "../../components/postcard-attitues/postcard";

export default function TimelineDiary() {
  return (
        <Layout>
          <PostCard>
            <section className="diary-page">
              {diaryData.map((entry) => (
                <PostCardDiary key={entry.id} entry={entry} />
              ))}
            </section>
          </PostCard>
        </Layout>
  );
}
