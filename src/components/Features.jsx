export default function Features() {
  return (
    <section className="bg-[#F5F5F5] py-8 md:px-40 mt-16 mb-4 md:mt-2 font-semibold text-[#797979]">
      <div className="flex flex-col gap-5 flex-wrap items-center justify-around ">
        <div className="flex justify-between w-full md:w-4/5 px-2 md:px-4">
          <p>Create invoices</p>
          <p>Manage invoices</p>
          <p>Track invoices</p>
        </div>
        <div className="flex justify-between w-full md:w-4/5 px-2 md:px-4">
          <p>Generate receipts</p>
          <p>Manage clients</p>
          <p>Print Invoices</p>
        </div>
        <div className="flex justify-around w-full md:w-4/5 px-2 md:px-4">
          <p>Send Invoices</p>
          <p>Download Invoices</p>
        </div>
      </div>
    </section>
  );
}
