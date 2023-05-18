import { NextPage } from "next";
import Head from "next/head";

type SSGProps ={}

const ssg: NextPage<SSGProps> = () => {
    return (
        <div>
            <Head>
                <title>static Siet Generator</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    このページは静的サイト生成によって、ビルド時に生成されたページです。
                </p>
            </main>
        </div>
    );
}



export default ssg;