import { Link } from "@mui/material"

const NavbarItem = ({url, pathD, name}) => {
    return (
      <Link href = {url}
             sx={{
              color : 'white',
              fontWeight : 'medium',
              fontSize : '22px',
              textDecoration : 'none',
              margin : 0,
              padding : 0,
              boxSizing : 'border-box'
             }}>
              {pathD ? <svg stroke="currentColor" 
                            fill="currentColor" 
                            viewBox="0 0 320 512"  
                            height="1em" 
                            width="1.5em" 
                            xmlns="http://www.w3.org/2000/svg">
                           <path d={pathD}></path></svg> : name}
       </Link>
    )
  
 
}

export default NavbarItem
