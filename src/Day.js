export default function Day(props) {
    const { amount, day, avg } = props;
    const size = `h-${Math.ceil(amount / avg) * 10}`
    console.log(size)
    return (
        <div className="flex flex-auto flex-col items-center justify-end">
            <div className={"bg-pink-800 rounded-md " + size}>{amount}</div>
            <h3 className="text-xs text-gray-400 m-0.5">{day}</h3>
        </div>
    )
}