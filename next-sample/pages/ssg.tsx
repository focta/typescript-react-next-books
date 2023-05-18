import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

type SSGProps ={}

const ssg: NextPage<SSGProps> = (props) => {
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
                <Link href="/ssr">Go To SSR Page</Link>
            </main>
        </div>
    );
}

// getStaticPropsの動作を確認する
export const getStaticProps: GetStaticProps<SSGProps> = async(context) => {
    const timestamp =  new Date().toLocaleDateString()
    const message = `${timestamp} にgetStaticPropsが実行されました`
    console.log(message)
    return {
        props: {
            message
        }
    }
}

export default ssg;