import Head from 'next/head'
import Menu from '../component/menu'
export default function beranda(){
    return(
        <div>
            <Head>
                <title>Beranda</title>
            </Head>
            <body>
            <Menu></Menu>
            <center>
            <img className="gambar" src="/gambar/keluarga1.jpg"/> 
            </center>
            </body>
            <style jsx>{`
                .gambar{
                    width:100%;
                }
            `}</style>
        </div>
    )
}