import cookie from "cookie" ;


const handler = (req, res) => {
        if(req.method === POST) {
            const { username, password} = req.body;

            if(
                username === process.emv.ADMIN_USERNAME && 
                password === process.env.ADMIN_PASSWORD
            )   {
                res.setHeader(
                    "Set-Cookie", 
                    cookie.serialize("token", process.emv.TOKEN, {
                        maxAge: 60 * 60,
                        sameSite: "strict",
                        path: "/",
                        //httpOnly: true
                    }
                )
            );
            res.status(200).json("Sucessfull");
        } else {
            res.status(400).json("Wrong Credential");
        }

    }
}



export default handler ;