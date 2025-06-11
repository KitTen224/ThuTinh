import Layout from "../../components/layout/layout";
import WriteCard from "../../components/writecard-attitues/writecard";
import PostTypeController from "../../components/typeorselectbar/posttypecontroller";


function WriteNormal() {
  return (
    <Layout>
          <PostTypeController type="normal"/>
          <WriteCard type="normal" />
    </Layout>
  );
}

export default WriteNormal;