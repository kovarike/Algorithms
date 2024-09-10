import { Container } from "./container";



export function Login() {
    return (
        <Container>
            <div className="flex flex-col items-center space-y-5 mx-auto" >
                <h2 className="text-center font-algorithms-font font-semibold text-lg">Login</h2>
                <form action="#" className="mx-auto flex items-center flex-col space-y-5">
                    <input className="w-60 p-2 my-2 mx-0 rounded-md border-[1px] border-[#ccc]" type="text" name="id" placeholder="Id" required />
                    <input className="w-60 p-2 my-2 mx-0 rounded-md border-[1px] border-[#ccc]" type="password" name="password" placeholder="Password" required />
                    <button className="w-20 p-2 text-gray-600 bg-algorithms-color/20 hover:bg-algorithms-color/45 rounded-md text-center cursor-pointer" type="submit">Entrar</button>
                </form>
            </div>
        </Container>
    );
}