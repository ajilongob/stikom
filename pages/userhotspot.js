import Head from 'next/head'
import Menu from '../component/menu'
export default function userhotspot(){
    return(
        <div>
            <Head>
                <title>User Hotspot</title>
            </Head>
            <Menu></Menu> 
            <center>
            <img className="gambar" src="/gambar/hotspot1.png"/> 
            </center>
            <style jsx>{`
                .gambar{
                    width:100%;
                }
            `}</style>
        </div>
    )
}