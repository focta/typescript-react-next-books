import { GetServerSideProps } from "next";
import Head from "next/head";

type SSRProps = {
  message: string;
};

const ssr: NextPage<SSRProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページはサーバーサイドレンダリングによってアクセス時にサーバーで描画されたページです。
        </p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<SSRProps> = async (
  context
) => {
  const timestamp = new Date().toLocaleDateString();
  const message = `${timestamp}にこのページのgetServerSidePropsが実行されました`;
  console.log(message);

  return {
    props: {
      message,
    },
  };
};

export default ssr;