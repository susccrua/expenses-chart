export default function Day(props) {
    const { amount, day, max } = props;
    const size = amount / max * 70
    const today = 'wed'
    return (
        <div className="flex flex-col flex-auto items-center justify-end group font-dm-sans">
            <div className="relative bg-dark-brown p-1.5 rounded-md text-xs text-white text-center hidden group-hover:block">{'$' + amount}</div>
            <div className={`m-1.5 w-10 rounded-md bg-soft-red ${day === today ? "bg-cyan group-hover:bg-light-cyan" : "bg-soft-red group-hover:bg-softer-red"}`} style={{
                'height': size + '%'
                // , 'background-color': (day === today) ? 'hsl(186, 34%, 60%)' : "hsl(10, 79%, 65%)" 
            }} />
            <h3 className="text-xs text-medium-brown m-0.5">{day}</h3>
        </div>
    )
}