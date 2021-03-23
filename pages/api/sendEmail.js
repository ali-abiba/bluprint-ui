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

        console.log(`POSTING EMAIL REQUEST FROM ${req.body.email}`);
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
                res.status(200).send('OK');
        }).catch((error) => {
            console.error('ERROR SENDING EMAIL',error);
            res.status(500).send(error);
        });
    }

}
