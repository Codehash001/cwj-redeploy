import {Link} from 'react-scroll/modules';

export default function Footer(){
    return(
        <div className="w-full h-auto">

<div className="flex flex-col items-center p-4 bg-white sm:p-6 dark:bg-gray-900">

    <h1 className="my-6 text-2xl md:text-4xl">Coffee With Jesus</h1>
    <div className='flex flex-row items-center justify-between w-[200px] md:px-0'>
    <a target='_blank' rel="noreferrer" href='https://www.instagram.com/invites/contact/?i=1tdilz110ip1f&utm_content=qc8yqu1'><svg xmlns="http://www.w3.org/2000/svg"  className="w-8 h-8" viewBox="0 0 24 24" ><path fill="#FF7F50" d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003" fill="#FF7F50"></circle></svg></a>
    <a target='_blank' rel="noreferrer" href='https://discord.gg/rBJfTDYE'><svg xmlns="http://www.w3.org/2000/svg"  className="w-8 h-8" viewBox="0 0 24 24" ><path fill="#FF7F50" d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg></a>
    <a target='_blank' rel="noreferrer" href='https://twitter.com/CoffeeWJesusNFT?t=Kh0eW_1sO1rqhOxCtOjcGw&s=09'><svg xmlns="http://www.w3.org/2000/svg"  className="w-8 h-8" viewBox="0 0 24 24" ><path fill="#FF7F50" d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path></svg></a>

    </div>
    <div className='flex flex-row items-center justify-between md:w-[400px] w-full my-6 w-auto'>
    <Link className="cursor-pointer" activeClass ="active" to='home' spy={true} smooth={true} offset={-70} duration={500}>
        <h1 className='mx-2'>Home</h1>
    </Link>
    <Link className="cursor-pointer" activeClass ="active" to='about' spy={true} smooth={true} offset={-70} duration={500}>
        <h1 className='mx-2'>About</h1>
    </Link>
    <Link className="cursor-pointer" activeClass ="active" to='mint' spy={true} smooth={true} offset={-70} duration={500}>
        <h1 className='mx-2'>Mint</h1>
    </Link>
    <Link className="cursor-pointer" activeClass ="active" to='roadmap' spy={true} smooth={true} offset={-70} duration={500}>
        <h1 className='mx-2'>Roadmap</h1>
    </Link>
    <Link className="cursor-pointer" activeClass ="active" to='team' spy={true} smooth={true} offset={-70} duration={500}>
        <h1 className='mx-2'>Team</h1>
    </Link>
    <Link className="cursor-pointer" activeClass ="active" to='faqs' spy={true} smooth={true} offset={-70} duration={500}>
        <h1 className='mx-2'>FAQ</h1>
    </Link>
        
    </div>

    <hr className="w-full my-6 border border-gray-700 sm:mx-auto dark:border-gray-200 lg:my-8" />

    <h1>All rights resereved , Coffee with Jesus 2023.</h1>
</div>

        </div>
    )
}
