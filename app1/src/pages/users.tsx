import UserPageContent from "@/core/presentation/components/pages/UsetPageContent";
import Head from "next/head";
import React from "react";

function Users() {
  return (
    <>
      <Head>
        <title>Users</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UserPageContent />
    </>
  );
}
export default Users;
