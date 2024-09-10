"use client"
import { ContainerFull } from "@/components/containerfull";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Link } from "@/components/link";
import { Loading } from "@/components/loading";
import { Post } from "@/components/post";
import { Search } from "@/components/search";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <>
      <ContainerFull className="h-full" >
        <Header>
          <Link href="https://github.com/kovarike" name="GitHub" />
          <Link href="https://algorithmss.com.br/profile" name="Portfolio" />
        </Header>
        <h2 className="text-center font-algorithms-font font-bold text-2xl mt-11">Wait for new feature</h2>
        {/* <Search />
        <Post
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
          name="Danilo"
          tittle="Titulo "
          date="21/02/2000"
        />
        <Post
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
          name="Danilo"
          tittle="Titulo "
          date="21/02/2000"
        />
        <Post
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
          name="Danilo"
          tittle="Titulo "
          date="21/02/2000"
        />
        <Loading layoutId="1" messagem="Carregando..." /> */}
        <Footer />
      </ContainerFull>
      <Toaster />
    </>
  );
}
