import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from './ui/separator';
import { IconBrandGithub, IconBrandLinkedin, IconCropPortrait, IconDownload } from '@tabler/icons-react';
import Link from "next/link";
import { SiDevpost, SiItchdotio } from "react-icons/si";
import { TiDocumentText } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";

const email = 'justin.flatlined@gmail.com'

const profiles = [
  {
    icon: <MdOutlineEmail size={24} />,
    title: 'Email',
    action: <Link href={`mailto:${email}`} className="hover:text-sky-400 duration-150 hover:translate-y-1"><FiExternalLink  size={24}/></Link>,
  },
  {
    icon: <TiDocumentText size={24} />,
    title: 'Resume',
    action: <Link href="/Resume.pdf" locale={false} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 duration-150 hover:translate-y-1"><IconDownload size={24}/></Link>,
  },
  {
    icon: <IconBrandLinkedin size={24} />,
    title: 'LinkedIn',
    action: <Link href="https://www.linkedin.com/in/justin-flatlined/" target="_blank" className="hover:text-sky-400 duration-150 hover:translate-y-1"><FiExternalLink  size={24}/></Link>,
  },
  {
    icon: <IconBrandGithub size={24} />,
    title: 'Github',
    action: <Link href="https://github.com/Jae7777" target="_blank" className="hover:text-sky-400 duration-150 hover:translate-y-1"><FiExternalLink  size={24}/></Link>,
  },
  {
    icon: <SiDevpost size={24} />,
    title: 'DevPost',
    action: <Link href="https://devpost.com/jchen4086" target="_blank" className="hover:text-sky-400 duration-150 hover:translate-y-1"><FiExternalLink  size={24}/></Link>,
  },
  {
    icon: <SiItchdotio size={24} />,
    title: 'Itch.io',
    action: <Link href="https://itch.io/profile/jae7777" target="_blank" className="hover:text-sky-400 duration-150 hover:translate-y-1"><FiExternalLink  size={24}/></Link>,
  }
]

const ProfileDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <IconCropPortrait className="size-8 text-white" />
    </DialogTrigger>
    <DialogContent className="max-w-[46rem] py-12 max-h-[85dvh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className='text-center'>Justin Chen</DialogTitle>
      </DialogHeader>
      <Separator orientation='horizontal' />
    
      {profiles.map((profile, index) => (
        <div className='flex justify-between items-center hover:shadow-lg p-8 py-3 mx-auto w-full max-w-[28rem] rounded-lg hover:scale-[102%] duration-150' key={index}>
          <div className='flex gap-2'>
            {profile.icon}
            <p className="text-neutral-200">{profile.title}</p>
          </div>
          <div>{profile.action}</div>
        </div>
      ))}

    </DialogContent>
  </Dialog>
)

export default ProfileDialog