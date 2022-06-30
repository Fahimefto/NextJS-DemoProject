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
    props: { donor: data1 },
  };
};

const Details = ({ donor }) => {
  return (
    <div>
      <h2>Details of this Donor</h2>
      <h2>{donor.name}</h2>
      <h5>Email : {donor.email}</h5>
      <h5>website : {donor.website}</h5>
      <h5>City : {donor.address.city}</h5>
    </div>
  );
};

export default Details;
