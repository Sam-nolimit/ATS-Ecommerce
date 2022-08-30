import { Container } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children, title, categories}) => (
  <Box>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container maxW="container.xl" px="6">
      <Navbar categories={categories}/>
      {children}
      <Footer />
    </Container>
  </Box>
);

export default Layout;
