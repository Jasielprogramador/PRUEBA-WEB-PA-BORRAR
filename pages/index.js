import Head from 'next/head';
import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TITULO DE LA PAGINA</title>
        <meta name='description' content='NEXT' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero heading='CHUPAME EL PITO' message='Barbero es un mamadu' boton='seguir' />
    </div>
  );
}
