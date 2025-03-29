"use client"

import { useMicrophone } from '@/hooks/useMicrophone'
import { Button } from '../ui/button'
import { Mic, MicOff } from 'lucide-react'

const AudioButton = () => {
    const { toggleAudioPermssions, audioPermission } = useMicrophone()
    return (
        <Button onClick={toggleAudioPermssions} className={`w-[40pt] h-[40pt] rounded-full cursor-pointer ${audioPermission ? "bg-black" : "bg-red-600"}`}>
            {audioPermission ? <Mic /> : <MicOff />}
        </Button>
    )
}

export default AudioButton