// import { GetServerSideProps } from 'next';

// import { Container } from "@/components/container";
// import { ContainerFull } from "@/components/containerfull";
// import { Footer } from "@/components/footer";
// import { Header } from "@/components/header";
// import { isAuthenticated } from '@/api/lib/alth';



// export default function PageAdmin() {
//   return (
//     <>
//       <ContainerFull>
//         <Header />
//         <Container>
//           <h2 className="text-center">Administração</h2>
//           <form action="#" className="mx-auto flex items-center flex-col">
//             <input className="w-60 p-2 my-2 mx-0 rounded-md border-[1px] border-[#ccc]" type="text" name="postTitle" placeholder="Título do Post" required />
//             <textarea className="w-full p-2 my-2 mx-0 rounded-md border-[1px] border-[#ccc] resize-none" name="postContent" rows={10} placeholder="Conteúdo do Post" required></textarea>
//             <button className="w-20 p-2 text-gray-600 bg-algorithms-color/20 hover:bg-algorithms-color/45 rounded-md text-center cursor-pointer" type="submit">Publicar</button>
//           </form>

//         </Container>
//         <Footer />
//       </ContainerFull>
//     </>
//   );
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const user = isAuthenticated(context.req);

//   if (!user) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };


// src/app/admin/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Para redirecionar no App Router
import cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

export default function PageAdmin() {
  const router = useRouter();

  useEffect(() => {
    const token = String(cookies.get('auth-token'));
    const secret = process.env.NEXT_PUBLIC_JWT_SECRET || 'default-secret';

    if (!token) {
      router.push('/login');
    }

    try {
      jwt.verify(token, secret);
    } catch (error) {
      console.error('Invalid token, redirecting...');
      router.push('/login');
    }
  }, [router]);

  return (
    <>
      <h2 className="text-center">Administração</h2>
      <form action="#" className="mx-auto flex items-center flex-col">
        <input className="w-60 p-2 my-2 mx-0 rounded-md border-[1px] border-[#ccc]" type="text" name="postTitle" placeholder="Título do Post" required />
        <textarea className="w-full p-2 my-2 mx-0 rounded-md border-[1px] border-[#ccc] resize-none" name="postContent" rows={10} placeholder="Conteúdo do Post" required></textarea>
        <button className="w-20 p-2 text-gray-600 bg-algorithms-color/20 hover:bg-algorithms-color/45 rounded-md text-center cursor-pointer" type="submit">Publicar</button>
      </form>
    </>
  );
}
