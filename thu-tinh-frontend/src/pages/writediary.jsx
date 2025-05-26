import Layout from "../components/main/layout";
import PostTypeController from "../components/main/posttypecontroller";
import "../index.css";
import WriteCardDiary from "../components/main/writecarddiary";

function WriteDiary() {
  return (
    <Layout>
          <PostTypeController type="diary"/>
          <WriteCardDiary/>
    </Layout>
  );
}

export default WriteDiary;