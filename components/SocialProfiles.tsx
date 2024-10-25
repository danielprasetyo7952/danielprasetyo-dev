import Image from "next/image"
import Link from "next/link"

type Props = {
  type?: "horizontal" | "vertical"
  iconSize?: number,
  exclude?: string[]
}

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
  },
  {
    name: "Discord",
    url: "",
    icon: "/icons/discord.svg",
  }
]

export default function SocialProfiles({
  type = "horizontal",
  iconSize = 30,
  exclude = []
} : Props) {
  const className = type === "horizontal" ? "flex gap-4" : "flex flex-col gap-4"

  let contacts: { name: string, url: string, icon: string }[] = []
  if (exclude.length > 0) {
    contacts = socialProfiles.filter(profile => !exclude.includes(profile.name))
  } else {
    contacts = socialProfiles
  }

  return (
    <div className={`${className} justify-center items-center`}>
      {
        contacts.map((profile, index) => (
          <Link key={index} target="_blank" href={profile.url}>
            <Image
              src={profile.icon}
              width={iconSize}
              height={iconSize}
              alt={profile.name}
              className="cursor-pointer hover:opacity-50" />
          </Link>
        ))
      }
    </div>
  )
}