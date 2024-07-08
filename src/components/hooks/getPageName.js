import { usePathname } from 'next/navigation'

const urls = [
    "/",
    "/work",
    "/work-event-management",
    "/work-art-department",
    "/work-advertisement",
    "/services",
    "/about",
    "/rentals",
    "/contact",
    "/privacy-policy",
    "/terms-of-services"
]

export const getPageName = () => {
    const pathname = usePathname();

    if( urls.includes(pathname) ){
        if(pathname == "/"){
            return "Home"
        }else if(pathname.slice(1,5) == "work" && pathname.length > 5){
            return pathname.slice(6,pathname.length)
        }else{
            return pathname.slice(1,pathname.length)
        }
    }else{
        return "Error 404"
    }
    
}

