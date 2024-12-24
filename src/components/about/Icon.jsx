const Icon = ({pathD, color}) => {
  return (
    <svg stroke="currentColor" 
         fill="currentColor" 
         strokeWidth="0" 
         viewBox="0 0 576 512" 
         height="2em" 
         width="2em" 
         color={color}
         xmlns="http://www.w3.org/2000/svg">
            <path d={pathD}>
            </path>
    </svg>
  )
}

export default Icon
