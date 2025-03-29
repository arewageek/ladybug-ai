"use client"

import React, { useState } from 'react'
import { ShinyButton } from './magicui/shiny-button'
import { vapi } from '@/lib/vapi.config'
import { assistant } from '@/assistants/assistant'
import { CALL_STATUS, useVapi } from '@/hooks/useVapi'
import VoiceIndicator from './voice-indicator'



const AiButton = () => {

    const [isCallActive, setIsCallActive] = useState(false)

    const { isSpeechActive, start, callStatus, toggleCall } = useVapi()

    const handleCall = async () => {
        setIsCallActive(!isCallActive)
        toggleCall()


        if (!callStatus) {
            start()
            return;
        }
    }

    return (
        <div>
            <ShinyButton onClick={handleCall} className={`border-1 cursor-pointer font-bold py-6 px-10  ${isSpeechActive ? "bg-red-500" : "bg-blue-500"}`}>
                {isSpeechActive ? <VoiceIndicator /> : (callStatus == CALL_STATUS.ACTIVE ? "Listening ..." : callStatus == CALL_STATUS.LOADING ? "Say something..." : "Start a Call")}
            </ShinyButton>
        </div>
    )
}

export default AiButton