import Carousel from "../ui/Carousel";

function Home() {
  return (
    <div className="mt-20 md:mt-20 w-full">
      <main className=" text-4xl">
        <Carousel />
        <div className="mx-8 mt-5 flex w-full flex-col justify-between sm:mx-8 md:mx-8 md:flex-row">
          <div className="my-5 w-1/2 pr-4 text-sm md:mx-9 md:my-5 md:w-1/2">
            To drive a motor vehicle in a public place every one must have
            driving licence. To obtain a driving licence one should hold a
            learner driving licence before appearing the driving test.
            Application for the learner&#39;s licence to be submitted to the
            licensing authority in the prescribed form along with related papers
            and fees. An applicant not being a foreign national must be able to
            read and write either Bengali or English. Successful candidate of
            the driving test have to submit application in the prescribed form
            to the licensing authority along with the related papers & fees.
          </div>
          <div className="mb-6 w-full sm:mb-5 md:my-6 md:w-1/2">
            <img src="/license.png" alt="license image" className=" w-[400px] h-[300px] md:w-[300px] md:h-[200px]" />
          </div>
        </div>
      </main>
    </div>
  );
}
export default Home;
