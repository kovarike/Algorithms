"use server";
import React from "react";
import { Avatar } from "@/components/avatar";
import { Container } from "@/components/container";
import { ContainerFull } from "@/components/containerfull";
import { Header } from "@/components/header";
import { Link } from "@/components/link";
import { Text } from "./text";
import { Img } from "@/components/img";
import { ProfileInf } from "./profileinf";
import { Translate } from "@/components/translate";


export default async function Profile() {
  const { profile, social_media, src } = await ProfileInf();

  return (
    <>
      <ContainerFull>
        <Header />
        <Container>
          <div className="flex items-center border-b border-slate-500 py-1">
            <Avatar alt="Danilo" border size="Xlarge" src={profile.src} />
            <div className="text-center mx-auto space-y-4 max-w-auto w-auto">
              <h2 className="text-3xl font-semibold font-algorithms-font">
                Danilo Silva
              </h2>
              <h2 className="text-gray-600 font-algorithms-font font-medium text-xl">
                Computer Engineer
              </h2>
            </div>
            <Translate />
          </div>
          <div className=" flex items-center mx-auto mt-2 overflow-hidden">
            <Text />
          </div>
          <h3 className=" my-4 text-xl font-semibold font-algorithms-font mt-1">
            Social media
          </h3>
          <div className="flex items-center justify-center space-y-2 mx-auto mb-4">
            <Link href="https://www.linkedin.com/in/danilokovarike/">
              <Img src={social_media.linkedin} alt="linkedin" />
            </Link>

            <Link href="https://www.github.com/kovarike/">
              <Img src={social_media.github} alt="gitub" />
            </Link>
            <Link href="https://www.instagram.com/usdanilo/">
              <Img src={social_media.whatsapp} alt="whatsapp" />
            </Link>

            <Link href="https://www.instagram.com/usdanilo/">
              <Img src={social_media.instagram} alt="intagram" />
            </Link>
            <Link href="https://www.github.com/kovarike/">
              <Img src={social_media.email} alt="email" />
            </Link>
          </div>

          <div className="mx-auto mt-2 overflow-hidden space-x-1 border-b border-slate-500">
            <div className="flex items-center justify-center mb-4">
              <Img src={profile.github} alt="github" />
            </div>

            {/* <div className=" flex mb-4 items-center justify-center mx-auto mt-2 overflow-hidden space-x-1 overflow-x-scroll px-5">
              <Img src={src.js} height={24} width={60} alt="img" />
              <Img src={src.ts} height={24} width={60} alt="img" />
              <Img src={src.c} height={24} width={60} alt="img" />
              <Img src={src.node} height={24} width={60} alt="img" />
              <Img src={src.express} height={24} width={60} alt="img" />
              <Img src={src.react} height={24} width={60} alt="img" />
              <Img src={src.pg} height={24} width={60} alt="img" />
              <Img src={src.m_db} height={24} width={60} alt="img" />
              <Img src={src.npm} height={24} width={60} alt="img" />
              <Img src={src.github} height={24} width={60} alt="img" />
            </div> */}
          </div>
        </Container>
      </ContainerFull>
    </>
  );
}
