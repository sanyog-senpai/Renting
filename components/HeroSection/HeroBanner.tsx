import Image from 'next/image';
import image from "./../../public/assets/image/banner.png"
import Container from './../Container';
import { ButtonStyles, styles } from '@/app/styles';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <>
      <section className="bg-gray-900 pt-16 h-screen/5 flex items-center ">
        <Container>
          <div className="grid max-w-screen-xl px-4 py-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Renting Efficiently</h1>
              <div className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl">
                <p className={`${styles.heroDescText}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos <br />facilis repellendus eveniet minus eius. Tempora <br /> eligendi, perspiciatis numquam id.</p>
              </div>

              <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <Link href='/register'>
                  <button className={ButtonStyles.primaryButton}>Get Started</button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-end">
              <Image src={image} height="200" width='600' alt="mockup" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroBanner;