import Layout from "../../components/layout/layout";
import WriteCard from "../../components/writecard-attitues/writecard";
import PostTypeController from "../../components/typeorselectbar/posttypecontroller";


function WriteAnonymous() {
  return (
    <Layout>
          <PostTypeController type="anonymous"/>
          <WriteCard type="anonymous" />
    </Layout>
  );
}

export default WriteAnonymous;