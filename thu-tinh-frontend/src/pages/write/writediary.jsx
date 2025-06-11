import Layout from "../../components/layout/layout";
import PostTypeController from "../../components/typeorselectbar/posttypecontroller";
import WriteCardDiary from "../../components/writecard-attitues/writecarddiary";

function WriteDiary() {
  return (
    <Layout>
          <PostTypeController type="diary"/>
          <WriteCardDiary type="diary"/>
    </Layout>
  );
}

export default WriteDiary;