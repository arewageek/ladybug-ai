import AudioButton from "@/components/buttons/audio-button";
import CallButton from "@/components/buttons/call-button";
import HangupButton from "@/components/buttons/hangup-button";
import StarRepo from "@/components/buttons/star-repo";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center gap-3 bg-[#F1EFEC]">
      <div className='flex items-center justify-center h-fit gap-x-3 w-full text-white relative'>
        <AudioButton />
        <CallButton />
        <HangupButton />

        <div className="absolute -bottom-20 w-full flex left-0 justify-center">
          <iframe src="https://ghbtns.com/github-btn.html?user=arewageek&repo=ladybug-ai&type=star&count=true&size=large" width="170" height="30" title="Star this repo on GitHub"></iframe>
        </div>
      </div>
    </div>
  );
}
