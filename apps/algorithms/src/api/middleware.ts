// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

const secret = process.env.JWT_SECRET || uuidv4(); // Gera um UUID se o segredo não for definido

export function middleware(req: NextRequest) {
  const token = req.cookies.get('auth-token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    jwt.verify(token, secret);
    return NextResponse.next(); // Usuário autenticado, permite continuar
  } catch (error) {
    return NextResponse.redirect(new URL('/login', req.url)); // Redireciona se o JWT for inválido
  }
}

export const config = {
  matcher: '/admin/:path*', // Aplica a middleware apenas em rotas que começam com /admin
};
