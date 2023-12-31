import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MacbookImage from "../assets/macbook-pro-16-m1-pro-2021-xam-650x650-1.png";
import React from "react";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Image alt="image" src={MacbookImage} />

        <Button
          onClick={() => {
            router.push("/pay");
          }}
          size="lg"
          as="a"
          variant="primary"
        >
          Pay with 10 USD
        </Button>
      </main>
    </>
  );
}
