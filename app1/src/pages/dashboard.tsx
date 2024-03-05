import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import React from "react";

type Props = {
  name: String;
};

function Dashboard({ name }: Props) {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero">
        <h1>{`Dashboard Page by ${name}`}</h1>
        <h3 className="title">
          This is a federated page owned by localhost:3001
        </h3>
      </div>
    </>
  );
}
Dashboard.getServerSideProps = async () => {
  return {
    props: { name: "mohammad" },
  };
};
export default Dashboard;
