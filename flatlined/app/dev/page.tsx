'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

const snippets = {
  Heroes: [
    {
      id: 'QEC',
      code: <Image
        src="/dev/qec_hero.png"
        alt="QEC"
        width={0}
        height={0}
        className="w-full h-full rounded-lg"
        sizes="50vw"
      />,
      onClick: (router: ReturnType<typeof useRouter>) => () => router.push("") // paste gh url
    }
  ],
  Buttons: [
    {
      id: "shadcn default",
      code: (
        <Button variant="default">
          Default
        </Button>
      ),
      onClick: (() => {}) // copy code to clcipboard
    },
    {
      id: "shadcn destructive",
      code: (
        <Button variant="destructive">
          Destructive
        </Button>
      ),
      onClick: (() => {}) // copy code to clcipboard
    },
    {
      id: "shadcn outline",
      code: (
        <Button variant="outline">
          Outline
        </Button>
      ),
      onClick: (() => {}) // copy code to clcipboard
    },
    {
      id: "shadcn secondary",
      code: (
        <Button variant="secondary">
          Secondary
        </Button>
      ),
      onClick: (() => {}) // copy code to clcipboard
    },
    {
      id: "shadcn ghost",
      code: (
        <Button variant="ghost">
          Ghost
        </Button>
      ),
      onClick: (() => {}) // copy code to clcipboard
    },
    {
      id: "shadcn link",
      code: (
        <Button variant="link">
          Link
        </Button>
      ),
      onClick: (() => {}) // copy code to clcipboard
    }
  ],
  Palettes: [
    {
      id: 'you are not colorbind',
      code: (
        <div className="grid grid-cols-3 md:grid-cols-6">
          {['#c7c2b8', '#ad9f96', '#585753', '#595856', '#1f1e20', '#ffed36',].map((color) => {
            return (
              <div 
                key={color} 
                className="aspect-square size-6"
                style={{ backgroundColor: color }}
              />
            )
          })}
        </div>
      ),
      onClick: (() => {})
    },
    {
      id: 'alluring red',
      code: (
        <div className="grid grid-cols-3 md:grid-cols-6">
          {['#3d5557', '#f5d6c1', '#fc5163'].map((color) => {
            return (
              <div 
                key={color} 
                className="aspect-square size-6"
                style={{ backgroundColor: color }}
              />
            )
          })}
        </div>
      ),
      onClick: (() => {})
    },
    {
      id: 'cyberpunk',
      code: (
        <div className="grid grid-cols-3 md:grid-cols-6">
          {["#212531", "#E3E5ED", "#f7d967", "#da8ae5", "#bfbfbf", "#f6b080", "#429dd7", '#272030',].map((color) => {
            return (
              <div 
                key={color} 
                className="aspect-square size-6"
                style={{ backgroundColor: color }}
              />
            )
          })}
        </div>
      ),
      onClick: (() => {})
    }
  ]
}

const DevPage = () => {
  return (
    <div className="mx-12 my-24 flex-col flex gap-12 max-w-[100vw]">
      {Object.keys(snippets).map((category, i) => {
        return (
          <div key={i} className="gap-3 flex flex-col">
            <p className="text-md md:text-lg lg:text-xl shadow-md w-fit mx-auto text-fln-gray-200">{category}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {snippets[category as keyof typeof snippets].map((snippet: any) => {
                return (
                  <div 
                    key={snippet.id} 
                    onClick={snippet.onClick} 
                    className="shadow-lg size-fit mx-auto"
                  >
                    {snippet.code}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DevPage