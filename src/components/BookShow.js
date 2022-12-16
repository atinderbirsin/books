import cover from '../images/cover.jpg';

export default function BookShow({ title }) {
    return (
        <div className="border border-green-500 w-48 h-[292px] flex flex-col relative">
            <div className="self-end p-2 hover:cursor-pointer z-10">
                <div><i className="fa-solid fa-pen-to-square"></i></div>
                <div><i className="fa-solid fa-trash"></i></div>
            </div>

            <div className="self-center">
                <div><img className='absolute top-0 left-0 z-0' src={cover} alt={'cover'}/></div>
            </div>

            <div className="self-center z-10 mt-44">
                <div className='font-extrabold uppercase'>{ title }</div>
            </div>
        </div>
    ) 
}
