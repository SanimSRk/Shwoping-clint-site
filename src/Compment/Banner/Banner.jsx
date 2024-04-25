import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import heroImg1 from '..//..//assets/applelaptop.png';
import heroImg2 from '..//..//assets/lgFreeze.png';
import heroImg3 from '..//..//assets/lgMonitor.png';
import heroImg4 from '..//..//assets/sonycemera.png';
import heroImg5 from '..//..//assets/imags.png';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[580px] bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4] grid items-center">
            <div className="w-[88%] mx-auto flex items-center">
              <div
                className="w-2/3
              "
              >
                <div className="flex gap-2 items-center">
                  <img className="w-16" src="/box.png" alt="" />
                  <h2 className="text-xl font-bold text-[#FF497C]">
                    Top Brands
                  </h2>
                </div>

                <h2 className="text-5xl font-bold my-4 leading-normal">
                  {' '}
                  Shop Smart, Shop TechWonders
                </h2>
                <p> Find the perfect tech solutions for your lifestyle.</p>
                <button className="btn border-none mt-6 bg-[#FF497C] text-white">
                  Explore Now
                </button>
              </div>

              <div className="">
                <img src={heroImg1} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className="h-[580px] bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4] grid items-center">
            <div className="w-[88%] mx-auto flex items-center">
              <div
                className="w-2/3
              "
              >
                <div className="flex gap-2 items-center">
                  <img className="w-16" src="/box.png" alt="" />
                  <h2 className="text-xl font-bold text-[#FF497C]">
                    Top Brands
                  </h2>
                </div>

                <h2 className="text-5xl font-bold my-4 leading-normal">
                  {' '}
                  Gourmet Freeze-Dried Vegetable Medley
                </h2>
                <p> Find the perfect tech solutions for your lifestyle.</p>
                <button className="btn border-none mt-6 bg-[#FF497C] text-white">
                  Explore Now
                </button>
              </div>

              <div className="">
                <img src={heroImg2} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className="h-[580px] bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4] grid items-center">
            <div className="w-[88%] mx-auto flex items-center">
              <div
                className="w-2/3
              "
              >
                <div className="flex gap-2 items-center">
                  <img className="w-16" src="/box.png" alt="" />
                  <h2 className="text-xl font-bold text-[#FF497C]">
                    Top Brands
                  </h2>
                </div>

                <h2 className="text-5xl font-bold my-4 leading-normal">
                  {' '}
                  Premium Sustainable Goods <br /> Selection
                </h2>
                <p> Find the perfect tech solutions for your lifestyle.</p>
                <button className="btn border-none mt-6 bg-[#FF497C] text-white">
                  Explore Now
                </button>
              </div>

              <div className="">
                <img src={heroImg3} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className="h-[580px] bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4] grid items-center">
            <div className="w-[88%] mx-auto flex items-center">
              <div
                className="w-2/3
              "
              >
                <div className="flex gap-2 items-center">
                  <img className="w-16" src="/box.png" alt="" />
                  <h2 className="text-xl font-bold text-[#FF497C]">
                    Top Brands
                  </h2>
                </div>

                <h2 className="text-5xl font-bold my-4 leading-normal">
                  {' '}
                  High-Performance Camera Lens Collection
                </h2>
                <p> Find the perfect tech solutions for your lifestyle.</p>
                <button className="btn border-none mt-6 bg-[#FF497C] text-white">
                  Explore Now
                </button>
              </div>

              <div className="">
                <img src={heroImg4} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className="h-[580px] bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4] grid items-center">
            <div className="w-[88%] mx-auto flex items-center">
              <div
                className="w-2/3
              "
              >
                <div className="flex gap-2 items-center">
                  <img className="w-16" src="/box.png" alt="" />
                  <h2 className="text-xl font-bold text-[#FF497C]">
                    Top Brands
                  </h2>
                </div>

                <h2 className="text-5xl font-bold my-4 leading-normal">
                  {' '}
                  Discover the Future of <br /> Electronics
                </h2>
                <p> Find the perfect tech solutions for your lifestyle.</p>
                <button className="btn border-none mt-6 bg-[#FF497C] text-white">
                  Explore Now
                </button>
              </div>

              <div className="">
                <img src={heroImg5} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
