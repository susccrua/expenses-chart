export default function Day(props) {
    const { amount, day, max } = props;
    const size = amount / max * 100
    console.log(max)
    return (
        <div className="flex flex-col items-center justify-end gap-1 group">
            <div className="relative bg-gray-800 p-2 rounded-md text-xs text-white text-center hidden group-hover:block">{'$' + amount}</div>
            <div className={"bg-pink-800 w-12 mx-1 hover:bg-pink-600 rounded-md "} style={{ 'height': size + '%' }} />
            <h3 className="text-xs text-gray-400 m-0.5">{day}</h3>
        </div>
    )
}