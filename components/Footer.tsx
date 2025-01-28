import Image from 'next/image'
import Link from 'next/link'
import { FOOTER_LINKS } from '@/constants'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex-center mb-24 bg-blue-300">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className=" flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image
              src="/heebrew.png"
              alt="heebrew"
              width={284}
              height={239}
            />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, index) => (
          
          <FooterColumn key={index} title={columns.title}>
            <ul className="regular-14 flex flex-col gap-4 text-black">
              { columns.links.map ((link) => (
                <Link href="/" key={link}>
                  {link}
                </Link>
              )) }
            </ul>
          </FooterColumn>
          ))}

          </div>

        </div>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer