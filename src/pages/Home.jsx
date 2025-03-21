import { Helmet } from 'react-helmet'; // Helmet

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Wingのサイト</title>
                <meta name="description" content="Wingのサイト．地球在住．もしかしたら，大阪に住んでるかもしれません（知らんけど）．気になったら，ウェブサイト見てな．"/>
            </Helmet>
            <h2>Home</h2>
        </>
    );
}