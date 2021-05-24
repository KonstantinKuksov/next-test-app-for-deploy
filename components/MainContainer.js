import Head from 'next/head';
import A from './A';

const MainContainer = ({ children, keywords, title }) => {
  return (
    <>
      <Head>
        <meta keywords={('next', 'next.js', 'react', 'ssr' + keywords)}></meta>
        <title>{title} | Next App</title>
      </Head>
      <div className={'navbar'}>
        <A href={'/'} text="Main page" />
        <A href={'/users'} text="Users page" />
      </div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
