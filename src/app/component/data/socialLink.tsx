import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SocialLink {
  address: string;
  source: string;
  alt?: string; // Optional alt text for accessibility
}

const socialData :SocialLink[]= [
    {
        address: "https://github.com/abdulwasay0245",
        source : "/github.png"
    },
      {
        address: "https://github.com/abdulwasay0245",
        source : "/facebook.png"
    },
      {
        address: "https://github.com/abdulwasay0245",
        source : "/linkedin.png"
    },
]

const Social = () => {
    return (
    socialData.map((socialData, index) => (
      <Link target="_blank" href={socialData.address} key={index} className=''>
        <Image
          width={24}
          height={24}
          src={socialData.source}
          alt="Social Link" // Add appropriate alt text
        />
      </Link>
    ))
  );
};
     
export default Social