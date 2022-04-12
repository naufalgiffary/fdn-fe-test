import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import EditorChoice from "../components/section/editor-choice";
import Topframe from "../components/topframe";
import styles from "../styles/Home.module.css";

export default function Home({ allData }) {
  console.log(allData);
  return (
    <div className={styles.container}>
      <Head>
        <title>Naufal Algiffary - FDN Front End Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <Topframe />

        <Banner text="Billboard 970x250" />

        <EditorChoice data={allData["editor's choice"]} />

        <Banner
          text="Horizontal 970x250"
          secondText="(Internal campaign only)"
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp"
  );

  const allData = await res.json();

  return {
    props: {
      allData,
    },
  };
};
