// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

const secret = process.env.JWT_SECRET || 'seu-segredo-super-seguro';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { id, password } = req.body;

        // Validação simples (substitua com sua lógica de autenticação)
        if (id === 'admin@admin.com' && password === '123456') {
            // Gerar um token JWT
            const token = jwt.sign({ id }, secret, { expiresIn: '1h' });

            // Configurar o token nos cookies
            res.setHeader(
                'Set-Cookie',
                cookie.serialize('auth-token', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    maxAge: 3600,
                    sameSite: 'strict',
                    path: '/',
                })
            );

            return res.status(200).json({ message: 'Login successful' });
        }

        return res.status(401).json({ message: 'Invalid credentials' });
    }

    return res.status(405).json({ message: 'Method not allowed' });
}
