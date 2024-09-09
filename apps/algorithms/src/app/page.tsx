import { ContainerFull } from "@/components/containerfull";
import { Header } from "@/components/header";
import { Link } from "@/components/link";
import { Loading } from "@/components/loading";
import { Post } from "@/components/post";
import { Search } from "@/components/search";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <>
      <ContainerFull>
        <Header>
          <Link href="https://github.com/kovarike" name="GitHub" />
        </Header>
        <Search />
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
        <Loading layoutId="1" messagem="Carregando..." />
      </ContainerFull>
      <Toaster />
    </>
  );
}
