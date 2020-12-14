import { getFaqData } from "./api/data";

export async function getStaticProps() {
  const allData = await getFaqData();
  return {
    props: {
      allData,
    },
  };
}

export default function Faq({ allData }) {
  return (
    <div className="wrap">
      <h1>{allData}</h1>
    </div>
  );
}
