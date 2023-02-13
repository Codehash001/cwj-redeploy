import React from 'react'
import Slider from "react-slick";
import Head from 'next/head';

function Roadmap() {

  const settings = {
    dots: true,
    arrows: true,
    autoplay:true,
    autoplaySpeed:4000,
    pauseOnHover:true,
    infinite:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive:[
      {
        breakpoint : 1280,
        settings:{
          slidesToShow:3
        }
      },
      {
        breakpoint : 1000,
        settings:{
          slidesToShow:2
        }
      },
      {
        breakpoint : 650,
        settings:{
          slidesToShow:1
        }
      }
    ]
  };
  return (
    <>
    <Head>
        <title>Coffee With Jesus</title>
        <meta name="Description" content="Coffee with Jesus!" />
        <link rel="icon" href="/favicon_io/favicon.ico" />
        
       <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
	      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
    <div id='roadmap' className='w-screen h-full md:px-16 flex flex-col items-center' data-aos="fade-up">
        <h1 className='font-Archivo text-5xl bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent font-bold mt-8 mb-16'>Roadmap</h1>
    </div>
        {/* slider */}
<Slider {...settings}>
        <div className='h-[360px] md:h-[330px] p-6 flex flex-col items-center bg-gray-800 rounded-lg' data-aos="fade-up">
          <h1 className='text-2xl font-semibold text-brand-01 mb-2'>Phase one</h1>
          <h1 className='text-xl font-semibold text-white mb-6'>February 12, 2023</h1>
          <p className='text-gray-200 font-medium text-justify text-md'>
          The Cafe will be announcing the relaunching of our new website, and in celebration, we will be having a LIVE FREE MINTING of unique NFTs for 20 lucky Discord community members. We will announce the winners in our Cafe Community. Join now!
          </p>
        </div>

        <div className='h-[360px] md:h-[330px] p-6 flex flex-col items-center bg-gray-800 rounded-lg' data-aos="fade-up">
          <h1 className='text-2xl font-semibold text-brand-01 mb-2'>Phase two</h1>
          <h1 className='text-xl font-semibold text-white mb-6'>February 15, 2023</h1>
          <p className='text-gray-200 font-medium text-justify text-md'>
          The Cafe will begin the PRE SALE event of 40 NFTs from our website, and all community members who participate will be eligible for our Cafe merchandise giveaway. Join now!
          </p>
        </div>

        <div className='h-[360px] md:h-[330px] p-6 flex flex-col items-center bg-gray-800 rounded-lg' data-aos="fade-up">
          <h1 className='text-2xl font-semibold text-brand-01 mb-2'>Phase three</h1>
          <h1 className='text-xl font-semibold text-white mb-6'>February 18, 2023</h1>
          <p className='text-gray-200 font-medium text-justify text-md'>
          The Cafe will begin the PUBLIC SALE event of 109 NFTs unveiled from our web portal. All community members who mint 2 or more will be eligible for our fantastic Cafe merchandise giveaway, and will also be eligible for the Almighty NFTs. Join now!
          </p>
        </div>

        <div className='h-[360px] md:h-[330px] p-6 flex flex-col items-center bg-gray-800 rounded-lg' data-aos="fade-up">
          <h1 className='text-2xl font-semibold text-brand-01 mb-2'>Phase four</h1>
          <h1 className='text-xl font-semibold text-white mb-6'>March 3, 2023</h1>
          <p className='text-gray-200 font-medium text-justify text-md'>
          The Cafe ParadiseBean team will proudly begin our giveaway of our majestic CoffeeWithJesusNFT merchandise to the first 100 members community members who have minted our NFTs as a heavenly Thank You for your support.
          </p>
        </div>

        <div className='h-[360px] md:h-[330px] p-6 flex flex-col items-center bg-gray-800 rounded-lg' data-aos="fade-up">
          <h1 className='text-2xl font-semibold text-brand-01 mb-2'>Phase five</h1>
          <h1 className='text-xl font-semibold text-white mb-6'>March 8, 2023</h1>
          <p className='text-gray-200 font-medium text-justify text-md'>
          The Cafe will start the AUCTION of our spectacular ALMIGHTY PARADISE NFTs released on our marketplaces. This small collection will be revealed and announced on our community early, so join now! Details will be posted on our community channel.
          </p>
        </div>

        <div className='h-[360px] md:h-[330px] p-6 flex flex-col items-center bg-gray-800 rounded-lg' data-aos="fade-up">
          <h1 className='text-2xl font-semibold text-brand-01 mb-2'>Phase six</h1>
          <h1 className='text-xl font-semibold text-white mb-6'>March 20, 2023</h1>
          <p className='text-gray-200 font-medium text-justify text-md'>
          The Cafe ParadiseBean team will release the WISDOM OF AGES NFTS in an exclusive giveaway event to ONLY community members who have minted at least two of our collection OR at least one of our ALMIGHTY PARADISE NFTS. These magnificent tokens represent the ELITE level of our team's creations.
          </p>
        </div>

        <div className='h-[360px] md:h-[330px] p-6 flex flex-col items-center bg-gray-800 rounded-lg' data-aos="fade-up">
          <h1 className='text-2xl font-semibold text-brand-01 mb-2'>Phase seven</h1>
          <h1 className='text-xl font-semibold text-white mb-6'>TBA</h1>
          <p className='text-gray-200 font-medium text-justify text-md'>
          We are planning for so many great upcoming events based on our collection. Stay tuned on our Cafe Community for more news!
          </p>
        </div>

      </Slider>

    </>
  )
}

export default Roadmap
