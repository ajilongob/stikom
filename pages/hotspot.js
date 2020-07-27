import Head from 'next/head'
import Menu from '../component/menu'
export default function hotspot(){
    return(
        <div>
            <Head>
                <title>Profil Hotspot</title>
            </Head>
            <Menu></Menu> 
            <center>
            <img className="gambar" src="/gambar/hotspot.png"/> 
            </center>
            <style jsx>{`
                .gambar{
                    width:100%;
                }
            `}</style>
        </div>
    )
}