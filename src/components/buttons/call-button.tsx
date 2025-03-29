"use client"

import { CALL_STATUS, useVapi } from '@/hooks/useVapi'
import { useMicrophone } from '@/hooks/useMicrophone'
import { ShinyButton } from '../magicui/shiny-button'
import VoiceIndicator from '../indicators/voice-indicator'
import ListeningIndicator from '../indicators/listening-indicator'
import LoadingIndicator from '../indicators/loading-indicator'

const CallButton = () => {
    const { start, callStatus, isSpeechActive } = useVapi()
    const { enableAudio } = useMicrophone()

    const startCall = () => {
        start();
        enableAudio()
    }

    return (
        <ShinyButton onClick={startCall} className="border-1 cursor-pointer font-bold py-6 px-10 text-white bg-black">
            {isSpeechActive ? <VoiceIndicator /> : (callStatus == CALL_STATUS.ACTIVE ? <ListeningIndicator /> : callStatus == CALL_STATUS.LOADING ? <LoadingIndicator /> : "Start a Call")}
        </ShinyButton >
    )
}

export default CallButton