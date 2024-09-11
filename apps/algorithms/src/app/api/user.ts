import type { NextApiRequest, NextApiResponse } from 'next';
import { isAuthenticated } from '@/api/lib/alth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const user = isAuthenticated(req);

    if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    return res.status(200).json({ user });
}