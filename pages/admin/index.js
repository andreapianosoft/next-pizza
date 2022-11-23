import dbConnect from '../../../utilities/mongo.js';
import User from '../../../models/User';
import bcrypt from 'bcrypt';
import { accessToken } from '../../../utilities/auth.js';
import { setCookies, removeCookies } from 'cookies-next';

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    if (method == 'POST') {
        let data = req.body;

        const isPresent = await User.find({ email: data.email });

        const user = isPresent.length ? isPresent[0] : null;

        if (user) {
            removeCookies();

            const doesPasswordMatch = bcrypt.compareSync(
                data.password,
                user.password
            );

            if (doesPasswordMatch) {
                const checkToken = await accessToken(user);

                const { status, message } = checkToken;

                if (status == 200) {
                    setCookies('token', 'tkn' + checkToken.token + 'tkn', {
                        req,
                        res,
                        maxAge: 60 * 6 * 24,
                    });
                    res.status(200).json(checkToken);
                } else {
                    removeCookies('token', { req, res });
                    res.status(status).json({
                        status: status,
                        success: false,
                        message: message,
                    });
                }
            } else {
                removeCookies('token', { req, res });
                res.status(401).json({
                    status: 401,
                    success: false,
                    message: 'Wrong password',
                });
            }
        } else {
            removeCookies('token', { req, res });
            res.status(404).json({
                status: 404,
                success: false,
                message: 'User not found',
            });
        }
    }
}
