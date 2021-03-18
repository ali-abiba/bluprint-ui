import Layout from "../components/layout/layout";
import Navbar from "../components/navbar/navbar";
import Event from "../components/event/event";
import client from "../lib/sanity-config";
import * as moment from 'moment';

export default function Events(props) {

    return (
            <Layout>
                <Navbar/>
                <div className='eventsMain'>
                {props.events.sort((a,b) => {
                    if(moment(a.date).isAfter(b.date)) {
                        return -1;
                    } else {
                        return 1;
                    }
                }).map((res,index) =>
                    <div className='eventCard'>
                        <Event event={res} key={index}/>
                    </div>
                )}
                </div>
            </Layout>
    )
}

function formatDate(date) {
    date = date.replace('T', ' ');
    date = date.replace('z', '');
    return date;
}

export async function getStaticProps(context) {
    let data;
    await client.fetch("*").then(res => {
        data = res.events.map(val => {
            val.date = formatDate(val.date);
            return val;
        });
    });

    return {
        props: { events : data }
    }
}
