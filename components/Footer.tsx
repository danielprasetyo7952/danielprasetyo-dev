import Image from "next/image"

{/*Component*/ }
import SocialProfiles from "./SocialProfiles"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-screen-lg 2xl:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-8">
        <div className="grid gap-2">
          <h5 className="text-md">
            <Image
              src={"/logo.png"}
              alt="Logo"
              width={30}
              height={30} 
              className="inline-block mr-1"/>
            DPrasetyo <span className="text-gray-400">danielbudip789077@gmail.com</span>
          </h5>
          <h5 className="text-md">
            Fullstack Web App Developer
          </h5>
          <p className="text-xs">
            Design Credit ~ Elias from Figma community
          </p>
        </div>
        <div className="grid gap-2">
          <h2 className="text-lg">Connect with Me</h2>
          <SocialProfiles exclude={["Email"]} />
        </div>
      </div>
      <p className="text-center my-8">
        &copy; 2024 DPrasetyo. All rights reserved.
      </p>
    </footer>
  )
}