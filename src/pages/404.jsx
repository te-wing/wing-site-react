import { Helmet } from 'react-helmet'; // Helmet

export default function Error404() {
    return (
        <>
            <Helmet>
                <title>404 Not Found | Wingのサイト</title>
                <meta name="description" content="お探しのページは見つかりませんでした．削除されたか，移動した可能性があります．" />
            </Helmet>
            <h2>404 Nof Found</h2>
            <p>お探しのページは見つかりませんでした．削除されたか，移動した可能性があります．</p>
        </>
    );
}