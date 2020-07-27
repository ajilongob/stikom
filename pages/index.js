import Head from 'next/head'
export default function login() {
    return (
        <div>
            <Head>
                <title>JIBON.NET</title>
                <link rel="stylesheet" href="css/login.css"/>
            </Head>
            <body>
                <div className="container">
                    <div className="info">
                        <h1>
                        SELAMAT DATANG<br/>AJIBON.NET
                        </h1>
                        <span>
                        About Me.
                        </span>
                        <br/><br/><br/>
                        <h3>Aji Laksono || STIKOM BANYUWANGI</h3>
                        <h3>1118101586 || SM4.1</h3>
                    </div>
                </div>
                <div className="form">
                    <div className="thumbnail" > 
                        <img src="gambar/as.png" />
                    </div>
                    <form className="register-form">
                    </form>
                    <form className="login-form" action="/beranda">
                        <input placeholder="username" type="text"/>
                        <input placeholder="password" type="password"/>
                        <button>
                            Masuk
                        </button>
                        <p className="message">
                            Masukkan username dan password dengan benar.
                        </p>
                    </form>
                </div> 
            </body>
            <style jsx>
                {`
                `}
            </style>
        </div>
    )
}