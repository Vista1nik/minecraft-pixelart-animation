import gifFrames from 'gif-frames'

const gifToImageDataArray = async file => {
    const rawFrames = await gifFrames({
        url: file,
        frames: 'all',
        outputType: 'canvas'
    })

    let imageDataArray = rawFrames.map(frameData => {
        return frameData.getImage().getContext('2d').getImageData(0,0, frameData.frameInfo.width, frameData.frameInfo.height)
    })

    return imageDataArray
}

export default gifToImageDataArray