export const IconLink = ({item}) => {
    return (
        <a href={item?.link} target="_blank" rel="noopener noreferrer" >
        <img src={item?.logo} alt="" height={24} width={24} className='h-6 w-6 xl:h-8 xl:w-8 hover:drop-shadow-glow transition duration-200'/>
      </a>
    );
}