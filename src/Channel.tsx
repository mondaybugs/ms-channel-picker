import './App.css'

// const getURL = (url: string) => {
//     return new URL(`${url}`, import.meta.url).href
// }

function Channel({ number, items }: { number: number, items: string[] }) {
    const icons = [];

    for (let i = 0; i < items.length; i++) {
        icons.push(<img key={i} src={window.location.origin + "/ms-channel-picker" + items[i]} />);
    }

    return (
        <>
            <div className='channel'>
                <div className="number">
                    {number}
                </div>
                <div className="icons">
                    {icons}
                </div>
            </div>
        </>
    )
}

export default Channel
