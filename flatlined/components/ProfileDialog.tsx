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

interface ProfileItemProps {
  leftIcon: React.ReactNode,
  title: string,
  rightIcon: React.ReactNode
}

const ProfileItem: React.FC<ProfileItemProps> = ({
  leftIcon,
  title,
  rightIcon
}) => {
  return (
    <div className='flex justify-between items-center hover:shadow-lg p-8 py-3 mx-auto w-full max-w-[28rem] rounded-lg hover:scale-[102%] duration-150'>
      <div className='flex gap-2 text-white'>
        {leftIcon}
        <p className="text-neutral-200">{title}</p>
      </div>
      <div className="">{rightIcon}</div>
    </div>
  )
}

const profiles = [
  <Link key='email' href={`mailto:${email}`} className="hover:text-sky-400 duration-150 hover:translate-y-1">
    <ProfileItem
      leftIcon={<MdOutlineEmail size={24} />}
      title='Email'
      rightIcon={<FiExternalLink size={24}/>}
    />
  </Link>,
  <Link key='resume' href="/Chen_Justin_resume.pdf" locale={false} target="_blank" rel="noopener norefferer" className="hover:text-sky-400 duration-150 hover:translate-y-1">
    <ProfileItem
      leftIcon={<TiDocumentText size={24} />}
      title='Resume'
      rightIcon={<IconDownload size={24} />}
    />
  </Link>,
  <Link key='linkedin' href="https://www.linkedin.com/in/justin-flatlined/" target="_blank" className="hover:text-sky-400 duration-150 hover:translate-y-1">
    <ProfileItem
      leftIcon={<IconBrandLinkedin size={24} />}
      title='LinkedIn'
      rightIcon={<FiExternalLink size={24} />}
    />
  </Link>,
  <Link key='github' href="https://github.com/Jae7777" target="_blank" className="hover:text-sky-400 duration-150 hover:translate-y-1">
    <ProfileItem
      leftIcon={<IconBrandGithub size={24} />}
      title='Github'
      rightIcon={<FiExternalLink size={24} />}
    />
  </Link>,
  <Link key='devpost' href="https://devpost.com/jchen4086" target="_blank" className="hover:text-sky-400 duration-150 hover:translate-y-1">
    <ProfileItem
      leftIcon={<SiDevpost size={24} />}
      title='Devpost'
      rightIcon={<FiExternalLink size={24} />}
    />
  </Link>,
  <Link key='itchio' href="https://itch.io/profile/jae7777" target="_blank" className="hover:text-sky-400 duration-150 hover:translate-y-1">
    <ProfileItem
      leftIcon={<SiItchdotio size={24} />}
      title='Itch.io'
      rightIcon={<FiExternalLink size={24} />}
    />
  </Link>
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
      {profiles.map((profile) => (
        profile
      ))}
    </DialogContent>
  </Dialog>
)

export default ProfileDialog