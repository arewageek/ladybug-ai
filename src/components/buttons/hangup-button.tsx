"use client"

import { PhoneOff } from 'lucide-react'
import { Button } from '../ui/button'
import { CALL_STATUS, useVapi } from '@/hooks/useVapi'

function HangupButton() {
    const { callStatus, stop } = useVapi()

    const endCall = () => {
        if (callStatus == CALL_STATUS.ACTIVE) stop()
    }

    return (
        <Button disabled={callStatus != CALL_STATUS.ACTIVE} onClick={endCall} className="bg-red-600 hover:black text-white font-bold h-[40pt] w-[40pt] rounded-xl poiner-cursor">
            <PhoneOff />
        </Button>
    )
}

export default HangupButton