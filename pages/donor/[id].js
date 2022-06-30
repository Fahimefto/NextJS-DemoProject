export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((donor) => {
    return {
      params: { id: donor.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data1 = await res.json();

  return {
    props: { donors: data1 },
  };
};

const Details = ({ donors }) => {
  return (
    <div>
      <h2>Details of this Donors</h2>
      <h2>{donors.name}</h2>
      <h5>Email : {donors.email}</h5>
      <h5>website : {donors.website}</h5>
      <h5>City : {donors.address.city}</h5>
    </div>
  );
};

export default Details;
