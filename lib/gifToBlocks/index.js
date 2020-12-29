import gifToImageDataArray from './gifToImageDataArray'
import ImageDataArrayToBlocksArray from './ImageDataArrayToBlocksArray'

// TO-DO: WebWorker

const gifToBlocks = async file => {
    let gifURL = window.URL.createObjectURL(file)

    let imageDataArray = await gifToImageDataArray(gifURL)

    window.URL.revokeObjectURL(gifURL) // Clean-up

    return  Promise.all(imageDataArray.map(imageData => ImageDataArrayToBlocksArray({
                imgData: imageData.data,
                exclude: []
            })))
}

export default gifToBlocks