import Image from "next/image"
import Link from "next/link"

const socialProfiles = [
  {
    name: "GitHub",
    url: "https://github.com/danielprasetyo7952",
    icon: "/icons/github.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dprasetyo7952",
    icon: "/icons/linkedin.svg",
  },
  {
    name: "Email",
    url: "mailto:danielbudip789077@gmail.com",
    icon: "/icons/email.svg",
  }
]

export default function SocialProfiles() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {
        socialProfiles.map((profile, index) => (
          <Link key={index} target="_blank" href={profile.url}>
            <Image
              src={profile.icon}
              width={30}
              height={30}
              alt={profile.icon.split("/")[1].split(".")[0]}
              className="cursor-pointer" />
          </Link>
        ))
      }
    </div>
  )
}