import type {Metadata} from 'next';
import {PatientResourcePage} from '@/components/resources';
import {patientResources} from '@/lib/data';
export function generateStaticParams(){return patientResources.map(x=>({slug:x.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=patientResources.find(x=>x.slug===slug);return {title:item?.title??'Patient Resources',description:item?.description??'Patient resources and information.'};}
export default async function PatientPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <PatientResourcePage slug={slug}/>;}
