"use server";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Avatar } from "@/components/avatar";
import { ContainerFull } from "@/components/containerfull";
import { Header } from "@/components/header";
import { Link } from "@/components/link";
import { Text } from "./text";
import { Img } from "@/components/img";
import { ProfileInf } from "./profileinf";
import { Translate } from "@/components/translate";
import { Footer } from "@/components/footer";

export default async function Profile() {
  const { profile, social_media } = ProfileInf();
  const id = uuidv4();


  return (
    <>
      <ContainerFull>
        <Header />
        <div className="my-0 mx-auto mx-full p-6 bg-white text-slate-800" >
          <div className="bg-white mx-auto" id={id}>
            <div
              className="flex items-center border-b border-slate-500 py-1"
            >
              <Avatar alt="Danilo" border size="large" src={profile.src} />
              <div className="text-center mx-auto space-y-4 w-auto max-w-auto">
                <h2 className="text-3xl sm:text-base md:text-base font-semibold font-algorithms-font">
                  Danilo Silva
                </h2>

                <h2 className="text-gray-600 text-xl sm:text-base md:text-base font-algorithms-font font-medium ">
                  Computer Engineer
                </h2>
              </div>
              <Translate id={id} />
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
          </div>


          <div className="mx-auto mt-2 overflow-hidden space-x-1 border-b border-slate-500">
            <div className="flex items-center justify-center mb-4">
              <Img src={profile.github} alt="github" />
            </div>
          </div>
        </div>
        <Footer />
      </ContainerFull>
    </>
  );
}
