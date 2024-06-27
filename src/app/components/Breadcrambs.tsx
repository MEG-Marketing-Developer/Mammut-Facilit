import react from 'react';
import Link from 'next/link';

interface IProps {
pageTitle: string;
}

const Breadcrambs = ({ pageTitle}: IProps) => {
    return (
        <div className="bg-[url('../../public/images/Group84.png')] bg-cover px-12 sm:px-28 py-16 sm:py-44 flex justify-end flex-col items-start bg-right-top sm:bg-center">
            <h2 className='text-white font-bold text-4xl sm:text-6xl'>{pageTitle}</h2>
            <div className='flex text-white font-bold text-base sm:text-xl'>
            <Link href='/' className=''>Home /</Link>
            <span>  {pageTitle}</span>
        </div>
        </div>
    )
}

export default Breadcrambs;
