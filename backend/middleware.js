import jwt from 'jsonwebtoken';

export default function auth(req, res, next){
    try {
        // console.log("req for auth : ", req.headers.authorization);
        let token = req.headers.authorization;

        if(token){
            token = token.split(" ")[1];

            // console.log("token after splitting = ", token);

            let user = jwt.verify(token, process.env.JWT_SECRET);

            req.emailId = user.emailId;
            req.password = user.password;
        }else{
            return res.status(403).json({
                message : "User is unauthorised :(",
            });
        }

        next();

    } catch (error) {
        console.log("error encountered during auth : ", error);
        return res.status(403).json({
            message : "User is unauthorised :(",
        });
    }
};