"use client"

import React, { useState } from 'react'
import { ShinyButton } from './magicui/shiny-button'
import { vapi } from '@/lib/vapi.config'
import { assistant } from '@/assistants/assistant'
import { useVapi } from '@/hooks/useVapi'
import VoiceIndicator from './voice-indicator'



const AiButton = () => {

    const [isCallActive, setIsCallActive] = useState(false)

    const { isSpeechActive } = useVapi()

    const handleCall = async () => {
        setIsCallActive(!isCallActive)

        if (!isCallActive) {
            vapi.say("Hey bug")
            vapi.start(assistant)
            return;
        }
        vapi.stop()
    }

    return (
        <div>
            <ShinyButton onClick={handleCall} className={`border-1 cursor-pointer font-bold py-6 px-10  ${isSpeechActive ? "bg-red-500" : "bg-blue-500"}`}>
                {isSpeechActive ? <VoiceIndicator /> : (isCallActive ? "Listening ..." : "Start a Call")}
            </ShinyButton>
        </div>
    )
}

export default AiButton