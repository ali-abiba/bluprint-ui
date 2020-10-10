import Cors from 'cors'
import initMiddleware from "../../lib/init-middleware";
import mailchimp from "@mailchimp/mailchimp_marketing";


const listId = 'ea4fcba7a2';
mailchimp.setConfig({
    // apiKey: process.env.MAILCHIMP_API_KEY,
    // server: process.env.MAILCHIMP_SERVER,
    apiKey: 'f758f2eb9d30a18083aa7bef2a9a1807-us2',
    server: 'us2'
});

const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST', 'OPTIONS']
    })
);

export default async (req,res) => {
    await cors(req, res);
    if(req.method === 'POST') {
        const response = await mailchimp.lists.addListMember(listId, {
            email_address: req.body.email,
            status: "subscribed",
            merge_fields: {
                FNAME: req.body.firstName,
                LNAME: req.body.lastName
            }
        });
        res.status(200).send(response);

    }

}
