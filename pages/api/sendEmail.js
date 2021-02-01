import Cors from 'cors'
import initMiddleware from "../../lib/init-middleware";

const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST', 'OPTIONS']
    })
);

export default async (req,res) => {
    await cors(req, res);
    if(req.method === 'POST') {
        const message = `New Submission:\n
        Name: ${req.body.name}\n
        Email: ${req.body.email}\n
        Phone: ${req.body.phone}\n
        Social: ${req.body.social}\n
        Mediums: ${req.body.mediums.join(', ')}\n
        Art Style: ${req.body.artStyle}`;
        fetch(`${process.env.mailHandleUrl}/mail/send-email`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWxpLmFiaWJhIiwicGFzcyI6ImJsdXByaW50In0.mFN-Uu0RbaIvYDYOn_Hy_kjRp25B-bENIsh90ROOg8g'
            },
            body: JSON.stringify({
                email: {
                    to:  req.body.to,
                    subject: req.body.subject,
                    text: message
                }
            })
        }).then( (response ) => {
            if(response.ok) {
                res.status(200).send('OK');
            }else {
                res.status(500).send(response);
            }
        }).catch((error) => {
            res.status(500).send(error);
        });
    }
    res.status(200).send('OK');


}
