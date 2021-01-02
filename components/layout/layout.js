import Head from "next/head";

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>BluPrint Art</title>
                <script src="https://kit.fontawesome.com/a5a13ba575.js" crossOrigin="anonymous"></script>
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Pathway+Gothic+One&family=Saira+Condensed:wght@300&display=swap" rel="stylesheet"/>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossOrigin="anonymous"/>
                <link rel="icon" href="public/logo.png" />
            </Head>
            {props.children}
        </div>
    )
};

export default Layout;
