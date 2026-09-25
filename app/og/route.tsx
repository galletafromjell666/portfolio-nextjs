import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || 'Next.js Portfolio Starter'

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col w-full py-16 px-16 justify-center">
          <div tw="flex text-sm uppercase tracking-widest text-neutral-500 mb-6">
            giovanni aguirre
          </div>
          <h2 tw="flex text-6xl font-bold tracking-tight text-left text-black">
            {title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
