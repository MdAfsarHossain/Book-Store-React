import React from "react";

const Banner = () => {
  // const [bannerBg, setBannerBg] = useState([]);
  
  // useEffect(() => {
  //   const localTheme = localStorage.getItem('theme');
  //   if (localTheme === 'light') {
  //     setBannerBg('bg-gray-50 border-green-600');
  //   } else {
  //     setBannerBg('bg-sunthwave border-green-600');
  //   }
  // }, [bannerBg])

  // console.log(bannerBg);

  return (
    <div className={`mt-10 flex flex-col gap-5 md:flex-row justify-between border-0 py-10 rounded-xl mb-10 bg-gray-100`}>
      
      <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-3 pl-5 md:pl-16 border-0 border-green-600 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold">Books to freshen</h1>
        <h1 className="text-4xl lg:text-6xl font-bold">up your bookshelf</h1>
        <button className="mt-4 btn bg-[#23BE0A] text-white border-2 border-[#23BE0A] hover:bg-transparent hover:border-[#23BE0A] hover:text-[#23BE0A] text-lg font-bold">View The List</button>

      </div>
      <div className="mt-8 md:mt-0 flex-1 h-56 md:h-96 flex flex-col justify-center items-center">
        <img className="h-96 md:h-full rounded-lg" src="https://marketplace.canva.com/EAFf0E5urqk/1/0/1003w/canva-blue-and-green-surreal-fiction-book-cover-53S3IzrNxvY.jpg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
