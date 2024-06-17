import Image from "next/image"


const Blog4 = () => {
  return (
    <div>
      <p className="italic text-neutral-300 text-sm">
        {`07:39 PM, 17 June 2024`}
      </p>

      <p className="pt-6 pb-2 text-lg">Time, loop, and me</p>

      <p className="text-md text-neutral-400">
        {`Sometimes we do things without realizing it. It's called autopilot, and it's becoming a more common trend. I've been thinking about this a lot. There are moments where I don't feel in the present, and I feel days and weeks slipp by without me realizing it or having any control over it. I think I found an answer to why this is happening, or at least a cause of it`}
        <br/><br/>
        {`The scarcity loop is a three-part behavioral loop that evolved naturally in the human brain to help us find food in the past. It's the gamification of activities that encourages us to repeat them. Its three components are replayability, unexpected rewards, and opportunity. In our ancestors' time, food gathering fell right into the scarcity loop. Its opportunity was to not starve, replayability was a necessity, and unexpected rewards were the varied amount of food gained from each hunt. So it was a behavioral necessity for us to be hooked onto this loop.`}
        <br/><br/>
        {`Fast-forward to modern times, and this food scarcity no longer exists. But our brain is still wired to replay this loop; this gamification of activities. And once you become aware of this behavioral vulnerability you realize that every fucking industry in this world is trying to get you hooked and addicted, and has been successfully doing so for generations.`}
        <br/><br/>
        <div className="relative w-full h-[400px]">
          <Image 
            src="/blog/gambling_addict.webp"
            alt="Person playing the slot machine"
            fill
            className="object-cover"
          />
        </div>
        <br/><br/>
        {`Ever wonder why casino's make so much money? Every person with a brain understands that the house always wins. Yet Las Vegas still remains a gambling supercenter with millions of regular visitors to its casinos. If slot machine addicts know that they're going to lose money, why do they keep spinning the wheel? There's clearly no joy in it either; I mean, just look at their faces. It all ties back to the scarcity loop that our brain is engineered to fall addicted to. Research from a casino lab have shown that replacing the lever with a button increased slot machine playtime multifold. They optimized replayability by minimized effort (pulling a lever took more manual labor than tapping a button), and slot machine revenues soar.`}
        <br/><br/>
        {`These observations didn't stay within casinos, and every industry sector has since taken advantage. The social media industry is probably the biggest culprit of them all. It doesn't take long to figure out how apps like TikTok, Facebook, and Twitter exploit our weakness to make us an addict. Take my generation's biggest parasite, TikTok. The opportunity for the average viewer is to be entertained, the unexpected rewards being the level of entertainment a video provides, and the replayability being a swipe of our finger to the next video. For the platform creators, the opportunity is to gain fame and make income. The unexpected rewards are how the algorithm decides to recommend your content, and the replayability is the ease of content creation and uploading. With this cycle of content consumption and content generation optimized, it's no wonder why people I know spend double-digit hours everyday on these apps.`}
        <br/><br/>
        {`This isn't to say that our inclination towards the scarcity loop is a bad behavior. Gamification of exercising, money saving, and dieting can help enforce good habits. But too often companies take advantage of our lack of resistance without care for the adverse consequences of our health.`}
        <br/><br/>
        <div className="relative w-full h-[400px]">
          <Image 
            src="/blog/screen_time.webp"
            alt="Graph of Average Screen Time over years"
            fill
            className="object-fill"
          />
        </div>
        <br/><br/>
        {`Many people have stated that they felt the years pass by during and after COVID in the blink of an eye. One thing we saw with the pandemic is a massive increase in digital engagement and screen time, and that rise has not seen a drop after the pandemic. I believe that those two observations are related. Too often have I spent hours browsing YouTube without realizing it. I think in addition to our attention span and ability to think, we have given up something much more valuable to big corporations. And it is our limited time on this Earth. It digests me.`}
        <br/><br/>
        {`It's not all doom and gloom, though. The first step to change is always being aware of the problem. Learning about our behavior to scarcity has helped me regain some of the autonomy I had loss, and I now consciously decide the amount of time I want to spend on an app. If you're reading this, you have already past the first step. The next step is choosing to address the problem. I hope you join me in putting meaning back into our time.`}
      </p>
    </div>
  )
}

export default Blog4