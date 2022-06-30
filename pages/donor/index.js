import Head from "next/head";
import Link from "next/link";
import classes from "../../styles/Index.module.css";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      donors: data,
    },
  };
};
const Donor = ({ donors }) => {
  return (
    <>
      <Head>
        <title> Demo | Donor-List</title>
        <meta name="keywords" content="donations" />
      </Head>
      <div>
        <h1>Donorlist</h1>
        {donors.map((donor) => (
          <Link href={"/donor/" + donor.id} key={donor.id}>
            <a className={classes.card}>
              <h4>{donor.id}</h4>
              <h4>{donor.name}</h4>
              <h5>Email : {donor.email}</h5>
              <p>Adress : {donor.address.street}</p>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Donor;
