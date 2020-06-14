import Head from "next/head";
import Chart from "components/Chart";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>IBJJF Meta Data</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {Object.values(props.data).map((year) =>
          year.map((tournament, index) => <Chart key={index} {...tournament} />)
        )}
      </main>
    </div>
  );
}

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
