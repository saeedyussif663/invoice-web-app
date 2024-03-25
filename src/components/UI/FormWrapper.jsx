export default function FormWrapper({ children }) {
  return (
    <section className="w-screen h-screen flex items-center">
      <section className="w-[95%] h-auto md:w-[550px] mx-auto rounded-lg mt-8 mb-4 border border-[#737373] bg-white flex items-center justify-center shadow-xl">
        <article className="mx-auto w-[95%] md:w-[70%] mt-6 flex flex-col items-center mb-6">
          {children}
        </article>
      </section>
    </section>
  );
}
