import Head from "next/head";
import PropTypes from "prop-types";
import Chart from "components/Chart";
import Layout from "components/Layout";

export default function Home(props) {
  return (
    <Layout>
      <Head>
        <title>IBJJF Competition Data</title>
        <meta
          name="description"
          content="ibjjf competition data, broken down into school results at each belt level"
        />
        <meta
          name="og:description"
          content="ibjjf competition data, broken down into school results at each belt level"
        />
        <meta name="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {Object.values(props.data).map((year) =>
          year.map((tournament, index) => <Chart key={index} {...tournament} />)
        )}
      </main>
    </Layout>
  );
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
};

export async function getStaticProps(context) {
  const fs = require("fs");
  const path = require("path");
  const postsDirectory = path.join(process.cwd(), "public");
  const filePath = path.join(postsDirectory, "results.json");
  const res = fs.readFileSync(filePath);
  const data = JSON.parse(res);

  return {
    props: { data }, // will be passed to the page component as props
  };
}
