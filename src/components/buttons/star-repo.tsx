import React from 'react'
import { Button } from '../ui/button'
import { Github } from 'lucide-react'

const StarRepo = () => {
    return (
        <Button className='cursor-pointer'>
            <Github size={24} />
            <span style={{ marginLeft: '0.5rem' }}>Star this repo on GitHub</span>
        </Button>
    )
}

export default StarRepo