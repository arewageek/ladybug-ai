import AudioButton from "@/components/buttons/audio-button";
import CallButton from "@/components/buttons/call-button";
import HangupButton from "@/components/buttons/hangup-button";
import StarRepo from "@/components/buttons/star-repo";
import { ThemeToggleButton } from "@/components/theme/ThemeToggleButton"; // Import here

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center gap-3">
      {/* Add the button here, positioned absolutely */}
      <ThemeToggleButton className="absolute top-6 right-6" /> 
      
      <div className='flex items-center justify-center h-fit gap-x-3 w-full text-white relative'>
        <AudioButton />
        <CallButton />
        <HangupButton />

        <div className="absolute -bottom-20 w-full flex left-0 justify-center">
          <StarRepo />
        </div>
      </div>
    </div>
  );
}
