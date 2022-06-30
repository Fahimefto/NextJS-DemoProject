import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title> Demo | Home</title>
        <meta name="keywords" content="donations" />
      </Head>
      <div>
        <h1>Homepage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          labore nulla tempore eius iure cum perferendis nostrum, sequi id quae
          blanditiis ab sit similique alias, repellendus magni maxime adipisci
          harum. Deserunt placeat repellat explicabo quae? Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Dolorum labore nulla tempore eius
          iure cum perferendis nostrum, sequi id quae blanditiis ab sit
          similique alias, repellendus magni maxime adipisci harum. Deserunt
          placeat repellat explicabo quae? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Dolorum labore nulla tempore eius iure
          cum perferendis nostrum, sequi id quae blanditiis ab sit similique
          alias, repellendus magni maxime adipisci harum. Deserunt placeat
          repellat explicabo quae?
        </p>
      </div>
    </>
  );
}
