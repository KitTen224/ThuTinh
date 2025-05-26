import Layout from "../components/main/layout";
import WriteCard from "../components/main/writecard";
import PostTypeController from "../components/main/posttypecontroller";
import "../index.css";

function WriteNormal() {
  return (
    <Layout>
          <PostTypeController type="normal"/>
          <WriteCard type="normal" />
    </Layout>
  );
}

export default WriteNormal;