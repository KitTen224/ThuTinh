import Layout from "../components/main/layout";
import PostCardDiary from "../components/main/postcarddiary";
import diaryData from "../components/data/datamock";
import "../index.css";
import PostCard from "../components/main/postcard";

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
