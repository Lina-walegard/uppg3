import { getAboutData } from "./api/data";

export async function getStaticProps() {
  const allData = await getAboutData();
  return {
    props: {
      allData,
    },
  };
}

export default function About({ allData }) {
  return (
    <div className="wrap">
      <h1>{allData}</h1>
    </div>
  );
}
