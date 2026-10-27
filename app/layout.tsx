import type {Metadata} from 'next';
import './globals.css';
import {Header,Footer} from '@/components/site';
export const metadata:Metadata={title:{default:'BrightSmile Family Dentistry | A Brighter Kind of Dental Care',template:'%s | BrightSmile Family Dentistry'},description:'Explore thoughtful family dentistry, dental care options, and a simple appointment request experience with BrightSmile Family Dentistry.',metadataBase:new URL('https://brightsmile.example')};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}
