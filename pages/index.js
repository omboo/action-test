import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Omboo</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div className="container">
          <a href="https://www.linkedin.com/company/omboo" target="_blank">
            <img className="logo" src="https://www.omboo.io/logo.png" />
          </a>
          <a className="mail" href="mailto:hello@omboo.io">
            hello@omboo.io
          </a>
        </div>
      </main>

      <style jsx>{`
        .container {
          display: flex;
          width: 100%;
          height: 100vh;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .logo {
          width: 300px;
        }

        .mail {
          font-size: 20px;
          text-decoration: none;
          color: gray;
          margin-top: 40px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          font-family: Confortaa;
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
