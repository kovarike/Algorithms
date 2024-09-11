// pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { login } from '@/api/lib/alth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        return await login(req, res);
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}
