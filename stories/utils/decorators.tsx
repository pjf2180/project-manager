export const StoryFrameDecorator = (storyFn: () => React.ReactNode) => {
    return (<div style={{border: '1px dashed #ccc' }} >
        {storyFn()}
    </div>)
}