import { Container } from "@/components/container";
import { ContainerFull } from "@/components/containerfull";
import { Doilog } from "@/components/dailog";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Login } from "@/components/login";


export default function PageAdmin() {
  return (
    <>
      <ContainerFull>
        <Header />
        <Container>
          <h2 className="text-center">Administração</h2>
          <form action="#" className="mx-auto flex items-center flex-col">
            <input className="w-60 p-2 my-2 mx-0 rounded-md border-[1px] border-[#ccc]" type="text" name="postTitle" placeholder="Título do Post" required />
            <textarea className="w-full p-2 my-2 mx-0 rounded-md border-[1px] border-[#ccc] resize-none" name="postContent" rows={10} placeholder="Conteúdo do Post" required></textarea>
            <button className="w-20 p-2 text-gray-600 bg-algorithms-color/20 hover:bg-algorithms-color/45 rounded-md text-center cursor-pointer" type="submit">Publicar</button>
          </form>

        </Container>
        <Doilog>
          <Login />
        </Doilog>
        <Footer />
      </ContainerFull>
    </>
  );
}
