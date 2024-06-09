const styles = {
    heroHeadText:
        "font-bold lg:text-h2 sm:text-h3 xs:text-h4 text-h5 ",
    heroSubText:
        "font-outline-1 lg:text-large-base sm:text-base xs:text-footer text-base text-black",
    heroDescText:
        "text-sm border-s-2 ps-5 font-light lg:w-[650px] sm:w-[550px] xs:w-[450px] w-[325px] mt-5 text-slate-400",
    sectionHeadText:
        "md:text-h5 sm:text-h6 xs:text-base-large text-base text-blue-100 font-bold",
    sectionSubText:
        "sm:text-footer text-base text-teal-100 font-bold uppercase",
};

const NavStyles = {
    header: "w-full translate-y-0 fixed z-30 h-16 transition-all flex justify-between items-center bg-black/50 ",
    top: "fixed backdrop-blur",
    hide: "translate-y-[-4rem] bg-black/30",
    show: "fixed backdrop-blur bg-black/40",
}

const ButtonStyles = {
    primaryButton: "bg-sky-100 hover:bg-sky-150 text-white py-2 px-5 rounded-3xl leading-normal transition-all",

    utilityButton: "bg-green-500 hover:bg-sky-150 text-white py-3 px-5 rounded-3xl leading-normal transition-all",
    redUtilityButton: "text-footer relative flex items-center bg-red-300 text-white justify-center py-2 px-5 rounded-full w-72 block mx-auto",
    blueUtilityButton: "text-footer relative flex items-center bg-light-blue-300 text-white justify-center py-2 px-5 rounded-full w-72 block mx-auto",
}

const InputStyles = {
    errorMessage: "text-red-500 text-[12px]",

    input: "input input-bordered grow w-full focus:outline-1 placeholder:text-neutral-500 placeholder:text-sm text-sm p-1 px-2 h-[2.5rem] rounded-lg font-sm focus:outline-0 focus:border-sky-600"
}

const TableStyles = {
    borderStyle: "p-3 border-2 border-gray-300 text-center",
}

export { styles, NavStyles, ButtonStyles, InputStyles, TableStyles };