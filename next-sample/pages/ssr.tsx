import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ButtonSample from "../components/ButtonSample";

type SSRProps = {
  message: string;
};

const SampleButtonOnClick = () => {
    alert("押されました")
}

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
        <Link
          href={{
            pathname: "/ssg",
            query: { keyword: "hello" },
          }}
        >
          <button>
            Button
          </button>
        </Link>
        <ButtonSample
            label=""
            text="サンプルのボタンです"
            disabled={false}
            onClick={SampleButtonOnClick}
            />
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
