import { GetServerSideProps, NextApiRequest } from "next";

import FirebaseAuth from "src/components/firebaseAuth";
import Layout from "src/components/layout";
import { loadIdToken } from "src/auth/firebaseAdmin";

export default function Auth() {
  return <Layout main={<FirebaseAuth />}></Layout>;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const uid = await loadIdToken(req as NextApiRequest);

  if (uid) {
    res.setHeader("location", "/");
    res.statusCode = 302;
    res.end();
  }
  return { props: {} };
};
