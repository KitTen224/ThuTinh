import Layout from "../components/main/layout";
import WriteCard from "../components/main/writecard";
import PostTypeController from "../components/main/posttypecontroller";
import "../index.css";

function WriteAnonymous() {
  return (
    <Layout>
          <PostTypeController type="anonymous"/>
          <WriteCard type="anonymous" />
    </Layout>
  );
}

export default WriteAnonymous;