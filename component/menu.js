import Link from 'next/link'
import Head from 'next/head'
export default function menu(){
    return(
        <div>
            <Head>
                <link rel="stylesheet" href="css/menu.css"/>
            </Head>
        <header>
            <div class="dp">
                <img src="../gambar/a.png"/>
                <label>AJI LAKSONO</label>
            </div>
            <ul>
                <Link href="/beranda">
                <li>Home</li>
                </Link>
                <li><p>Profil Paket</p>
                    <ul>
                        <Link href="/hotspot">
                        <li>Profil Hotspot</li>
                        </Link>
                        <Link href="/ppp">
                        <li>Profil PPP</li>
                        </Link>
                    </ul>
                </li>
                <Link href="/userhotspot">
                <li>List User</li>
                </Link>
                <Link href="/index">
                <li>Logout</li>
                </Link>
            </ul>
        </header>

    </div>
    )
  
}