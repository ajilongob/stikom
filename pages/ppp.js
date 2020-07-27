import Head from 'next/head'
import Menu from '../component/menu'
export default function ppp(){
    return(
        <div>
            <Head>
                <title>Profil PPP</title>
            </Head>
            <Menu></Menu> 
            <center>
            <img className="gambar" src="/gambar/ppp2.png"/> 
            </center>
            <style jsx>{`
                .gambar{
                    width:100%;
                }
            `}</style>
        </div>
    )
}