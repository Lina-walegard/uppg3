import { getContactData } from "./api/data";

export async function getStaticProps() {
  const allData = await getContactData();
  return {
    props: {
      allData,
    },
  };
}

export default function Contact({ allData }) {
  return (
    <div className="wrap">
      <h1>{allData}</h1>
    </div>
  );
}
