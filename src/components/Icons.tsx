type IconProps = {
    icon?: string;
    onClick?: () => void;
}

export default function Icons({ icon, onClick }: IconProps) {
    switch (icon) {
        case "shoppingCart": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
        )
        case "favorites": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        )
        case "profile": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
        case "glass": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        )
        case "shoppingCartYellow": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#E7B810" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
        )
        case "lockOpen": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#21B727" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
        )
        case "lockClose": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FF0000" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
        )
        case "check": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
        case "checkGreen": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke='#21B727'
                className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
        case "favoritesRed": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="#FF0000" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FF0000" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        )
        case "clip": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
            </svg>
        )
        case "trash": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        )
        case "star": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="#FCD144" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FCD144" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
        )
        case "wishlist": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FCD144" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
            </svg>
        )
        case "right": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        )
        case "left": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        )
        case "edit": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
        )
        case "x": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        )
        case "time": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
        case "currency": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
        case "auction": return (
            <svg onClick={onClick} fill="#000000" stroke="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path d="M11.623 7.603l6.062 3.5c0.479 0.276 1.090 0.112 1.365-0.366 0.277-0.478 0.113-1.090-0.365-1.365l-6.062-3.5c-0.479-0.276-1.090-0.112-1.366 0.365s-0.112 1.089 0.366 1.366zM17.186 11.969l-6.062-3.5-3.5 6.062 6.062 3.5 3.5-6.062zM6.123 17.129l6.062 3.5c0.478 0.276 1.090 0.112 1.365-0.366s0.112-1.090-0.365-1.365l-6.062-3.5c-0.479-0.276-1.090-0.112-1.366 0.365-0.277 0.478-0.112 1.090 0.366 1.366zM27.012 19.951l-11.076-5.817-1 1.732 10.576 6.683c0.717 0.414 1.635 0.169 2.049-0.549s0.168-1.635-0.549-2.049zM16.033 25c0-0.553-0.448-1-1-1h-9c-0.553 0-1 0.447-1 1 0 0.552 0 1 0 1l-1.033-0.021 0.033 1.021h13l0.047-0.958-0.984-0.042c0 0-0.063-0.448-0.063-1z"></path>
            </svg>
        )
        case "discount": return (
            <svg onClick={onClick} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" stroke="currentColor">
                <path
                    d="M10 8.99998C10.5523 8.99998 11 9.44769 11 9.99998C11 10.5523 10.5523 11 10 11C9.44775 11 9.00004 10.5523 9.00004 9.99998C9.00004 9.44769 9.44775 8.99998 10 8.99998Z"
                    fill="#000000" />
                <path
                    d="M13 14C13 14.5523 13.4478 15 14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13C13.4478 13 13 13.4477 13 14Z"
                    fill="#000000" />
                <path
                    d="M10.7071 14.7071L14.7071 10.7071C15.0977 10.3166 15.0977 9.6834 14.7071 9.29287C14.3166 8.90235 13.6835 8.90235 13.2929 9.29287L9.29293 13.2929C8.90241 13.6834 8.90241 14.3166 9.29293 14.7071C9.68346 15.0976 10.3166 15.0976 10.7071 14.7071Z"
                    fill="#000000" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M16.3117 4.07145L15.1708 4.34503L14.5575 3.34485C13.3869 1.43575 10.6131 1.43575 9.44254 3.34485L8.82926 4.34503L7.68836 4.07145C5.51069 3.54925 3.54931 5.51063 4.07151 7.6883L4.34509 8.8292L3.34491 9.44248C1.43581 10.6131 1.43581 13.3869 3.34491 14.5575L4.34509 15.1708L4.07151 16.3117C3.54931 18.4893 5.51069 20.4507 7.68836 19.9285L8.82926 19.6549L9.44254 20.6551C10.6131 22.5642 13.3869 22.5642 14.5575 20.6551L15.1708 19.6549L16.3117 19.9285C18.4894 20.4507 20.4508 18.4893 19.9286 16.3117L19.655 15.1708L20.6552 14.5575C22.5643 13.3869 22.5643 10.6131 20.6552 9.44248L19.655 8.8292L19.9286 7.6883C20.4508 5.51063 18.4894 3.54925 16.3117 4.07145ZM11.1475 4.3903C11.5377 3.75393 12.4623 3.75393 12.8525 4.3903L13.8454 6.00951C14.0717 6.37867 14.51 6.56019 14.9311 6.45922L16.7781 6.01631C17.504 5.84225 18.1578 6.49604 17.9837 7.22193L17.5408 9.06894C17.4398 9.49003 17.6213 9.92827 17.9905 10.1546L19.6097 11.1475C20.2461 11.5377 20.2461 12.4623 19.6097 12.8525L17.9905 13.8453C17.6213 14.0717 17.4398 14.5099 17.5408 14.931L17.9837 16.778C18.1578 17.5039 17.504 18.1577 16.7781 17.9836L14.9311 17.5407C14.51 17.4398 14.0717 17.6213 13.8454 17.9904L12.8525 19.6097C12.4623 20.246 11.5377 20.246 11.1475 19.6097L10.1547 17.9904C9.92833 17.6213 9.49009 17.4398 9.069 17.5407L7.22199 17.9836C6.4961 18.1577 5.84231 17.5039 6.01637 16.778L6.45928 14.931C6.56026 14.5099 6.37873 14.0717 6.00957 13.8453L4.39036 12.8525C3.75399 12.4623 3.75399 11.5377 4.39036 11.1475L6.00957 10.1546C6.37873 9.92827 6.56026 9.49003 6.45928 9.06894L6.01637 7.22193C5.84231 6.49604 6.4961 5.84225 7.22199 6.01631L9.069 6.45922C9.49009 6.56019 9.92833 6.37867 10.1547 6.00951L11.1475 4.3903Z"
                    fill="#000000" />
            </svg>
        )
        case "6": return (
            <div onClick={onClick} className="w-6 h-6 bg-black text-white flex justify-center rounded-full">
                <span >
                    6
                </span>
            </div>
        )
        case "12": return (
            <div onClick={onClick} className="w-6 h-6 bg-black text-white flex justify-center rounded-full">
                <span >
                    12
                </span>
            </div>
        )
        case "24": return (
            <div onClick={onClick} className="w-6 h-6 bg-black text-white flex justify-center rounded-full">
                <span >
                    24
                </span>
            </div>
        )
        case "1": return (
            <div onClick={onClick} className="w-6 h-6 bg-black text-white flex justify-center rounded-full">
                <span >
                    1
                </span>
            </div>
        )
        case "6-yellow": return (
            <div onClick={onClick} className="w-6 h-6 bg-iconYellow flex justify-center rounded-full">
                <span >
                    6
                </span>
            </div>
        )
        case "12-yellow": return (
            <div onClick={onClick} className="w-6 h-6 bg-iconYellow flex justify-center rounded-full">
                <span >
                    12
                </span>
            </div>
        )
        case "24-yellow": return (
            <div onClick={onClick} className="w-6 h-6 bg-iconYellow  flex justify-center rounded-full">
                <span >
                    24
                </span>
            </div>
        )
        case "1-yellow": return (
            <div onClick={onClick} className="w-6 h-6 bg-iconYellowflex justify-center rounded-full">
                <span >
                    1
                </span>
            </div>
        )
        case "armas": return (
            <svg onClick={onClick} fill="#CE0B0B" className="w-6 h-6" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>relic-blade</title>
                <path d="M20.48 4.619l-0.071 2.265-1.593 0.425-0.071 1.77-8.53 8.495c0.054 1.561-1.068 2.634-2.053 2.548-1.476-0.129-2.059-1.067-2.053-2.336-0.985 1.071-1.514 2.43-1.522 3.787 1.009 0 2.021 0.274 2.915 0.814l-0.169 0.603c-1.535 1.084-3.246 2.879-4.077 4.332-0.102 0.179-0.186 0.344-0.254 0.497l-1.99 0.557-0.093 2.598 2.598-0.093 0.561-2.008c0.149-0.067 0.309-0.148 0.481-0.247 1.447-0.828 3.234-2.528 4.319-4.059l0.605-0.169c0.522 0.886 0.797 1.887 0.8 2.874 1.394 0 2.812-0.53 3.893-1.557-1.507-0.221-2.393-1.102-2.301-2.088 0.152-1.612 1.090-2.023 2.442-1.982l8.672-8.672 1.416-0.035 0.389-1.416 2.478-0.106 2.655-9.451-9.45 2.655zM26.38 10.254l-2.442 0.072-0.401 1.458-3.681 0.146 0.109-3.681 1.603-0.437 0.073-2.296 6.56-1.821-1.822 6.56z"></path>
            </svg>
        )

        case "tank": return (
            <svg onClick={onClick} viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 si-glyph si-glyph-shield">
                <g stroke="none" stroke-width="1" fill-rule="evenodd">
                    <path d="M3.068,1.976 L3.073,8.018 C3.073,13.006 9.021,15.979 9.021,15.979 C9.021,15.979 14.971,13.172 14.971,8.002 C14.971,2.832 14.972,1.976 14.972,1.976 C14.972,1.976 12.308,0.036 9.021,0.036 C5.732,0.036 3.068,1.976 3.068,1.976 Z M14.047,8.231 C14.047,12.175 9.324,14.913 9.002,15.068 L9.002,15.083 L8.987,15.076 L8.972,15.083 L8.972,15.068 C8.65,14.913 3.927,12.175 3.927,8.231 L3.923,2.567 C3.923,2.567 6.181,0.992 8.972,0.979 L8.972,0.978 C8.972,0.978 8.982,0.979 8.987,0.979 L9.002,0.978 L9.002,0.979 C11.793,0.992 14.051,2.567 14.051,2.567 L14.047,8.231 L14.047,8.231 Z M12.939,8.391 C12.939,11.826 9.268,13.853 9.017,13.988 L9.017,14 C9.017,14 9.007,13.996 9.006,13.994 L8.994,14 L8.994,13.987 C8.743,13.852 5.073,11.825 5.073,8.39 L5.069,3.461 C5.069,3.461 6.825,2.091 8.994,2.079 L8.994,2.079 L9.006,2.079 L9.017,2.079 C11.187,2.091 12.941,3.461 12.941,3.461 L12.939,8.391 L12.939,8.391 Z" fill="#8D5B2D" className="si-glyph-fill">
                    </path>
                </g>
            </svg>
        )
        case "fire": return (
            <svg onClick={onClick} className="w-6 h-6" viewBox="-33 0 255 255" stroke="#FE0000" strokeWidth="13" fill="#fc9502" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                <g id="fire">
                    <path d="M187.899,164.809 C185.803,214.868 144.574,254.812 94.000,254.812 C42.085,254.812 -0.000,211.312 -0.000,160.812 C-0.000,154.062 -0.121,140.572 10.000,117.812 C16.057,104.191 19.856,95.634 22.000,87.812 C23.178,83.513 25.469,76.683 32.000,87.812 C35.851,94.374 36.000,103.812 36.000,103.812 C36.000,103.812 50.328,92.817 60.000,71.812 C74.179,41.019 62.866,22.612 59.000,9.812 C57.662,5.384 56.822,-2.574 66.000,0.812 C75.352,4.263 100.076,21.570 113.000,39.812 C131.445,65.847 138.000,90.812 138.000,90.812 C138.000,90.812 143.906,83.482 146.000,75.812 C148.365,67.151 148.400,58.573 155.999,67.813 C163.226,76.600 173.959,93.113 180.000,108.812 C190.969,137.321 187.899,164.809 187.899,164.809 Z" id="path-1" className="cls-3" fill-rule="evenodd" />
                    <path d="M94.000,254.812 C58.101,254.812 29.000,225.711 29.000,189.812 C29.000,168.151 37.729,155.000 55.896,137.166 C67.528,125.747 78.415,111.722 83.042,102.172 C83.953,100.292 86.026,90.495 94.019,101.966 C98.212,107.982 104.785,118.681 109.000,127.812 C116.266,143.555 118.000,158.812 118.000,158.812 C118.000,158.812 125.121,154.616 130.000,143.812 C131.573,140.330 134.753,127.148 143.643,140.328 C150.166,150.000 159.127,167.390 159.000,189.812 C159.000,225.711 129.898,254.812 94.000,254.812 Z" id="path-2" className="cls-4" fill-rule="evenodd" />
                    <path d="M95.000,183.812 C104.250,183.812 104.250,200.941 116.000,223.812 C123.824,239.041 112.121,254.812 95.000,254.812 C77.879,254.812 69.000,240.933 69.000,223.812 C69.000,206.692 85.750,183.812 95.000,183.812 Z" id="path-3" className="cls-5" fill-rule="evenodd" />
                </g>
            </svg>
        )
        case "frost": return (
            <svg onClick={onClick} className="h-6 w-6" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" stroke="#11b0dc" fill="#54c8e9"
                xmlns="http://www.w3.org/2000/svg">

                <polyline className="cls-1" points="12 23.5 12 17.75 12 15.32" />
                <polyline className="cls-1" points="12 8.68 12 6.25 12 0.5" />
                <polyline className="cls-1" points="15.83 2.42 12 6.25 8.17 2.42" />
                <polyline className="cls-1" points="21.96 17.75 16.98 14.88 14.88 13.66" />
                <polyline className="cls-1" points="8.17 21.58 12 17.75 15.83 21.58" />
                <polyline className="cls-1" points="9.13 10.34 7.02 9.13 2.04 6.25" />
                <polyline className="cls-1" points="5.62 3.89 7.02 9.13 1.78 10.53" />
                <polyline className="cls-1" points="18.38 20.11 16.98 14.88 22.22 13.47" />
                <polyline className="cls-1" points="2.04 17.75 7.02 14.88 9.13 13.66" />
                <polyline className="cls-1" points="14.88 10.34 16.98 9.13 21.96 6.25" />
                <polyline className="cls-1" points="18.38 3.89 16.98 9.13 22.22 10.53" />
                <polyline className="cls-1" points="5.62 20.11 7.02 14.88 1.78 13.47" />
                <polygon className="cls-1" points="14.88 10.34 14.88 13.66 12 15.32 9.13 13.66 9.13 10.34 12 8.68 14.88 10.34" />
            </svg>
        )

        case "veneno": return (
            <svg onClick={onClick} className="h-6 w-6" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path fill="#226018"
                    d="M372.03 16.318c-18.85 0-37.693 7.71-49.214 23.125-25.114-24.456-78.796-13.708-78.796 32.248 0 6.683 1.14 12.617 3.156 17.81h126.906l43.98 182.098h-75.558l-10.514 90.42c35.93.896 72.553-22.212 72.553-69.356l-.002-.164c15.128 1.198 30.85-4.22 40.5-16.244 13.076 11.892 39.855 6.224 39.855-17.014 0-18.95-17.805-26.2-31.47-21.79-3.356-17.022-15.09-27.788-29.05-32.307 5.138-7.003 8.3-16.072 8.3-27.213 0-21.872-12.166-35.76-27.618-41.682.302-1.52.466-3.144.466-4.875 0-1.72-.164-3.333-.462-4.844 15.914-9.37 27.426-26.276 27.426-50.74 0-39.647-30.228-59.47-60.457-59.472zM98.7 39.695c-19.232-.137-38.25 10.7-43.63 35.428-12.75 58.617 76.628 78.058 89.38 19.44.482-2.216.8-4.37 1-6.473 11.744 3.185 25.72-1.606 29.114-17.207 5.824-26.77-29.91-37.59-42.388-18.38-8.952-8.2-21.255-12.72-33.475-12.808zm62.116 68.494L125.86 252.91h68.466l20.772 178.64h89.992l20.77-178.64h68.464L359.37 108.19H160.815zm308.83 11.29c-10.803 0-21.607 7.087-21.607 21.258 0 28.343 43.214 28.343 43.214 0 0-14.17-10.804-21.258-21.608-21.258zM169.11 167.477l67.292 47.228-79.062 7.078 11.77-54.306zm181.753 0l11.772 54.306-79.063-7.078 67.29-47.228zm111.537 9.42c-7.432 0-14.863 4.875-14.863 14.623 0 19.495 29.727 19.495 29.727 0 0-9.748-7.432-14.624-14.864-14.624zM48.125 189.58c-15.72 0-31.443 10.31-31.443 30.93 0 27.956 28.893 36.956 47.51 27.01 1.29 63.073 85.368 71.095 107.73 24.076h-69.8l19.61-81.192c-16.496-.246-33.104 5.812-44.212 18.184-4.752-12.67-17.072-19.008-29.395-19.008zm211.865 41.053l31.88 42.1-14.9 11.283-16.982-22.428-16.984 22.428-14.9-11.284 31.886-42.1zM40.38 272.738c-7.433 0-14.864 4.872-14.864 14.62 0 19.5 29.726 19.5 29.726 0 0-9.746-7.432-14.62-14.863-14.62zm141.222 32.56c-15.187.658-29.89 10.956-29.89 30.897 0 7.752 2.22 14.044 5.83 18.88-8.155 7.493-13.548 18.505-13.548 33.058 0 23.906 14.53 38.272 32.004 43.125-2.34 3.485-3.756 7.896-3.756 13.238 0 28.692 40.822 30.603 46.274 5.742h-20.06l-16.854-144.94zm147.244 83.747l-7.116 61.193h-52.253c11.388 26.444 46.265 32.527 68.462 18.252 5.28 35.71 62.494 33.894 62.494-5.445 0-25.93-24.858-35.552-43.317-28.875.058-1.037.096-2.087.096-3.162 0-22.225-12.56-36.207-28.367-41.963zm153.53 6.543c-7.142.088-14.38 5.985-11.946 15.072 4.1 15.304 27.436 9.05 23.336-6.254-1.666-6.22-6.505-8.878-11.39-8.818zM61.312 416.842c-13.135 0-26.27 8.613-26.27 25.842 0 17.23 13.14 25.846 26.275 25.843-.26 1.37-.404 2.828-.404 4.38 0 26.502 40.41 26.502 40.41 0 0-11.306-7.355-17.772-15.787-19.432 1.3-3.116 2.045-6.71 2.045-10.79 0-17.23-13.135-25.843-26.27-25.843zM463 431.766c-5.583.068-11.202 3.082-13.688 8.17-13.404-8.747-36.365 2.018-30.974 22.14 6.044 22.56 37.068 17.112 39.658-2.02 9.654 2.782 22.22-4.778 18.775-17.632-2.013-7.516-7.864-10.73-13.77-10.658zm-332.88 1.857c-7.43 0-14.862 4.875-14.862 14.623 0 19.496 29.724 19.496 29.724 0 0-9.75-7.43-14.623-14.86-14.623z" />
            </svg>
        )

        case "machete": return (
            <svg onClick={onClick} fill="#29CD0F" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 102.244 102.244">
                <g>
                    <path d="M67.91,22.268c0,1.182-0.958,2.14-2.141,2.14c-1.182,0-2.14-0.958-2.14-2.14c0-1.181,0.958-2.139,2.14-2.139
           C66.952,20.129,67.91,21.087,67.91,22.268z M86.263,64.323c0,0-4.209,4.765-4.209,7.09s1.885,4.209,4.209,4.209
           c2.323,0,4.208-1.884,4.208-4.209S86.263,64.323,86.263,64.323z M81.054,51.272c0-0.275,0.053-0.592,0.14-0.928l-0.598,0.792
           c-4.518,4.953-9.763,9.357-15.411,13.16c-6.76,5.708-14.417,10.68-22.66,13.483l-1.044,0.354l-8.594-6.193L8.914,93.376
           c-1.021,0.912-2.295,1.361-3.563,1.361c-1.47,0-2.932-0.602-3.989-1.784c-1.97-2.202-1.78-5.583,0.422-7.552L24,65.536
           l-0.793-0.572l-0.374-0.374l-1.295-1.446c-0.34-0.974-0.016-1.846,0.961-2.595c6.122-4.694,26.931-22.217,37.66-50.642l0.905-2.4
           l34.127,20.526l-1.073,1.826c-0.234,0.399-1.863,3.136-4.636,7.13c-0.557,1.412-1.225,2.84-1.276,4.067l-0.158,0.209
           c1.508,1.978,3.424,4.831,3.424,6.577c0,2.87-2.32,5.195-5.188,5.207c-0.475,1.155-1.383,1.948-2.438,1.948
           C82.304,54.997,81.054,53.329,81.054,51.272z M87.926,31.051c0.105,0.043,0.184,0.095,0.281,0.141
           c0.426-0.646,0.797-1.22,1.104-1.702L63.229,13.802C52.842,39.477,34.739,56.161,26.992,62.451l15.185,10.913
           c0.825-0.303,1.643-0.635,2.456-0.983c-2.938-2.415-6.056-5.431-7.095-9.124c-1.015-3.607,1.814-5.125,4.758-5.609
           c-0.032-1.84,0.58-3.495,2.752-4.191c1.29-0.414,7.281,1.906,7.401,1.531c0.478-1.484,1.806-2.133,3.29-1.868
           c3.008,0.536,2.474,1.636,1.69-1.038c-0.269-0.917-0.598-1.95-0.589-2.919c0.019-2.157,0.847-4.047,2.898-4.926
           c1.737-0.746,3.357-0.102,3.74-2.733c0.167-1.147,0.425-2.504,1.271-3.381c1.963-2.034,3.471-1.702,6.167-1.68
           c4.603,0.038,5.439-3.323,9.161-5.031C82.264,30.411,85.676,30.126,87.926,31.051z M95.963,71.437c0,0-6.281,7.111-6.281,10.582
           c0,3.469,2.813,6.281,6.281,6.281s6.281-2.812,6.281-6.281C102.244,78.548,95.963,71.437,95.963,71.437z" />
                </g>
            </svg>
        )

        case "hero": return (
            <svg onClick={onClick} className="w-6 h-6" stroke="currentColor" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="m 5.4501598,11.753877 c -0.129791,0.2622 -0.231671,0.4786 -0.226531,0.4863 0.0076,0.01 0.845022,0.1349 1.865755,0.2902 1.020723,0.1527 2.148237,0.3232 2.504678,0.3768 0.356331,0.053 0.6515522,0.097 0.6515522,0.094 0.01016,-0.01 -0.4225722,-0.8806 -0.4353022,-0.8806 -0.01017,0 -0.936732,-0.1884 -2.059216,-0.42 -1.122493,-0.2317 -2.046486,-0.42 -2.051626,-0.42 -0.0075,0 -0.11951,0.2137 -0.24931,0.4732 z m 2.858438,-4.7139999 c -0.272321,0.079 -0.280041,0.084 -0.272321,0.1503 0.0026,0.038 -0.01017,0.097 -0.03306,0.1298 -0.04078,0.061 -0.04078,0.061 0.208771,0.2392 l 0.24943,0.1808 0.084,-0.1451 c 0.13236,-0.2343 0.14767,-0.3055 0.09159,-0.4837 l -0.04837,-0.1501 -0.280041,0.079 z m 0.895953,-0.257 c -0.246851,0.071 -0.274891,0.084 -0.264731,0.1298 0.0051,0.03 0.03821,0.1527 0.07127,0.2723 l 0.05853,0.219 -0.09674,0.1883 c -0.05351,0.1043 -0.11963,0.2239 -0.145101,0.2673 l -0.04837,0.079 0.09674,0.064 c 0.05094,0.036 0.17057,0.1043 0.26216,0.1553 l 0.165431,0.094 0.19604,-0.3664 c 0.112041,-0.2062 0.196041,-0.3946 0.196041,-0.4353 0,-0.079 -0.183311,-0.7535 -0.203631,-0.7484 -0.0076,0 -0.13751,0.038 -0.28764,0.082 z m 0.8985322,-0.2571 c -0.1476702,0.043 -0.2697512,0.079 -0.2723312,0.081 -0.0026,0 0.05596,0.2138 0.132371,0.4658 0.07641,0.2546 0.1399602,0.4759 0.1399602,0.4938 0,0.015 -0.09416,0.2087 -0.2087802,0.4276 -0.117061,0.2189 -0.213791,0.4047 -0.218931,0.4149 -0.01017,0.02 0.12465,0.084 0.3945312,0.1857 l 0.157831,0.061 0.254571,-0.4811 c 0.15269,-0.2825 0.25702,-0.509 0.25702,-0.5523 0,-0.038 -0.07384,-0.3182 -0.16543,-0.6185 -0.09159,-0.3004 -0.165431,-0.5473 -0.165431,-0.5524 0,-0.013 -0.03306,0 -0.305381,0.074 z m 0.954483,-0.2902 c -0.13996,0.048 -0.257021,0.091 -0.259591,0.091 -0.0026,0 0.08657,0.2978 0.196041,0.6593 l 0.198491,0.6567 -0.290201,0.5396 c -0.160411,0.2978 -0.290201,0.5473 -0.290201,0.555 0,0.028 0.590562,0.1298 0.610892,0.1069 0.01273,-0.01 0.14767,-0.2571 0.302941,-0.5447 0.19861,-0.3716 0.28261,-0.5523 0.28261,-0.6109 0,-0.1196 -0.435311,-1.5502 -0.468371,-1.5476 -0.0153,0 -0.14253,0.043 -0.282611,0.094 z m -3.5507602,-1.8149 c -1.242114,0.2063 -2.171257,0.9698 -2.481788,2.0389 -0.13751,0.4736 -0.13751,0.9979 0.0026,1.4814 0.08915,0.3105 0.310531,0.7509 0.511592,1.0156 0.18576,0.2469 0.20106,0.2902 0.277471,0.7891 0.03049,0.196 0.0458,0.4504999 0.0458,0.7380999 l 0.0026,0.4377 0.12722,0.028 c 0.07127,0.015 0.895953,0.1883 1.832686,0.3843 0.939302,0.1961 1.733385,0.3641 1.769015,0.3717 0.05596,0.015 0.05094,0 -0.05094,-0.1121 -0.155261,-0.173 -0.297791,-0.4225 -0.333431,-0.5854 -0.0611,-0.2647 0.04837,-0.4377 0.338571,-0.5422 0.08915,-0.031 0.22653,-0.079 0.30796,-0.1069 0.07898,-0.028 0.1451012,-0.058 0.1451012,-0.069 -0.0026,-0.01 -0.1934712,-0.1094 -0.4275912,-0.2239 -0.659262,-0.3232999 -1.313384,-0.7406999 -2.051496,-1.3133999 -0.450492,-0.3488 -0.549792,-0.4479 -0.549792,-0.5447 0,-0.1043 0.10175,-0.2112 0.201061,-0.2112 0.05853,0 0.15269,0.061 0.402111,0.2596 0.997833,0.8018 2.092286,1.4636 2.7795882,1.685 0.155261,0.051 0.290201,0.092 0.297791,0.092 0.01016,0 0.01016,-0.1297999 0.0026,-0.2875999 l -0.0153,-0.2902 0.15012,-0.112 c 0.084,-0.061 0.150241,-0.117 0.152691,-0.1247 0,-0.01 -0.0993,-0.033 -0.221511,-0.059 -1.0537932,-0.2138 -2.2781572,-0.8425 -3.1765592,-1.6264 l -0.0993,-0.089 0.07885,-0.092 c 0.12233,-0.1374 0.15294,-0.2647 0.102,-0.4174 -0.02289,-0.066 -0.03306,-0.1298 -0.02289,-0.14 0.01016,-0.01 0.794192,-0.2316 1.743535,-0.4938 1.1352242,-0.3157 1.7232252,-0.4887 1.7232252,-0.5116 0,-0.056 -0.486121,-0.5217 -0.705062,-0.677 -0.4251412,-0.3029 -0.9773832,-0.5422 -1.5042742,-0.6567 -0.325841,-0.069 -1.041063,-0.089 -1.354164,-0.036 z m -0.361471,2.4717 c 0.03062,0.036 0.05596,0.097 0.05596,0.1399 0,0.1069 -0.122201,0.2266 -0.229101,0.2266 -0.09673,0 -0.229101,-0.1197 -0.229101,-0.2088 0.0052,-0.2163 0.259711,-0.3181 0.402242,-0.1577 z m 0.717802,-5.8543996 c -0.0916,0.02 -0.280041,0.092 -0.422572,0.1628 -0.13996,0.069 -0.2749,0.1273 -0.2978,0.1273 -0.02289,0 -0.142531,-0.051 -0.264731,-0.1145 -0.386941,-0.1985 -0.671992,-0.23409998 -0.936733,-0.1171 -0.11449,0.051 -0.290201,0.1961 -0.366491,0.3054 l -0.04836,0.066 0.246851,0 c 0.30294,0 0.384371,0.038 0.384371,0.1782 0,0.1222 -0.05596,0.1399 -0.420002,0.1399 -1.254853,0 -1.944605,0.3717 -2.252686,1.2167 -0.117061,0.3233 -0.155261,0.5422 -0.170571,1.0232996 -0.01775,0.5727 0.02804,0.9774 0.201061,1.8199 0.12723,0.6237 0.1298,0.6466 0.13237,1.0946 0.0026,0.3691 -0.0051,0.4861 -0.04078,0.6007 -0.05853,0.1884 -0.18575,0.3717 -0.320691,0.4684 -0.10432,0.071 -0.12477,0.076 -0.356321,0.076 -0.21637,0 -0.262161,-0.01 -0.376771,-0.069 -0.11682,-0.061 -0.249191,-0.1857 -0.335761,-0.3155 -0.05351,-0.079 -0.01788,0.3003 0.0458,0.5115 0.178161,0.5651 0.503992,0.9724 0.911263,1.1378 0.12722,0.051 0.18832,0.059 0.501421,0.059 0.402122,0 0.572692,-0.036 0.865473,-0.1756 0.0993,-0.046 0.229101,-0.1298 0.292771,-0.1859 l 0.11204,-0.1018 -0.10433,-0.2265 c -0.134931,-0.2928 -0.252001,-0.6618 -0.302931,-0.9596 -0.06368,-0.3589 -0.03821,-0.9927 0.05093,-1.316 0.147681,-0.5243 0.427591,-1.013 0.822122,-1.4254 0.239271,-0.252 0.432732,-0.4073 0.705063,-0.5651 0.0993,-0.059 0.18587,-0.1095 0.19347,-0.1145 0.0076,-0.01 -0.02033,-0.041 -0.06368,-0.074 -0.213791,-0.1732 -0.671992,-0.1833 -1.142813,-0.025 -0.287631,0.097 -0.422562,0.1121 -0.516732,0.059 -0.05853,-0.033 -0.17314,-0.1654 -0.15526,-0.1833 0.0051,-0.01 0.05596,0.01 0.10947,0.025 0.05596,0.02 0.1222,0.036 0.1451,0.038 0.02547,0 0.139961,-0.087 0.254571,-0.1908996 0.11706,-0.1069 0.272321,-0.2342 0.348731,-0.285 0.155261,-0.1044 0.391961,-0.1858 0.534492,-0.1858 0.24942,0 0.557381,0.168 0.837422,0.4556 l 0.170321,0.1730996 0.17315,-0.041 0.173141,-0.041 -0.01531,-0.1399996 c -0.03061,-0.2723 -0.124771,-0.4811 -0.280041,-0.6184 -0.183301,-0.1629 -0.626202,-0.2903 -0.913833,-0.2596 l -0.12979,0.013 0.10175,-0.038 c 0.05596,-0.023 0.206201,-0.059 0.330861,-0.079 0.419991,-0.074 0.748282,0 0.987543,0.219 0.16543,0.1501 0.267311,0.3487 0.318121,0.6236 l 0.03821,0.2036 0.473501,0 c 0.465792,0 0.865473,0.043 1.249714,0.1272996 l 0.16542,0.036 0.142531,-0.1526996 c 0.257151,-0.2723 0.3716312,-0.56 0.3971012,-0.98 0.01788,-0.3029 -0.01787,-0.5573 -0.1170602,-0.8475 -0.101871,-0.2953 -0.213791,-0.471 -0.448032,-0.7051 -0.2291,-0.2317 -0.460651,-0.3691 -0.727962,-0.4327 -0.20081,-0.046 -0.661592,-0.046 -0.888112,0 z">
                    </path>
                </g>
            </svg>
        )
        case "habilidad": return (
            <svg onClick={onClick} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="w-6 h-6">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path fill="#791313"
                        d="M214.02 19.115l-.02.06c38.033 14.387 73.867 34.09 106.393 58.446L368.02 158.4C292.254 72.063 181.72 20.678 64.66 20.604c-14.96-.01-30.027.834-45.14 2.535v18.8c108.174-12.774 213.91 21.292 293.527 88.554l42.314 97.416C290.887 132.486 182.425 73.885 66.395 73.21c-2.45-.013-4.9-.002-7.357.036-13.106.2-26.297 1.157-39.522 2.87v18.85c98.998-13.552 196.12 18.532 267.11 82.264l30.708 87.82C263.412 179.47 168.852 126.394 67.348 125.36c-15.818-.162-31.804.958-47.83 3.398v18.914c93.33-15.18 185.38 18.05 247.677 83.27l20.694 83.917C246.555 230.42 160.67 176.716 67.7 175.423c-1.256-.018-2.514-.025-3.774-.024-14.688.02-29.54 1.36-44.408 4.084v19.036c89.513-17.794 178.655 19.16 230.357 89.468l4.62 73.348c-28.973-83.013-107.888-136.692-193.257-135.87-13.8.132-27.768 1.693-41.72 4.78v19.188c77.22-18.904 155.333 13.983 197.095 77.14l5.873 57.49c23.33-6.283 47.534-13.218 68.727-20.873 19.194-6.93 35.884-14.525 46.596-22.038 5.354-3.756 9.142-7.478 11.174-10.574 2.033-3.096 2.47-5.184 2.098-7.59l-1.252-8.123 137.074-39.556C446.897 159.92 363.67 69.964 260.654 19.114H214.02zm278.86 273.922l-40.196 11.6c1.63 18.66-4.666 36.567-16.397 52.043-14.18 18.707-35.934 34.627-62.363 48.257-45.23 23.33-104.45 39.877-164.397 47.97l4.38 16.35c68.63-7.66 143.34-22.038 198.17-48.538 30.517-14.75 54.633-33.123 68.722-55.33 12.74-20.084 17.775-43.384 12.08-72.353zm-58.513 16.885l-65.027 18.765c-.736 4.345-2.345 8.51-4.733 12.147-3.925 5.98-9.462 10.986-16.068 15.62-13.213 9.266-30.996 17.098-50.978 24.316-31.927 11.53-68.41 20.998-99.558 29.134l6.644 24.79c59.027-7.79 117.64-24.153 160.71-46.366 24.828-12.805 44.388-27.573 56.037-42.94 8.804-11.614 13.283-23.135 12.972-35.466zm-261.754 77.43l-33.033 8.85 8.197 30.59c10.812 3.95 18.623 14.38 18.623 26.485 0 6.87-2.52 13.2-6.673 18.114l4.716 17.6 33.034-8.85-24.864-92.788zM138.22 443.79c-1.49 0-2.88.33-4.12.91l-75.6 20.255c2.926 4.706 4.625 10.24 4.625 16.14 0 .67-.03 1.33-.072 1.987l75.96-20.352c4.96-.386 8.698-4.37 8.698-9.453 0-5.35-4.138-9.488-9.49-9.488zM32.327 468.985c-6.798 0-12.11 5.312-12.11 12.11 0 6.798 5.312 12.11 12.11 12.11 6.798 0 12.111-5.312 12.111-12.11 0-6.798-5.313-12.11-12.11-12.11z">
                    </path>
                </g>
            </svg>
        )
        case "reverse": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        )
        case "upload": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
        )
        case "eye": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 absolute right-1 bottom-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

        )
        case "up": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
        )
        case "down": return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        )
        default: return (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
        )
    }
}