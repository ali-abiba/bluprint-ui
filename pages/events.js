import Layout from "../components/layout/layout";
import Navbar from "../components/navbar/navbar";

export default function Events() {
    return (
        <div>
            <Layout>
                <Navbar/>
                <div className="eventsPlugin">
                    <div id="fb-root"></div>
                    <script async defer crossOrigin="anonymous"
                            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0"
                            nonce="DdAGVbJx"></script>
                    <div className="fb-page" data-href="https://www.facebook.com/bluprint.art/" data-tabs="events"
                         data-width="500" data-height="600" data-small-header="true" data-adapt-container-width="true"
                         data-hide-cover="false" data-show-facepile="false">
                        <blockquote cite="https://www.facebook.com/bluprint.art/" className="fb-xfbml-parse-ignore"><a
                            href="https://www.facebook.com/bluprint.art/">Bluprintsocial</a></blockquote>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
