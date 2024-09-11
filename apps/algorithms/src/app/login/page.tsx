"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Doilog } from "@/components/dailog";
import { Container } from "@/components/container";

interface DataProps extends FormData {
    id: string,
    password: string
}


export default function Home() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (data: DataProps) => {
        setId(data.id)
        setPassword(data.password)

        const response = await fetch('/api/routers/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, password }),
        });

        if (response.ok) {
            router.push('/admin'); // Redireciona para a página de admin após o login bem-sucedido.
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <Doilog>
            <Container>
                <div className="flex flex-col items-center space-y-5 mx-auto" >
                    <h2 className="text-center font-algorithms-font font-semibold text-lg">Login</h2>
                    <form action="#" className="mx-auto flex items-center flex-col space-y-5" >
                        <input className="w-60 p-2 my-2 mx-0 rounded-md border-[1px] border-[#ccc]" type="text" name="id" placeholder="Id" required />
                        <input className="w-60 p-2 my-2 mx-0 rounded-md border-[1px] border-[#ccc]" type="password" name="password" placeholder="Password" required />
                        <button className="w-20 p-2 text-gray-600 bg-algorithms-color/20 hover:bg-algorithms-color/45 rounded-md text-center cursor-pointer" type="submit">Entrar</button>
                    </form>
                </div>
            </Container>
        </Doilog>
    )
}