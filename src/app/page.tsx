import AudioButton from "@/components/buttons/audio-button";
import CallButton from "@/components/buttons/call-button";
import HangupButton from "@/components/buttons/hangup-button";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center gap-3">
      <div className='flex items-center justify-center gap-x-3 w-full text-white'>
        <AudioButton />
        <CallButton />
        <HangupButton />
      </div>
    </div>
  );
}
