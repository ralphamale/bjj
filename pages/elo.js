import Head from "next/head";
import PropTypes from "prop-types";
import Layout from "components/Layout";
import updateElo from "lib/updateElo";

export default function ELO(props) {
  return (
    <Layout>
      <Head>
        <title>BJJ ELO Rating</title>
        <meta
          name="description"
          content="ELO ratings for black belt bjj competitors. Data sourced from BJJHeroes. Utilizes FIDE 400 calculation"
        />
        <meta
          name="og:description"
          content="ELO ratings for black belt bjj competitors. Data sourced from BJJHeroes. Utilizes FIDE 400 calculation"
        />
        <meta name="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {props.competitors.map((competitor, index) => {
          return (
            <div key={index}>
              <span>{competitor.name}</span>
              <span>ELO: {Math.round(competitor.elo)}</span>
            </div>
          );
        })}
      </main>
    </Layout>
  );
}

ELO.propTypes = {
  competitors: PropTypes.array.isRequired,
};

export async function getStaticProps(context) {
  // setup a db instead of loading a csv file
  const CSVToJSON = require("csvtojson");
  const path = require("path");
  const postsDirectory = path.join(process.cwd(), "public");
  const filePath = path.join(postsDirectory, "bjjheroes.csv");

  // player map, keyed by name
  let competitor = {};
  const roundMapOrder = {
    F: 0,
    SPF: 0,
    SF: 1,
    "4F": 2,
    R2: 98,
    R1: 99,
  };

  try {
    const data = await CSVToJSON().fromFile(filePath);
    //naively sorted by year right now
    // need to account for fights counted twice
    data
      .filter((x) => x.winLoss === "W")
      .sort((a, b) => {
        return a.year - b.year;
      });
    data.forEach((fight) => {
      const name = fight.name;
      if (!competitor[name]) {
        competitor[name] = {
          name,
          wins: 0,
          loses: 0,
          elo: 0,
        };
      }
      // when opponent2 !== null it means there's a profile for that fighter
      const opponent =
        fight.opponent2 == "null" ? fight.opponent1 : fight.opponent2;
      if (!competitor[opponent]) {
        competitor[opponent] = {
          name: opponent,
          wins: 0,
          loses: 0,
          elo: 0,
        };
      }
      const winner = competitor[name];
      const loser = competitor[opponent];
      updateElo(winner, loser);
    });
  } catch (err) {
    console.error(err);
  }
  return {
    props: {
      competitors: Object.values(competitor).sort((a, b) => b.elo - a.elo),
    }, // will be passed to the page component as props
  };
}
