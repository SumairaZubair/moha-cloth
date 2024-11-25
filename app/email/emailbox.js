const EmailBox = () => {
    return (
      <div className="flex items-center justify-center min-h-[70vh] px-4">
        <div className="w-full md:w-[60%] lg:w-[40%] h-auto flex items-center flex-col justify-center text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-extralight text-black mb-3 md:mb-5">
            Subscribe to our emails
          </p>
          <p className="text-black text-sm md:text-base font-serif mb-3">
            Be the first to know about new collections and exclusive offers.
          </p>
          <input
            className="w-full max-w-[320px] border-2 font-serif text-black p-2 border-black h-10 mt-5"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
      </div>
    );
  };
  
  export default EmailBox;
  