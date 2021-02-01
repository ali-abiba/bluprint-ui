import Layout from "../components/layout/layout";
import Navbar from "../components/navbar/navbar";

export default function Events() {
    return (
        <div className="eventsMain">
            <Layout>
                <Navbar/>
                <div className="eventsPlugin">
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbluprint.art%2F&tabs=events&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                        width="500" height="500" style={{'border':'none','overflow':'hidden', 'margin': '0'}} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
            </Layout>
        </div>
    )
}
