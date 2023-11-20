import Link from "next/link"
import Image from "next/image"
import Logo from './Helpdesk.png'
function Navbar() {
  return (
    <nav>
      <Image
      src={Logo}
      alt="iHelpdesk Logo"
      width={100}
      quality={100}
      placeholder="blur"
      
      />
    <h1>iHelpdesk</h1>
    <Link href='/'>Dashboard</Link>
    <Link href='/tickets'>Tickets</Link>
    </nav>
  )
}

export default Navbar