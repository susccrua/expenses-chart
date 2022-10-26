export default function MyBalance(props) {
    return (
        <div className="flex items-center rounded-lg bg-soft-red text-pale-orange py-4 px-6 w-full">
            <div className="flex flex-col flex-auto">

                <h3 className="text-xs font-dm-sans">My balance</h3>
                <h2 className="text-xl font-dm-sans font-semibold">$921.48</h2>
            </div>
            <svg width="60" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24" /><circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23" /></g></svg>
        </div>
    )
}