import Layout from "../components/layout/layout";
import Navbar from "../components/navbar/navbar";
import Event from "../components/event/event";
import client from "../lib/sanity-config";
import * as moment from 'moment';

export default function Events(props) {
    let eventList = () => {
        if(props.events.length > 0) {
            return props.events.sort((a, b) => {
                if (moment(a.date).isAfter(b.date)) {
                    return -1;
                } else {
                    return 1;
                }
            }).map((res, index) =>
                <div className='eventCard'>
                    <Event event={res} key={index}/>
                </div>
            );
        } else {
            return (
                <div className='eventMissing'>
                    <h2>No events right now, check back later!</h2>
                </div>
            );
        }
    };

    return (
            <Layout>
                <Navbar/>
                <div className='eventsMain'>
                    <div>
                        {eventList()}
                    </div>
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
            data = res.map(val => {
                val.date = formatDate(val.date);
                return val;
            });
    });

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { events : data }
    }
}
