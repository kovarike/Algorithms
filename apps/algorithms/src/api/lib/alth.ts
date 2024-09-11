// "use setver"
// import { IncomingMessage } from 'http';
// import { NextApiRequest, NextApiResponse } from 'next';
// import cookies from 'next-cookies';
// import jwt, { JwtPayload } from 'jsonwebtoken';
// import { v4 as uuidv4 } from 'uuid';

// const secret = process.env.JWT_SECRET || uuidv4(); // Gerando UUID se não houver segredo no .env

// interface AuthPayload extends JwtPayload {
//     userId: string;
//     email: string;
// }


// export const isAuthenticated = (req: IncomingMessage): AuthPayload | null => {
//     const allCookies = cookies({ req });  // Usa next-cookies para obter todos os cookies
//     const token = allCookies['auth-token']

//     if (!token) return null;

//     try {
//         return jwt.verify(token, secret) as AuthPayload;
//     } catch (error) {
//         console.error('JWT verification failed:', error);
//         return null;
//     }
// };




import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

const secret = process.env.JWT_SECRET || uuidv4();

interface AuthPayload {
    userId: string;
    email: string;
}

export const login = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password } = req.body;

    if (email === 'admin@example.com' && password === 'password123') {
        const token = jwt.sign({ email, userId: '1' }, secret, { expiresIn: '1h' });
        res.setHeader('Set-Cookie', `auth-token=${token}; Path=/; HttpOnly`);
        return res.status(200).json({ success: true });
    } else {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
};

export const isAuthenticated = (req: NextApiRequest): AuthPayload | null => {
    const token = req.cookies['auth-token'];
    if (!token) return null;

    try {
        return jwt.verify(token, secret) as AuthPayload;
    } catch (error) {
        console.error('Invalid token:', error);
        return null;
    }
};

