import type {Metadata} from 'next';import {BlogPage} from '@/components/resources';
export const metadata:Metadata={title:'Patient Resources Blog',description:'General oral-health education and questions to discuss with a dental professional.'};
export default function Page(){return <BlogPage/>}
