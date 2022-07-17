import React from 'react'
import "../styles/PreFooter.css"
import "../styles/Footer.css"

// const repeatIcon = <svg xmlns="http://www.w3.org/2000/svg"  height="24px" viewBox="0 0 24 24" width="24px" class="ionicon" ><title>Repeat</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 120l48 48-48 48"/><path d="M352 168H144a80.24 80.24 0 00-80 80v16M192 392l-48-48 48-48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M160 344h208a80.24 80.24 0 0080-80v-16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>

// const shieldIcon = <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Shield Half</title><path d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464z"/></svg>

// const mapIcon = <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Map</title><path d="M313.27 124.64L198.73 51.36a32 32 0 00-29.28.35L56.51 127.49A16 16 0 0048 141.63v295.8a16 16 0 0023.49 14.14l97.82-63.79a32 32 0 0129.5-.24l111.86 73a32 32 0 0029.27-.11l115.43-75.94a16 16 0 008.63-14.2V74.57a16 16 0 00-23.49-14.14l-98 63.86a32 32 0 01-29.24.35zM328 128v336M184 48v336" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>



// const youtubeIcon = <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Youtube</title><path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"/></svg>

// const twitterIcon = <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Twitter</title><path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"/></svg>

// const facebookIcon = <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Facebook</title><path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fill-rule="evenodd"/></svg>

// const instagramIcon = <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Instagram</title><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/></svg>



const Footer = ({footer}) => {
  return (
    <>
    <div className="PreFooter">
        <div>
            {/* {repeatIcon} */}
            <p><b>Hassle-free replacement</b> <br/> 10-day easy replacement policy on mi.com</p>
        </div>

        <div>
            {/* {shieldIcon} */}
            <p><b>100% secure payments</b> <br/> We support Cards, Wallets, EMI and COD</p>
        </div>
        
        <div>
            {/* {mapIcon} */}
            <p><b>Vast service network</b> <br/> 1000 Mi service-centers across 600 cities</p>
        </div>
        
    </div>

    <div className="PreFooter2">
        <div> <p>LET'S STAY IN TOUCH</p> <span>Get updates on sales specials and more</span></div>

        <div>
            <div>
                <input type="email" name="email" placeholder="Enter Email Address" />
                <button>{'>'}</button>
            </div>
            <span>Thanks. You're on our email list for special offers.</span>
        </div>

        <div>
            <p>FOLLOW MI</p>
            <span>We want to hear from you!</span>
        </div>

        <div>
            {/* {facebookIcon} {youtubeIcon}  {instagramIcon}  {twitterIcon} */}
        </div>
    </div>

    <div className='footer'>
        <div>
            <p>SUPPORT</p>
            {footer.support.map((item)=>(
                <a key={item.url} href={item.url}>{item.name}</a>

            ))}
        </div>

        <div>
            <p>Shop AND LEARN</p>
            {footer.shopAndLearn.map((item,index)=>(
                <a key={item.url} href={item.url}>{item.name}</a>

            ))}
        </div>

        <div>
            <p>RETAIL STORE</p>
            {footer.retailStore.map((item,index)=>(
                <a key={item.url} href={item.url}>{item.name}</a>

            ))}
        </div>

        <div>
            <p>ABOUT</p>
            {footer.aboutUS.map((item,index)=>(
                <a key={item.url} href={item.url}>{item.name}</a>

            ))}
        </div>

        <div>
            <p>CONTACT US</p>
            {footer.contactUs.map((item,index)=>(
                <a key={item.url} href={item.url}>{item.name}</a>

            ))}
        </div>

        <div>
            <div>Chat with our Virtual AI Bot (24/7 Live Agent Support)</div>
<button>CHAT NOW</button>
        </div>
    </div>

    <div className="footerBorder">
    <div> Copyright @ 2010 - 2021 Xiaomi. All Rights Reserved</div>
    </div>

    </>
  )
}

export default Footer