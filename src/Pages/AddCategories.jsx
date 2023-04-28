import React from 'react'

const AddCategories = () => {
  return (
    <div style={{width: 'calc(100% - 290px)', marginLeft: 'auto' }}>
      <div className="dashboard-content transition-all duration-200 dark:bg-background  z-50 ml-0 mt-20 min-h-[calc(100vh-80px)] p-7">
        <section className="dark:bg-background">
          <div className="container mx-auto">
            <div className="flex justify-between items-center flex-wrap">
              <div className="flex text-gray-400 text-sm mb-4 items-center">
                <a href="#" className="font-medium text-gray-700 dark:text-gray-200"> Dashboard </a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-3 h-3 mx-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg> <span>Categories </span>
              </div>
            </div>
            <div className="bg-white shadow-front-2 dark:bg-foreground rounded-lg mb-7 overflow-hidden">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 mb-12 p-4">
                        <div>
                          <label className="text-base text-gray-700 dark:text-gray-200 block mb-3">Kateqoriyanın adı :</label>
                          <input type="text" id="name" className="border border-gray-200 placeholder:text-slate-500 text-slate-700 dark:bg-foreground dark:border-gray-800 rounded-lg px-4 py-[0.969rem] shadow-input focus:border-blue-200 focus:outline-none w-full mb-4" placeholder="Name" />
                        </div>
                        <div>
                          <label className="text-base text-gray-700 dark:text-gray-200 block mb-3">Kateqoriyanın valideyni :</label>
                          <input type="text" id="name" className="border border-gray-200 placeholder:text-slate-500 text-gray-700 dark:bg-foreground dark:border-gray-800 rounded-lg px-4 py-[0.969rem] shadow-input focus:border-blue-200 focus:outline-none w-full mb-4" placeholder="Parent  name" />
                        </div>
                        <div>
                          <label  className="text-base text-gray-700 dark:text-gray-200 block mb-3">Endirim faizi :</label>
                          <input type="number" id="name" className="border border-gray-200 placeholder:text-slate-500 text-gray-700 dark:bg-foreground dark:border-gray-800 rounded-lg px-4 py-[0.969rem] shadow-input focus:border-blue-200 focus:outline-none w-full mb-4" placeholder="Discount percentage" />
                        </div>
                        <div>
                          <label className="text-base text-gray-700 dark:text-gray-200 block mb-3"> Kateqoriyanın şəkli:</label>
                          <input type="file" id="icon" className="placeholder:text-gray-700 text-gray-700 dark:bg-foreground dark:border-gray-800 rounded-lg px-4 py-[0.969rem] shadow-input border  focus:outline-none w-full mb-4" />
                        </div>
                        <div>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center pl-10">
                        <button type="button" id="submit" className="mr-7 bg-blue-500 hover:bg-blue-600 px-8 font-medium py-2.5 rounded text-white mb-4"> Submit </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AddCategories